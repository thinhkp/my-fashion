import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/services/prisma";
import { hasManageAccess } from "@/utils/verify-token";
import { COOKIE_NAME } from "@/config/cookie";

export async function GET(request: NextRequest) {
  try {
    // Verify access permission
    if (!(await hasManageAccess(request, COOKIE_NAME)))
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    // Get counts for various entities
    const [
      productCount,
      categoryCount,
      orderCount,
      userCount,
      lowStockCount,
      featuredProductCount,
      activeProductCount,
      pendingOrderCount,
      recentOrders,
      topCategories,
    ] = await Promise.all([
      // Total products
      prisma.product.count(),

      // Total categories
      prisma.category.count(),

      // Total orders
      prisma.order.count(),

      // Total users
      prisma.user.count(),

      // Products with low stock (less than 5)
      prisma.productvariant.count({
        where: {
          stockquantity: {
            lt: 5,
          },
        },
      }),

      // Featured products
      prisma.product.count({
        where: {
          isfeatured: true,
        },
      }),

      // Active products
      prisma.product.count({
        where: {
          status: 1, // Assuming 1 is active status
        },
      }),

      // Pending orders
      prisma.order.count({
        where: {
          status: 0, // Assuming 0 is pending status
        },
      }),

      // Recent orders
      prisma.order.findMany({
        take: 5,
        orderBy: {
          createdAt: "desc",
        },
        include: {
          items: {
            include: {
              product: true,
            },
          },
          user: {
            select: {
              displayname: true,
              email: true,
            },
          },
        },
      }),

      // Top categories by product count
      prisma.category.findMany({
        take: 5,
        include: {
          _count: {
            select: {
              productcategory: true,
            },
          },
        },
        orderBy: {
          productcategory: {
            _count: "desc",
          },
        },
      }),
    ]);

    // Get revenue summary
    const orders = await prisma.order.findMany({
      where: {
        status: {
          in: [2, 3], // Completed orders (assuming 2=shipped, 3=delivered)
        },
      },
      select: {
        totalPrice: true,
        createdAt: true,
      },
    });

    // Calculate total revenue
    const totalRevenue = orders.reduce(
      (sum, order) => sum + order.totalPrice,
      0
    );

    // Get monthly revenue for the last 6 months
    const today = new Date();
    const monthlyData = [];

    for (let i = 0; i < 6; i++) {
      const month = new Date(today.getFullYear(), today.getMonth() - i, 1);
      const monthEnd = new Date(
        today.getFullYear(),
        today.getMonth() - i + 1,
        0
      );

      const monthlyOrders = orders.filter((order) => {
        const orderDate = new Date(order.createdAt);
        return orderDate >= month && orderDate <= monthEnd;
      });

      const monthlyRevenue = monthlyOrders.reduce(
        (sum, order) => sum + order.totalPrice,
        0
      );

      monthlyData.unshift({
        month: month.toLocaleString("default", { month: "short" }),
        revenue: monthlyRevenue,
      });
    }

    return NextResponse.json({
      productCount,
      categoryCount,
      orderCount,
      userCount,
      lowStockCount,
      featuredProductCount,
      activeProductCount,
      pendingOrderCount,
      totalRevenue,
      monthlyRevenue: monthlyData,
      recentOrders,
      topCategories: topCategories.map((category) => ({
        id: category.id,
        name: category.name,
        productCount: category._count.productcategory,
      })),
    });
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch dashboard data",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
