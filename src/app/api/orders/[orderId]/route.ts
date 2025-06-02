import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/services/prisma";
import { Order } from "@/types/model";

export type GetRes = {
  order?: Order;
  error?: string;
};

// GET: Fetch order details
export async function GET(
  req: NextRequest,
  context: { params: Promise<{ orderId: string }> }
) {
  try {
    const params = await context.params;
    const orderId = params.orderId;

    if (!orderId) {
      return NextResponse.json(
        { error: "Order ID is required" },
        { status: 400 }
      );
    }

    // Fetch the order with all related data
    const order: Order | null = await prisma.order.findUnique({
      where: {
        id: orderId,
      },
      include: {
        user: {
          select: {
            email: true,
            displayname: true,
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
                color: true,
                size: true,
                image: {
                  select: {
                    imageurl: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json({ order });
  } catch (error) {
    console.error("Error fetching order details:", error);
    return NextResponse.json(
      { error: "Failed to fetch order details" },
      { status: 500 }
    );
  }
}

// PATCH: Update order status or payment status
export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ orderId: string }> }
) {
  try {
    const params = await context.params;
    const orderId = params.orderId;

    if (!orderId) {
      return NextResponse.json(
        { error: "Order ID is required" },
        { status: 400 }
      );
    }

    // Get the data to update
    const data = await req.json();

    // Validate data
    const updateData: { status?: number; paymentStatus?: number } = {};

    if (data.status !== undefined) {
      // Validate status is a number between 0 and 4
      if (typeof data.status !== "number" || data.status < 0) {
        return NextResponse.json(
          { error: "Invalid order status value" },
          { status: 400 }
        );
      }
      updateData.status = data.status;
    }

    if (data.paymentStatus !== undefined) {
      // Validate payment status is 0 or 1
      if (
        typeof data.paymentStatus !== "number" ||
        ![0, 1].includes(data.paymentStatus)
      ) {
        return NextResponse.json(
          { error: "Invalid payment status value" },
          { status: 400 }
        );
      }
      updateData.paymentStatus = data.paymentStatus;
    }

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json(
        { error: "No valid fields to update" },
        { status: 400 }
      );
    }

    // Update the order
    const updatedOrder = await prisma.order.update({
      where: {
        id: orderId,
      },
      data: updateData,
    });

    return NextResponse.json({
      message: "Order updated successfully",
      order: updatedOrder,
    });
  } catch (error) {
    console.error("Error updating order:", error);
    return NextResponse.json(
      { error: "Failed to update order" },
      { status: 500 }
    );
  }
}
