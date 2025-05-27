import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/services/prisma";
import { Order } from "@/types/model";


export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const userId = params.userId;

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    // Fetch orders for the specified user with related items, products, and variants
    const orders : Order[] = await prisma.order.findMany({
      where: {
        userId: userId,
      },
      include: {
        items: {
          include: {
            product: {
              select: {
                name: true,
                slug: true,
                productimage: {
                  take: 1,
                  select: {
                    imageurl: true,
                  },
                },
              },
            },
            variant: {
              include: {
                color: true,
                size: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({orders}, { status: 200 });
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
