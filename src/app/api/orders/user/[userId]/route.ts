import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/services/prisma";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ userId: string }> }
) {
  try {
    const params = await context.params;
    const userId = params.userId;

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    // Fetch orders for the specified user with related items, products, and variants
    const orders = await prisma.order.findMany({
      where: {
        userId: userId,
      },
      include: {
        user: {
          select: {
            displayname: true,
            email: true,
          },
        },
        items: {
          include: {
            product: {
              select: {
                name: true,
                sku: true,
              },
            },
            variant: {
              include: {
                image: {
                  select: {
                    imageurl: true,
                  },
                },
                size: true,
                color: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ orders }, { status: 200 });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
