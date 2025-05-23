import { searchProducts } from "@/services/data";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    
    // Get query parameters
    const sizes = searchParams.getAll("sizes") || [];
    const colors = searchParams.getAll("colors") || [];
    const minPrice = parseInt(searchParams.get("minPrice") || "0");
    const maxPrice = parseInt(searchParams.get("maxPrice") || "999999999");
    const categorySlug = searchParams.get("categorySlug")  || ""
    console.log( sizes ,colors );
    

    const products = await searchProducts({
      sizes,
      colors,
      minPrice,
      maxPrice,
      categorySlug
    });

    return NextResponse.json({
      success: true,
      data: products,
    });

  } catch (error) {
    console.error("Search products error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" , message : "" + error },
      { status: 500 }
    );
  }
}