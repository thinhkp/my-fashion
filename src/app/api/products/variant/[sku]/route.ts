import { NextResponse } from "next/server";
import { prisma } from "@/services/prisma";

export async function GET(
  request: Request,
  context: { params: Promise<{ sku: string }> }
) {
  try {
    const params = await context.params;
    const { sku } = params;

    if (!sku) {
      return NextResponse.json({ error: "SKU không hợp lệ" }, { status: 400 });
    }

    // Find the variant by SKU
    const variant = await prisma.productvariant.findFirst({
      where: {
        sku: sku,
      },
      include: {
        product: {
          select: {
            id: true,
            name: true,
            sku: true,
            price: true,
            discountprice: true,
            slug: true,
            description: true,
          },
        },
        color: true,
        size: true,
        image: true,
      },
    });

    if (!variant) {
      return NextResponse.json(
        { error: "Không tìm thấy sản phẩm" },
        { status: 404 }
      );
    }

    // Format the response data
    const responseData = {
      sku: variant.sku,
      name: variant.product.name,
      price: variant.product.price,
      discountprice: variant.product.discountprice,
      color: variant.color.name,
      colorCode: variant.color.code,
      size: variant.size.name,
      additionalprice: variant.additionalprice || 0,
      stockquantity: variant.stockquantity || 0,
      image: variant.image?.imageurl || null,
      slug: variant.product.slug,
      productId: variant.productid,
      variantId: variant.id,
    };

    return NextResponse.json({ variant: responseData }, { status: 200 });
  } catch (error) {
    console.error("Error fetching variant by SKU:", error);
    return NextResponse.json(
      {
        error: "Lỗi hệ thống khi lấy thông tin sản phẩm",
        details: String(error),
      },
      { status: 500 }
    );
  }
}
