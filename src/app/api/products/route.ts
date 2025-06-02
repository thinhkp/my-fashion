import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { mkdir } from "fs/promises";
import { prisma } from "@/services/prisma";
import { hasManageAccess } from "@/utils/verify-token";
import { COOKIE_NAME } from "@/config/cookie";

export async function POST(request: NextRequest) {
  try {

   if (!(await hasManageAccess(request, COOKIE_NAME)))
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const formData = await request.formData();
    const productDataStr = formData.get("productData");

    if (!productDataStr || typeof productDataStr !== "string") {
      return NextResponse.json(
        { message: "Missing product data" },
        { status: 400 }
      );
    }

    const productData = JSON.parse(productDataStr);
    const imageFiles = formData.getAll("images") as File[];
    const displayOrders = formData
      .getAll("displayorders")
      .map((order) => (typeof order === "string" ? parseInt(order) : 0));

    if (imageFiles.length === 0) {
      return NextResponse.json(
        { message: "At least one product image is required" },
        { status: 400 }
      );
    }

    // Create product in database
    const product = await prisma.product.create({
      data: {
        name: productData.name,
        slug: productData.slug,
        description: productData.description,
        sku: productData.sku,
        price: productData.price,
        discountprice: productData.discountprice || null,
        status: productData.status,
        isfeatured: productData.isfeatured,
        productcategory: {
          create: productData.categoryIds.map(
            (categoryId: string | number) => ({
              category: {
                connect: {
                  id:
                    typeof categoryId === "string"
                      ? parseInt(categoryId)
                      : categoryId,
                },
              },
            })
          ),
        },
      },
    });

    // Create upload directory if it doesn't exist
    const uploadDir = path.join(process.cwd(), "public/image/products");
    await mkdir(uploadDir, { recursive: true });

    // Save images and create image records
    const imageRecords = [];
    for (let i = 0; i < Math.min(imageFiles.length, 2); i++) {
      const imageFile = imageFiles[i];
      const displayOrder = displayOrders[i] || i;

      // Generate filename based on SKU pattern
      let filename;
      if (i === 0) {
        // First image uses just the SKU as filename
        filename = `${productData.sku}.webp`;
      } else {
        // Second image uses SKU_SUB
        filename = `${productData.sku}_SUB.webp`;
      }

      const filePath = path.join(uploadDir, filename);

      // Save file to server
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      await writeFile(filePath, buffer);

      // Create image record in database - store only the filename
      const imageRecord = await prisma.productimage.create({
        data: {
          imageurl: filename, // Store only the filename without path
          displayorder: displayOrder,
          productid: product.id,
        },
      });

      imageRecords.push(imageRecord);
    }

    // Create product variants if provided and handle variant-specific images
    if (productData.variants && productData.variants.length > 0) {
      // Track created color images to prevent duplicates
      const createdColorImages = new Map();

      // Bước 1: Tạo tất cả các ảnh màu sắc trước
      for (let i = 0; i < productData.variants.length; i++) {
        const variant = productData.variants[i];

        if (
          variant.imageid !== null &&
          variant.imageid >= 2 &&
          variant.colorid
        ) {
          const colorId = variant.colorid;

          // Chỉ tạo ảnh cho màu này nếu chưa được tạo
          if (!createdColorImages.has(colorId)) {
            const variantImageIndex = variant.imageid;

            if (variantImageIndex < imageFiles.length) {
              // Generate color-specific filename
              const colorFilename = `${productData.sku}_${colorId}.webp`;
              const colorFilePath = path.join(uploadDir, colorFilename);

              try {
                // Lưu file ảnh màu sắc trực tiếp từ mảng imageFiles
                const buffer = Buffer.from(
                  await imageFiles[variantImageIndex].arrayBuffer()
                );
                await writeFile(colorFilePath, buffer);

                // Tạo bản ghi ảnh mới cho màu này
                const colorImageRecord = await prisma.productimage.create({
                  data: {
                    imageurl: colorFilename,
                    displayorder:
                      displayOrders[variantImageIndex] || variantImageIndex,
                    productid: product.id,
                  },
                });

                // Lưu ID ảnh cho màu này để sử dụng sau
                createdColorImages.set(colorId, colorImageRecord.id);
              } catch (err) {
                console.error(`Lỗi khi tạo ảnh cho màu ${colorId}:`, err);
              }
            }
          }
        }
      }

      // Bước 2: Tạo các biến thể sản phẩm và liên kết với ảnh đã tạo
      for (const variant of productData.variants) {
        let variantImageId = null;

        // Lấy ID ảnh đã tạo dựa vào màu của variant
        if (variant.colorid && createdColorImages.has(variant.colorid)) {
          // Nếu có ảnh đã tạo cho màu này, sử dụng ID ảnh đó
          variantImageId = createdColorImages.get(variant.colorid);
        } else {
          // Nếu không có ảnh đặc biệt cho màu này hoặc không có màu,
          // sử dụng ảnh chính của sản phẩm (ảnh đầu tiên)
          variantImageId = imageRecords[0]?.id || null;
        }

        // Tạo dữ liệu cho biến thể
        const variantData = {
          sku: variant.sku,
          stockquantity: variant.stockquantity,
          additionalprice: variant.additionalprice || null,
          colorid: variant.colorid,
          sizeid: variant.sizeid,
          productid: product.id,
        };

        // Thêm imageid vào dữ liệu variant nếu có
        if (variantImageId !== null) {
          // eslint-disable-next-line
          // @ts-ignore
          variantData.imageid = variantImageId;
        }

        // Tạo biến thể sản phẩm
        await prisma.productvariant.create({
          data: variantData,
        });
      }
    }

    return NextResponse.json({
      message: "Product created successfully",
      productId: product.id,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { message: "Failed to create product", error: (error as Error).message },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: {
        productimage: {
          orderBy: {
            displayorder: "asc",
          },
          take: 1,
        },
        productcategory: {
          include: {
            category: true,
          },
        },
      },
      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { message: "Failed to fetch products" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}


