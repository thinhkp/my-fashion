import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/services/prisma";
import { z } from "zod";
import { hasManageAccess } from "@/utils/verify-token";
import { COOKIE_NAME } from "@/config/cookie";

// Define the schema for order validation
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
      price: z.number().min(0, "Price must be a positive number"),
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

    // Build where clause
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
  } catch (error: any) {
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
    console.log(parsedData);

    // Check if all products exist and have enough stock
    for (const item of parsedData.items) {
      const product = await prisma.productvariant.findFirst({
        where: {
          AND: {
            sku: item.sku,
            stockquantity: {
              gte: item.quantity,
            },
          },
        },
      });

      if (!product) {
        return NextResponse.json(
          { success: false, message: `Product with SKU ${item.sku} not found` },
          { status: 404 }
        );
      }
    }

    // Create a new order in the database
    const newOrder = await prisma.order.create({
      data: {
        userId: parsedData.orderer.userId || null, // Assuming user is not logged in
        totalPrice: parsedData.items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),
        shippingFee: 0, // Assuming free shipping for now
        recipientName: parsedData.receiver.name,
        phone: parsedData.receiver.phone,
        address:
          parsedData.receiver.address +
          `, ${parsedData.receiver.ward}, ${parsedData.receiver.district}, ${parsedData.receiver.province}`,
        items: {
          create: await Promise.all(
            parsedData.items.map(async (item) => {
              const variant = await prisma.productvariant.findFirst({
                where: { sku: item.sku },
                include: { product: true },
              });
              return {
                variantId: variant!.id,
                productId: variant!.product!.id,
                quantity: item.quantity,
                price: item.price,
              };
            })
          ),
        },
      },
      include: {
        items: true,
      },
    });

    return NextResponse.json(
      { success: true, message: "Order created successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Order creation error:", error);

    if (error.name === "ZodError") {
      return NextResponse.json(
        { success: false, message: "Validation error", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: error.message + "An error occurred while creating the order",
      },
      { status: 500 }
    );
  }
}
