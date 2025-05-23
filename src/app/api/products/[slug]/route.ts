import { getProductBySlug } from "@/services/data";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { slug: string };
}

export async function GET(request: NextRequest, context: Props) {
  try {
    const { params } = await context;
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json(
        { error: "Product slug is required" },
        { status: 400 }
      );
    }

    const product = await getProductBySlug(slug);

    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    const response = NextResponse.json({
      data: product,
      message: "Product fetched successfully",
    });

    // Add cache headers
    const cacheControl = request.headers.get('Cache-Control');

    console.log(cacheControl);
    
    if (cacheControl) {
      response.headers.set('Cache-Control', cacheControl);
      response.headers.set('CDN-Cache-Control', cacheControl);
      response.headers.set('Vercel-CDN-Cache-Control', cacheControl);
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