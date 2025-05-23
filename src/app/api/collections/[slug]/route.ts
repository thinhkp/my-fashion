import { getProductsByCategorySlug } from "@/services/data";
import { prisma } from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { slug: string };
}

export async function GET(request: NextRequest, context : Props) {
  try {
    const { params } = await context;
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json(
        { error: "Category slug is required" },
        { status: 400 }
      );
    }

    const cate = await prisma.category.findFirst({
      where: {
        slug: slug,
      },
      select: {
        slug: true,
      },
    });

    if (!cate) {
      return NextResponse.json(
        { error: "Category slug is not found" },
        { status: 400 }
      );
    }

    const products = await getProductsByCategorySlug(cate.slug || "")

    if (!products.length) {
      return NextResponse.json(
        { message: "No products found for this category" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      data: products,
      message: "Products fetched successfully",
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
