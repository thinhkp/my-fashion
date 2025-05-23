import { NextResponse } from "next/server";
import { prisma } from "@/services/prisma";
export async function GET() {
  try {
    const sizes = await prisma.size.findMany({
      orderBy: {
        index: "asc",
      },
    });

    return NextResponse.json(sizes);
  } catch (error) {
    console.error("Error fetching sizes:", error);
    return NextResponse.json(
      { message: "Failed to fetch sizes" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
