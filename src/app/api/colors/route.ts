import { NextResponse } from "next/server";

import { prisma } from "@/services/prisma";

export async function GET() {
  try {
    const colors = await prisma.color.findMany({
      orderBy: {
        name: "asc",
      },
    });

    return NextResponse.json(colors);
  } catch (error) {
    console.error("Error fetching colors:", error);
    return NextResponse.json(
      { message: "Failed to fetch colors" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
