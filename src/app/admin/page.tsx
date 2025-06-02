"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import {
  ShoppingBag,
  Package,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ArrowRight,
  TrendingUp,
  Layers,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

// Dashboard data interface
interface DashboardData {
  productCount: number;
  categoryCount: number;
  orderCount: number;
  userCount: number;
  lowStockCount: number;
  featuredProductCount: number;
  activeProductCount: number;
  pendingOrderCount: number;
  totalRevenue: number;
  monthlyRevenue: Array<{
    month: string;
    revenue: number;
  }>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  recentOrders: Array<any>;
  topCategories: Array<{
    id: number;
    name: string;
    productCount: number;
  }>;
}

// Fetch dashboard data
const fetchDashboardData = async (): Promise<DashboardData> => {
  const { data } = await axios.get("/api/admin/dashboard");
  return data;
};

// Format currency
const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
  }).format(amount);
};

export default function AdminDashboard() {

  // Fetch dashboard data
  const { data, isLoading, error } = useQuery({
    queryKey: ["dashboard-data"],
    queryFn: fetchDashboardData,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // Loading state
  if (isLoading) {
    return <DashboardSkeleton />;
  }

  // Error state
  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-red-700 mb-2">
            Lỗi khi tải dữ liệu
          </h2>
          <p className="text-gray-700">
            {error instanceof Error
              ? error.message
              : "Không thể tải dữ liệu tổng quan."}
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => window.location.reload()}
          >
            Thử lại
          </Button>
        </div>
      </div>
    );
  }

  // Prepare data for pie chart
  const pieData = [
    { name: "Sản phẩm nổi bật", value: data?.featuredProductCount || 0 },
    {
      name: "Sản phẩm thường",
      value: (data?.activeProductCount || 0) - (data?.featuredProductCount || 0),
    },
  ];

  const COLORS = ["#4f46e5", "#94a3b8"];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Tổng quan</h1>
        <div>
          <span className="text-sm text-gray-500">
            Dữ liệu cập nhật: {new Date().toLocaleString("vi-VN")}
          </span>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Tổng sản phẩm</CardTitle>
            <Package className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.productCount}</div>
            <p className="text-xs text-gray-500 mt-1">
              Hoạt động: {data?.activeProductCount}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Tổng đơn hàng</CardTitle>
            <ShoppingBag className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.orderCount}</div>
            <p className="text-xs text-gray-500 mt-1">
              Chờ xử lý: {data?.pendingOrderCount}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Tổng danh mục</CardTitle>
            <Layers className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.categoryCount}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Tổng doanh thu</CardTitle>
            <DollarSign className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(data?.totalRevenue || 0)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts */}
      {(data?.lowStockCount ?? 0) > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 flex items-start">
          <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-amber-800">
              Cảnh báo hàng tồn kho thấp
            </h3>
            <p className="text-amber-700 text-sm mt-1">
              Có {data?.lowStockCount ?? 0} sản phẩm/biến thể đang có số lượng tồn kho dưới 5 đơn vị.{" "}
              <Link href="/admin/inventory" className="underline">
                Kiểm tra ngay
              </Link>
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Revenue Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Doanh thu theo tháng</CardTitle>
            <CardDescription>
              Biểu đồ doanh thu 6 tháng gần nhất
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data?.monthlyRevenue}
                  margin={{
                    top: 10,
                    right: 10,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="month"
                    tick={{ fontSize: 12 }}
                    axisLine={false}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12 }}
                    tickFormatter={(value) =>
                      value === 0 ? "0" : value / 1000000 + "M"
                    }
                  />
                  <Tooltip
                    formatter={(value) => [formatCurrency(value as number), "Doanh thu"]}
                  />
                  <Bar
                    dataKey="revenue"
                    fill="#4f46e5"
                    radius={[4, 4, 0, 0]}
                    barSize={40}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Product Status Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Trạng thái sản phẩm</CardTitle>
            <CardDescription>
              Tỷ lệ sản phẩm nổi bật và thường
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex flex-col justify-center">
              <ResponsiveContainer width="100%" height="80%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [value, "Số lượng"]}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Đơn hàng gần đây</CardTitle>
              <Link href="/admin/orders">
                <Button variant="ghost" size="sm" className="gap-1">
                  <span className="hidden sm:inline">Xem tất cả</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            {data?.recentOrders?.length === 0 ? (
              <div className="text-center py-4 text-gray-500">
                Chưa có đơn hàng nào
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Khách hàng</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead className="text-right">Giá trị</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data?.recentOrders?.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">
                        <Link
                          href={`/admin/orders/${order.id}`}
                          className="hover:underline"
                        >
                          #{order.id.substring(0, 8)}
                        </Link>
                      </TableCell>
                      <TableCell>
                        {order.user?.displayname || order.recipientName}
                      </TableCell>
                      <TableCell>
                        <OrderStatusBadge status={order.status} />
                      </TableCell>
                      <TableCell className="text-right">
                        {formatCurrency(order.totalPrice)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>

        {/* Top Categories */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Danh mục phổ biến</CardTitle>
              <Link href="/admin/categories">
                <Button variant="ghost" size="sm" className="gap-1">
                  <span className="hidden sm:inline">Xem tất cả</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            {data?.topCategories?.length === 0 ? (
              <div className="text-center py-4 text-gray-500">
                Chưa có danh mục nào
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tên danh mục</TableHead>
                    <TableHead className="text-right">Số sản phẩm</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data?.topCategories?.map((category) => (
                    <TableRow key={category.id}>
                      <TableCell className="font-medium">
                        <Link
                          href={`/admin/categories/edit/${category.id}`}
                          className="hover:underline"
                        >
                          {category.name}
                        </Link>
                      </TableCell>
                      <TableCell className="text-right">
                        {category.productCount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Helper component for order status badges
function OrderStatusBadge({ status }: { status: number }) {
  switch (status) {
    case 0:
      return (
        <Badge variant="outline" className="bg-blue-50 text-blue-700">
          <Clock className="mr-1 h-3 w-3" /> Chờ xác nhận
        </Badge>
      );
    case 1:
      return (
        <Badge variant="outline" className="bg-amber-50 text-amber-700">
          <CheckCircle2 className="mr-1 h-3 w-3" /> Đã xác nhận
        </Badge>
      );
    case 2:
      return (
        <Badge variant="outline" className="bg-purple-50 text-purple-700">
          <TrendingUp className="mr-1 h-3 w-3" /> Đang giao
        </Badge>
      );
    case 3:
      return (
        <Badge variant="outline" className="bg-green-50 text-green-700">
          <CheckCircle2 className="mr-1 h-3 w-3" /> Đã giao
        </Badge>
      );
    case 4:
      return (
        <Badge variant="outline" className="bg-red-50 text-red-700">
          <AlertTriangle className="mr-1 h-3 w-3" /> Đã hủy
        </Badge>
      );
    default:
      return (
        <Badge variant="outline" className="bg-gray-50 text-gray-700">
          Không xác định
        </Badge>
      );
  }
}

// Skeleton loader for dashboard
function DashboardSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Tổng quan</h1>
      </div>

      {/* Summary Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i}>
            <CardHeader className="pb-2">
              <Skeleton className="h-4 w-24" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-16 mb-2" />
              <Skeleton className="h-3 w-20" />
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Revenue Chart Skeleton */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <Skeleton className="h-5 w-40 mb-1" />
            <Skeleton className="h-4 w-60" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-[300px] w-full" />
          </CardContent>
        </Card>

        {/* Product Status Pie Chart Skeleton */}
        <Card>
          <CardHeader>
            <Skeleton className="h-5 w-40 mb-1" />
            <Skeleton className="h-4 w-60" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-[300px] w-full rounded-full mx-auto" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders Skeleton */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-8 w-24" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex justify-between">
                  <Skeleton className="h-5 w-1/4" />
                  <Skeleton className="h-5 w-1/4" />
                  <Skeleton className="h-5 w-1/4" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Categories Skeleton */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-8 w-24" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex justify-between">
                  <Skeleton className="h-5 w-2/3" />
                  <Skeleton className="h-5 w-1/4" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
