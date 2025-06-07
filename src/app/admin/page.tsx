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
  Users,
  Star,
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
      value:
        (data?.activeProductCount || 0) - (data?.featuredProductCount || 0),
    },
  ];

  const COLORS = ["#6366f1", "#e2e8f0"];

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Tổng quan</h1>
            <p className="text-gray-600 mt-1">
              Theo dõi hiệu suất kinh doanh của bạn
            </p>
          </div>
          <div className="text-right">
            <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full border">
              Cập nhật: {new Date().toLocaleString("vi-VN")}
            </span>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-blue-500">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Tổng sản phẩm
              </CardTitle>
              <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Package className="h-5 w-5 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {data?.productCount}
              </div>
              <p className="text-xs text-green-600 mt-1 flex items-center">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                Hoạt động: {data?.activeProductCount}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-green-500">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Tổng đơn hàng
              </CardTitle>
              <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                <ShoppingBag className="h-5 w-5 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {data?.orderCount}
              </div>
              <p className="text-xs text-amber-600 mt-1 flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                Chờ xử lý: {data?.pendingOrderCount}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-purple-500">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Tổng danh mục
              </CardTitle>
              <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Layers className="h-5 w-5 text-purple-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {data?.categoryCount}
              </div>
              <p className="text-xs text-gray-500 mt-1 flex items-center">
                <Users className="h-3 w-3 mr-1" />
                Người dùng: {data?.userCount}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-emerald-500">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Tổng doanh thu
              </CardTitle>
              <div className="h-10 w-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-emerald-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {formatCurrency(data?.totalRevenue || 0)}
              </div>
              <p className="text-xs text-emerald-600 mt-1 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />6 tháng gần nhất
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Alerts */}
        {(data?.lowStockCount ?? 0) > 0 && (
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6 mb-8 flex items-start shadow-sm">
            <div className="h-10 w-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-amber-800">
                Cảnh báo hàng tồn kho thấp
              </h3>
              <p className="text-amber-700 text-sm mt-1">
                Có {data?.lowStockCount ?? 0} sản phẩm/biến thể đang có số lượng
                tồn kho dưới 5 đơn vị.{" "}
                <Link
                  href="/admin/inventory"
                  className="underline font-medium hover:text-amber-800"
                >
                  Kiểm tra ngay →
                </Link>
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Revenue Chart */}
          <Card className="lg:col-span-2 shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    Doanh thu theo tháng
                  </CardTitle>
                  <CardDescription className="mt-1">
                    Biểu đồ doanh thu 6 tháng gần nhất
                  </CardDescription>
                </div>
                <div className="h-10 w-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-indigo-600" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={data?.monthlyRevenue}
                    margin={{
                      top: 20,
                      right: 20,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#f1f5f9"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="month"
                      tick={{ fontSize: 12, fill: "#64748b" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#64748b" }}
                      tickFormatter={(value) =>
                        value === 0 ? "0" : `${(value / 1000000).toFixed(1)}M`
                      }
                    />
                    <Tooltip
                      formatter={(value) => [
                        formatCurrency(value as number),
                        "Doanh thu",
                      ]}
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #e2e8f0",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                      }}
                    />
                    <Bar
                      dataKey="revenue"
                      fill="url(#colorGradient)"
                      radius={[6, 6, 0, 0]}
                      barSize={50}
                    />
                    <defs>
                      <linearGradient
                        id="colorGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Product Status Pie Chart */}
          <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    Trạng thái sản phẩm
                  </CardTitle>
                  <CardDescription className="mt-1">
                    Tỷ lệ sản phẩm nổi bật và thường
                  </CardDescription>
                </div>
                <div className="h-10 w-10 bg-violet-100 rounded-lg flex items-center justify-center">
                  <Star className="h-5 w-5 text-violet-600" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[320px] flex flex-col justify-center">
                <ResponsiveContainer width="100%" height="85%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={90}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
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
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #e2e8f0",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex justify-center mt-4 space-x-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></div>
                    <span className="text-sm text-gray-600">
                      Sản phẩm nổi bật
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-gray-300 mr-2"></div>
                    <span className="text-sm text-gray-600">
                      Sản phẩm thường
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    Đơn hàng gần đây
                  </CardTitle>
                  <CardDescription className="mt-1">
                    Theo dõi các đơn hàng mới nhất
                  </CardDescription>
                </div>
                <Link href="/admin/orders">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 hover:bg-gray-50"
                  >
                    <span className="hidden sm:inline">Xem tất cả</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              {data?.recentOrders?.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <ShoppingBag className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                  <p>Chưa có đơn hàng nào</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-200">
                        <TableHead className="font-semibold text-gray-700">
                          ID
                        </TableHead>
                        <TableHead className="font-semibold text-gray-700">
                          Khách hàng
                        </TableHead>
                        <TableHead className="font-semibold text-gray-700">
                          Trạng thái
                        </TableHead>
                        <TableHead className="text-right font-semibold text-gray-700">
                          Giá trị
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data?.recentOrders?.map((order) => (
                        <TableRow
                          key={order.id}
                          className="hover:bg-gray-50 transition-colors duration-150"
                        >
                          <TableCell className="font-medium">
                            <Link
                              href={`/admin/orders/${order.id}`}
                              className="text-blue-600 hover:text-blue-800 hover:underline"
                            >
                              #{order.id.substring(0, 8)}
                            </Link>
                          </TableCell>
                          <TableCell className="text-gray-700">
                            {order.user?.displayname || order.recipientName}
                          </TableCell>
                          <TableCell>
                            <OrderStatusBadge status={order.status} />
                          </TableCell>
                          <TableCell className="text-right font-medium text-gray-900">
                            {formatCurrency(order.totalPrice)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Top Categories */}
          <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    Danh mục phổ biến
                  </CardTitle>
                  <CardDescription className="mt-1">
                    Các danh mục có nhiều sản phẩm nhất
                  </CardDescription>
                </div>
                <Link href="/admin/categories">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 hover:bg-gray-50"
                  >
                    <span className="hidden sm:inline">Xem tất cả</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              {data?.topCategories?.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Layers className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                  <p>Chưa có danh mục nào</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-200">
                        <TableHead className="font-semibold text-gray-700">
                          Tên danh mục
                        </TableHead>
                        <TableHead className="text-right font-semibold text-gray-700">
                          Số sản phẩm
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data?.topCategories?.map((category) => (
                        <TableRow
                          key={category.id}
                          className="hover:bg-gray-50 transition-colors duration-150"
                        >
                          <TableCell className="font-medium">
                            <Link
                              href={`/admin/categories/edit/${category.id}`}
                              className="text-blue-600 hover:text-blue-800 hover:underline"
                            >
                              {category.name}
                            </Link>
                          </TableCell>
                          <TableCell className="text-right">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {category.productCount}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Helper component for order status badges
function OrderStatusBadge({ status }: { status: number }) {
  switch (status) {
    case 0:
      return (
        <Badge
          variant="outline"
          className="bg-blue-50 text-blue-700 border-blue-200"
        >
          <Clock className="mr-1 h-3 w-3" /> Chờ xác nhận
        </Badge>
      );
    case 1:
      return (
        <Badge
          variant="outline"
          className="bg-amber-50 text-amber-700 border-amber-200"
        >
          <CheckCircle2 className="mr-1 h-3 w-3" /> Đã xác nhận
        </Badge>
      );
    case 2:
      return (
        <Badge
          variant="outline"
          className="bg-purple-50 text-purple-700 border-purple-200"
        >
          <TrendingUp className="mr-1 h-3 w-3" /> Đang giao
        </Badge>
      );
    case 3:
      return (
        <Badge
          variant="outline"
          className="bg-green-50 text-green-700 border-green-200"
        >
          <CheckCircle2 className="mr-1 h-3 w-3" /> Đã giao
        </Badge>
      );
    case 4:
      return (
        <Badge
          variant="outline"
          className="bg-red-50 text-red-700 border-red-200"
        >
          <AlertTriangle className="mr-1 h-3 w-3" /> Đã hủy
        </Badge>
      );
    default:
      return (
        <Badge
          variant="outline"
          className="bg-gray-50 text-gray-700 border-gray-200"
        >
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
