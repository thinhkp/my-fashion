import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/services/prisma";
import { countProductsByName, searchProductsByName } from "@/services/data";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("q") || "";
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    // Tìm kiếm sản phẩm
    const products = await searchProductsByName(query , limit , skip)

    // Đếm tổng số sản phẩm thỏa điều kiện
    const total = await countProductsByName(query)

    return NextResponse.json({
      data : products,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });

    
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
