"use client";

import useUserInfo from "@/hooks/use-userinfo";
import { Skeleton } from "@/components/ui/skeleton";
import { Order } from "@/types/model";
import { format } from "date-fns";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getOrderStatusColor, getOrderStatusLabel } from "@/utils/format-text";

// Giao diện phản hồi API
interface OrdersResponse {
  orders: Order[];
}

// Fetch orders function
const fetchOrders = async (userId?: string): Promise<Order[]> => {
  if (!userId) return [];

  const response = await axios.get<OrdersResponse>(
    `/api/orders/user/${userId}`
  );

  return response.data.orders as Order[];
};

export default function OrdersPage() {
  const {
    data: user,
    isLoading: isLoadingUser,
    error: userError,
  } = useUserInfo();

  // Use React Query to fetch orders
  const { data: orders = [], isLoading: isLoadingOrders } = useQuery({
    queryKey: ["orders", user?.userId],
    queryFn: () => fetchOrders(user?.userId),
    enabled: !!user?.userId, // Only run query when userId is available
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  // Status color mapping

  if (isLoadingUser) {
    return <OrdersPageSkeleton />;
  }

  if (userError || !user) {
    return (
      <div className="container mx-auto p-6 max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">Đơn hàng của tôi</h1>
        <div className="bg-red-50 p-4 rounded-md border border-red-200">
          <p className="text-red-600">
            Không thể tải thông tin người dùng. Vui lòng thử lại sau.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-2 sm:p-6 max-w-4xl">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
        Đơn hàng của tôi
      </h1>

      <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-md">
        <h2 className="text-base sm:text-lg font-medium mb-2">
          Thông tin tài khoản
        </h2>
        <p className="text-sm sm:text-base">
          <span className="font-medium">Tên:</span> {user.displayname || "N/A"}
        </p>
        <p className="text-sm sm:text-base">
          <span className="font-medium">Email:</span> {user.email || "N/A"}
        </p>
      </div>

      {isLoadingOrders ? (
        <OrderListSkeleton />
      ) : orders.length > 0 ? (
        <div className="bg-white rounded-md shadow overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableCaption>Danh sách đơn hàng của bạn</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Mã đơn hàng</TableHead>
                  <TableHead className="hidden sm:table-cell">Ngày</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead className="hidden sm:table-cell">
                    Sản phẩm
                  </TableHead>
                  <TableHead>Tổng cộng</TableHead>
                  <TableHead>Hành động</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">
                      {order.id.substring(0, 6)}...
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {format(new Date(order.createdAt), "yyyy-MM-dd")}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-4 font-semibold rounded-full 
                        ${getOrderStatusColor(order.status)}`}
                      >
                        {getOrderStatusLabel(order.status)}
                      </span>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {order.items.length}
                    </TableCell>
                    <TableCell>
                      $
                      {((order.totalPrice + order.shippingFee) / 100).toFixed(
                        2
                      )}
                    </TableCell>
                    <TableCell>
                      <Link href={`/orders/${order.id}`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-blue-600 hover:text-blue-900 hover:bg-blue-100"
                        >
                          Xem chi tiết
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      ) : (
        <div className="bg-white p-4 sm:p-6 rounded-md shadow text-center">
          <p className="text-gray-500 text-sm sm:text-base">
            Bạn chưa đặt hàng nào cả.
          </p>
          <Link href="/products">
            <Button className="mt-3 sm:mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium">
              Bắt đầu mua sắm
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

function OrdersPageSkeleton() {
  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <Skeleton className="h-8 w-48 mb-6" />
      <Skeleton className="h-32 w-full mb-6" />
      <OrderListSkeleton />
    </div>
  );
}

function OrderListSkeleton() {
  return (
    <div className="bg-white rounded-md shadow p-4">
      <div className="space-y-4">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-16 w-full" />
      </div>
    </div>
  );
}
