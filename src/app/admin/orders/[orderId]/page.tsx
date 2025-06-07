"use client";

import { useParams, useRouter } from "next/navigation";
import { format } from "date-fns";
import Image from "next/image";
import { Loader2, ArrowLeft, CheckCircle } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { GetRes } from "@/app/api/orders/[orderId]/route";
import { Order } from "@/types/model";

// Order status mapping
const ORDER_STATUS = {
  0: { name: "Chờ xác nhận", color: "bg-yellow-100 text-yellow-800" },
  1: { name: "Đã xác nhận", color: "bg-blue-100 text-blue-800" },
  2: { name: "Đang giao hàng", color: "bg-purple-100 text-purple-800" },
  3: { name: "Đã giao hàng", color: "bg-green-100 text-green-800" },
  4: { name: "Đã hủy", color: "bg-red-100 text-red-800" },
};

const PAYMENT_STATUS = {
  0: { name: "Chưa thanh toán", color: "bg-red-100 text-red-800" },
  1: { name: "Đã thanh toán", color: "bg-green-100 text-green-800" },
};

export default function OrderDetailPage() {
  const params = useParams();
  const router = useRouter();
  const orderId = params.orderId as string;
  const queryClient = useQueryClient();

  // Fetch order data using React Query
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["order", orderId],
    queryFn: async () => {
      const response = await axios.get<GetRes>(`/api/orders/${orderId}`);
      if (response.data.error) {
        throw new Error(response.data.error);
      }
      return response.data.order as Order;
    },
  });

  // Mutation for updating order status
  const updateOrderStatusMutation = useMutation({
    mutationFn: async (newStatus: number) => {
      return axios.patch(`/api/orders/${orderId}`, {
        status: newStatus,
      });
    },
    onSuccess: () => {
      // Invalidate and refetch the order data
      queryClient.invalidateQueries({ queryKey: ["order", orderId] });
    },
  });

  // Mutation for updating payment status
  const updatePaymentStatusMutation = useMutation({
    mutationFn: async (newStatus: number) => {
      return axios.patch(`/api/orders/${orderId}`, {
        paymentStatus: newStatus,
      });
    },
    onSuccess: () => {
      // Invalidate and refetch the order data
      queryClient.invalidateQueries({ queryKey: ["order", orderId] });
    },
  });

  const updateOrderStatus = (newStatus: number) => {
    updateOrderStatusMutation.mutate(newStatus);
  };

  const updatePaymentStatus = (newStatus: number) => {
    updatePaymentStatusMutation.mutate(newStatus);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen p-8 flex justify-center items-center">
        <Loader2 className="h-8 w-8 animate-spin" />
        <p className="ml-2">Đang tải thông tin đơn hàng...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen p-8">
        <div className="bg-red-50 p-4 rounded-md">
          <h2 className="text-red-800 font-medium text-lg">Lỗi</h2>
          <p className="text-red-700">
            {error instanceof Error
              ? error.message
              : "Không thể tải thông tin đơn hàng. Vui lòng thử lại sau."}
          </p>
          <button
            onClick={() => router.back()}
            className="mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại
          </button>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen p-8">
        <div className="bg-amber-50 p-4 rounded-md">
          <h2 className="text-amber-800 font-medium text-lg">
            Không tìm thấy đơn hàng
          </h2>
          <p className="text-amber-700">
            Không thể tìm thấy đơn hàng với mã: {orderId}
          </p>
          <button
            onClick={() => router.back()}
            className="mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại danh sách đơn hàng
          </button>
        </div>
      </div>
    );
  }

  const order = data;
  const orderStatusInfo =
    ORDER_STATUS[order.status as keyof typeof ORDER_STATUS];
  const paymentStatusInfo =
    PAYMENT_STATUS[order.paymentStatus as keyof typeof PAYMENT_STATUS];
  const isUpdatingStatus =
    updateOrderStatusMutation.isPending ||
    updatePaymentStatusMutation.isPending;

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6 flex items-center">
        <button
          onClick={() => router.back()}
          className="mr-4 p-2 rounded-full hover:bg-gray-100"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-2xl font-bold">
          Chi tiết đơn hàng #{order.id.substring(0, 8).toUpperCase()}
        </h1>
      </div>

      {/* Order Info & Status Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <div>
              <h2 className="text-lg font-semibold">Thông tin đơn hàng</h2>
              <p className="text-gray-600">
                Ngày tạo:{" "}
                {format(new Date(order.createdAt), "dd/MM/yyyy HH:mm")}
              </p>
            </div>
            <div className="mt-2 sm:mt-0">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${orderStatusInfo.color}`}
              >
                {orderStatusInfo.name}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="font-medium text-gray-700 mb-2">
                Thông tin khách hàng
              </h3>
              <p>
                <span className="text-gray-500">Họ và tên:</span>{" "}
                {order.recipientName}
              </p>
              <p>
                <span className="text-gray-500">Số điện thoại:</span>{" "}
                {order.phone}
              </p>
              {order.user && (
                <p>
                  <span className="text-gray-500">Email:</span>{" "}
                  {order.user.email}
                </p>
              )}
            </div>
            <div>
              <h3 className="font-medium text-gray-700 mb-2">
                Địa chỉ giao hàng
              </h3>
              <p>{order.address}</p>
              {order.note && (
                <div className="mt-2">
                  <span className="text-gray-500">Ghi chú:</span>
                  <p className="italic text-gray-600">{order.note}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-lg font-semibold mb-4">Quản lý đơn hàng</h2>

          <div className="mb-6">
            <h3 className="font-medium text-gray-700 mb-2">
              Trạng thái đơn hàng
            </h3>
            <div className="flex flex-col gap-2">
              {Object.entries(ORDER_STATUS).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => updateOrderStatus(Number(key))}
                  disabled={isUpdatingStatus || order.status === Number(key)}
                  className={`px-4 py-2 rounded-md text-left flex justify-between items-center ${
                    order.status === Number(key)
                      ? value.color
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {value.name}
                  {order.status === Number(key) && (
                    <CheckCircle className="h-4 w-4" />
                  )}
                </button>
              ))}
            </div>
            {updateOrderStatusMutation.isError && (
              <p className="text-red-600 text-sm mt-2">
                Lỗi khi cập nhật trạng thái đơn hàng. Vui lòng thử lại.
              </p>
            )}
          </div>

          <div>
            <h3 className="font-medium text-gray-700 mb-2">
              Trạng thái thanh toán
            </h3>
            <div className="mb-2">
              <p className="text-sm text-gray-600 mb-1">
                Phương thức thanh toán: {order.paymentMethod}
              </p>
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${paymentStatusInfo.color}`}
              >
                {paymentStatusInfo.name}
              </span>
            </div>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => updatePaymentStatus(0)}
                disabled={isUpdatingStatus || order.paymentStatus === 0}
                className={`px-3 py-2 rounded-md text-sm ${
                  order.paymentStatus === 0
                    ? "bg-red-100 text-red-800"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                Chưa thanh toán
              </button>
              <button
                onClick={() => updatePaymentStatus(1)}
                disabled={isUpdatingStatus || order.paymentStatus === 1}
                className={`px-3 py-2 rounded-md text-sm ${
                  order.paymentStatus === 1
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                Đã thanh toán
              </button>
            </div>
            {updatePaymentStatusMutation.isError && (
              <p className="text-red-600 text-sm mt-2">
                Lỗi khi cập nhật trạng thái thanh toán. Vui lòng thử lại.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Order Items Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
        <h2 className="text-lg font-semibold mb-4">Sản phẩm</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Sản phẩm</th>
                <th className="text-center py-3 px-4">Đơn giá</th>
                <th className="text-center py-3 px-4">Số lượng</th>
                <th className="text-right py-3 px-4">Thành tiền</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 relative mr-4 bg-gray-100 rounded">
                        {item.variant?.image ? (
                          <Image
                            src={
                              `/image/products/` + item.variant.image.imageurl
                            }
                            alt={item.product.name}
                            fill
                            className="object-cover rounded"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400">
                            No img
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{item.product.name}</p>
                        {item.variant && (
                          <p className="text-sm text-gray-600">
                            {item.variant.size?.name},{" "}
                            {item.variant.color?.name}
                          </p>
                        )}
                        <p className="text-xs text-gray-500">
                          SKU: {item.variant?.sku || item.product.sku}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(item.price)}
                  </td>
                  <td className="py-3 px-4 text-center">{item.quantity}</td>
                  <td className="py-3 px-4 text-right">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(item.price * item.quantity)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-lg font-semibold mb-4">Tổng kết đơn hàng</h2>
        <div className="flex flex-col gap-2 text-right">
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Tạm tính:</span>
            <span>
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(order.totalPrice - order.shippingFee)}
            </span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Phí vận chuyển:</span>
            <span>
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(order.shippingFee)}
            </span>
          </div>
          <div className="flex justify-between py-3 border-t font-medium text-lg">
            <span>Tổng cộng:</span>
            <span>
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(order.totalPrice)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
