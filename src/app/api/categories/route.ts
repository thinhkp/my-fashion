import { NextResponse } from "next/server";
import { prisma } from "@/services/prisma";

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        name: "asc",
      },
      where: {
        categorystatus: 1, // Active categories
      },
    });

    // Enhance response with full image URLs
    const categoriesWithImageUrls = categories.map((category) => ({
      ...category,
      imageUrl: category.image ? `/image/categories/${category.image}` : null,
    }));

    return NextResponse.json({
      categories: categoriesWithImageUrls,
      count: categories.length,
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { message: "Failed to fetch categories" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
