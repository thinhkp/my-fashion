import { COOKIE_NAME } from "@/config/cookie";
import { getProductBySlug } from "@/services/data";
import { Product } from "@/types/model";
import { hasManageAccess } from "@/utils/verify-token";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/services/prisma";

interface Props {
  params: Promise<{ slug: string }>;
}

export type GetRes = {
  data?: Product;
  message: string;
  error?: string;
};

export type DeleteRes = {
  success: boolean;
  message: string;
  error?: string;
};

export type UpdateRes = {
  data?: Product;
  success: boolean;
  message: string;
  error?: string;
};

export async function GET(request: NextRequest, context: Props) {
  try {
    const params = await context.params;
    const { slug } = params;

    if (!slug) {
      return NextResponse.json(
        { error: "Product slug is required" },
        { status: 400 }
      );
    }

    const product: Product | null = await getProductBySlug(slug);

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const response = NextResponse.json({
      data: product,
      message: "Product fetched successfully",
    });

    // Add cache headers
    const cacheControl = request.headers.get("Cache-Control");

    console.log(cacheControl);

    if (cacheControl) {
      response.headers.set("Cache-Control", cacheControl);
      response.headers.set("CDN-Cache-Control", cacheControl);
      response.headers.set("Vercel-CDN-Cache-Control", cacheControl);
    }

    return response;
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, context: Props) {
  try {
    // Check authentication
    if (!(await hasManageAccess(request, COOKIE_NAME)))
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    // Get product slug from params
    const params = await context.params;
    const { slug } = params;

    if (!slug) {
      return NextResponse.json(
        { success: false, error: "Product slug is required" },
        { status: 400 }
      );
    }

    // Find product by slug
    const product = await prisma.product.findFirst({
      where: { slug },
      include: {
        orderItem: { take: 1 }, // Check if product has any order items
      },
    });

    if (!product) {
      return NextResponse.json(
        { success: false, error: "Product not found" },
        { status: 404 }
      );
    }

    // Check if product is associated with any orders
    if (product.orderItem && product.orderItem.length > 0) {
      // Instead of preventing deletion, mark the product as inactive
      await prisma.product.update({
        where: { id: product.id },
        data: { status: 0 }, // Inactive status
      });

      return NextResponse.json({
        success: true,
        message:
          "Product has existing orders. It has been marked as inactive instead of deleted.",
      });
    }

    // Delete product and all related data in a transaction
    await prisma.$transaction(async (tx) => {
      // Delete product variants
      await tx.productvariant.deleteMany({
        where: { productid: product.id },
      });

      // Delete product categories
      await tx.productcategory.deleteMany({
        where: { productid: product.id },
      });

      // Delete product images
      await tx.productimage.deleteMany({
        where: { productid: product.id },
      });

      // Finally delete the product
      await tx.product.delete({
        where: { id: product.id },
      });
    });

    return NextResponse.json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, context: Props) {
  try {
    // Kiểm tra xác thực
    if (!(await hasManageAccess(request, COOKIE_NAME)))
      return NextResponse.json(
        { message: "Không có quyền truy cập" },
        { status: 401 }
      );

    // Lấy slug từ tham số
    const params = await context.params;
    const { slug } = params;

    if (!slug) {
      return NextResponse.json(
        { success: false, error: "Slug sản phẩm là bắt buộc" },
        { status: 400 }
      );
    }

    // Tìm sản phẩm theo slug
    const existingProduct = await prisma.product.findFirst({
      where: { slug },
    });

    if (!existingProduct) {
      return NextResponse.json(
        { success: false, error: "Không tìm thấy sản phẩm" },
        { status: 404 }
      );
    }

    // Lấy dữ liệu cập nhật từ request
    const data = await request.json();

    // Cập nhật sản phẩm
    const updatedProduct = await prisma.product.update({
      where: { id: existingProduct.id },
      data: {
        name: data.name,
        slug: data.slug,
        description: data.description,
        sku: data.sku,
        price: data.price,
        discountprice: data.discountprice,
        status: data.status,
        isfeatured: data.isfeatured,
      },
      include: {
        productimage: true,
        productcategory: {
          include: {
            category: true,
          },
        },
        productvariant: {
          include: {
            color: true,
            size: true,
            image: true,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      data: updatedProduct,
      message: "Cập nhật sản phẩm thành công",
    });
  } catch (error) {
    console.error("Lỗi khi cập nhật sản phẩm:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Lỗi máy chủ nội bộ",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
