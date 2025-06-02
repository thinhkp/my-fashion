import { NextRequest, NextResponse } from "next/server";
import { Product } from "@/types/model";
import { prisma } from "@/services/prisma";

export type GetRes = {
  product?: Product;
  error?: string;
  message?: string;
};

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    const id = parseInt(params.id);

    if (isNaN(id)) {
      return NextResponse.json(
        { error: "ID sản phẩm không hợp lệ" },
        { status: 400 }
      );
    }

    const product: Product | null = await prisma.product.findUnique({
      where: { id },
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

    if (!product) {
      return NextResponse.json(
        { error: "Không tìm thấy sản phẩm" },
        { status: 404 }
      );
    }

    return NextResponse.json({ product });
  } catch (error) {
    console.error("Lỗi khi lấy thông tin sản phẩm:", error);
    return NextResponse.json(
      { error: "Đã xảy ra lỗi khi xử lý yêu cầu" },
      { status: 500 }
    );
  }
}
