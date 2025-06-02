import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/services/prisma";
import { z } from "zod";
import { hasManageAccess } from "@/utils/verify-token";
import { COOKIE_NAME } from "@/config/cookie";

// Updated schema to match frontend data
const orderSchema = z.object({
  orderer: z.object({ userId: z.string().nullable().optional() }),
  receiver: z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email"),
    phone: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .max(11, "Phone number must be at most 11 digits"),
    address: z.string().min(5, "Address is required"),
    province: z.string().min(1, "Province is required"),
    district: z.string().min(1, "District is required"),
    ward: z.string().min(1, "Ward is required"),
  }),
  items: z.array(
    z.object({
      sku: z.string(),
      quantity: z.number().min(1, "Quantity must be at least 1"),
    })
  ),
  shippingMethod: z.string(),
  paymentMethod: z.string(),
});

export async function GET(request: NextRequest) {
  try {
    if (!(await hasManageAccess(request, COOKIE_NAME)))
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const url = new URL(request.url);
    const status = url.searchParams.get("status");
    const limit = parseInt(url.searchParams.get("limit") || "100");
    const page = parseInt(url.searchParams.get("page") || "1");
    const skip = (page - 1) * limit;

    // eslint-disable-next-line
    const where: any = {};
    if (status && !isNaN(parseInt(status))) {
      where.status = parseInt(status);
    }

    // Get orders with pagination
    const orders = await prisma.order.findMany({
      where,
      include: {
        user: {
          select: {
            email: true,
            displayname: true,
          },
        },
        items: {
          include: {
            variant: {
              select: {
                sku: true,
                color: true,
                size: true,
              },
            },
            product: {
              select: {
                id: true,
                name: true,
                slug: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      skip,
      take: limit,
    });

    // Get total count for pagination
    const totalOrders = await prisma.order.count({ where });

    return NextResponse.json({
      success: true,
      orders,
      pagination: {
        total: totalOrders,
        page,
        limit,
        totalPages: Math.ceil(totalOrders / limit),
      },
    });
  } 
  //eslint-disable-next-line
  catch (error: any) {
    console.error("Error fetching orders:", error);

    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while fetching orders",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Request body:", body);

    const parsedData = orderSchema.parse(body);
    console.log("Parsed data:", parsedData);

    // Calculate shipping fee based on total price
    let totalPrice = 0;
    const orderItems = [];

    // Check if all products exist and have enough stock
    for (const item of parsedData.items) {
      const variant = await prisma.productvariant.findFirst({
        where: {
          sku: item.sku,
        },
        include: { product: true },
      });

      if (!variant) {
        return NextResponse.json(
          {
            success: false,
            message: `Product with SKU ${item.sku} not found or out of stock`,
          },
          { status: 404 }
        );
      }

      if (variant.stockquantity < item.quantity) {
        return NextResponse.json(
          {
            success: false,
            message: `Not enough stock for product ${
              variant.product.name || "Unknown"
            } (${item.sku})`,
          },
          { status: 400 }
        );
      }

      // Calculate the item price (using discountprice if available)
      const itemPrice =
        variant.product.discountprice !== null &&
        variant.product.discountprice !== undefined
          ? variant.product.discountprice + (variant.additionalprice || 0)
          : variant.product.price + (variant.additionalprice || 0);

      // Add to total price
      totalPrice += itemPrice * item.quantity;

      // Prepare order item data
      orderItems.push({
        productId: variant.product.id,
        variantId: variant.id,
        quantity: item.quantity,
        price: itemPrice,
      });
    }

    // Calculate shipping fee (free if order is over 500,000)
    const shippingThreshold = 500000;
    const standardShippingFee = 30000;
    const shippingFee =
      totalPrice >= shippingThreshold ? 0 : standardShippingFee;

    // Add shipping fee to total
    const finalTotal = totalPrice + shippingFee;

    // Create a new order in the database
    const newOrder = await prisma.order.create({
      data: {
        userId: parsedData.orderer.userId || null,
        totalPrice: finalTotal,
        shippingFee: shippingFee,
        recipientName: parsedData.receiver.name,
        phone: parsedData.receiver.phone,
        paymentMethod: parsedData.paymentMethod,
        address:
          parsedData.receiver.address +
          `, ${parsedData.receiver.ward}, ${parsedData.receiver.district}, ${parsedData.receiver.province}`,
        items: {
          create: orderItems,
        },
        status: 0, // Initial status: Pending
        paymentStatus: 0, // Initial payment status: Unpaid
      },
      include: {
        items: true,
      },
    });

    // Update stock quantities
    for (const item of parsedData.items) {
      // Find the variant by SKU to get its unique ID
      const variant = await prisma.productvariant.findFirst({
        where: { sku: item.sku },
        select: { id: true },
      });
      if (variant) {
        await prisma.productvariant.update({
          where: { id: variant.id },
          data: {
            stockquantity: {
              decrement: item.quantity,
            },
          },
        });
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Order created successfully",
        orderId: newOrder.id,
        order: newOrder,
      },
      { status: 201 }
    );
  }
    //eslint-disable-next-line
   catch (error: any) {
    console.error("Order creation error:", error);

    // Handle validation errors
    if (error.name === "ZodError") {
      return NextResponse.json(
        { success: false, message: "Validation error", details: error.errors },
        { status: 400 }
      );
    }

    // Handle Prisma errors
    if (error.code) {
      return NextResponse.json(
        {
          success: false,
          message: "Database error",
          error: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: error.message || "An error occurred while creating the order",
      },
      { status: 500 }
    );
  }
}
