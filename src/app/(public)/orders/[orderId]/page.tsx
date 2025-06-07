"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ShoppingBag,
  Truck,
  Clock,
  CheckCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { formatCurrencyVND } from "@/utils/format";
import { getOrderStatusColor, getOrderStatusLabel } from "@/utils/format-text";

// Define the order response type
type OrderResponse = {
  order: {
    id: string;
    status: number;
    paymentStatus: number;
    paymentMethod: string;
    totalPrice: number;
    shippingFee: number;
    recipientName: string;
    phone: string;
    address: string;
    note?: string;
    createdAt: string;
    user: {
      email: string;
      displayname: string;
    };
    items: Array<{
      id: string;
      price: number;
      quantity: number;
      product: {
        name: string;
        sku: string;
        productimage?: Array<{ imageurl: string }>;
      };
      variant?: {
        color: {
          name: string;
          code: string;
        };
        size: {
          name: string;
        };
        image?: {
          imageurl: string;
        };
      };
    }>;
  };
};

// Function to fetch order details
const fetchOrderDetails = async (orderId: string) => {
  const response = await axios.get(`/api/orders/${orderId}`);
  return response.data as OrderResponse;
};

// Translate status to Vietnamese

// Component for Order Status steps
const OrderStatusSteps = ({ currentStatus }: { currentStatus: number }) => {
  const steps = [
    { id: 0, name: "Chờ xác nhận", icon: <Clock className="h-4 w-4" /> },
    { id: 1, name: "Đã xác nhận", icon: <CheckCircle className="h-4 w-4" /> },
    { id: 4, name: "Đang giao", icon: <Truck className="h-4 w-4" /> },
    { id: 5, name: "Đã giao", icon: <ShoppingBag className="h-4 w-4" /> },
  ];

  return (
    <div className="py-4">
      <div className="flex items-center justify-between w-full mb-2">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                currentStatus >= step.id
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-400"
              }`}
            >
              {step.icon}
            </div>
            <span
              className={`mt-1 text-xs ${
                currentStatus >= step.id
                  ? "text-green-600 font-medium"
                  : "text-gray-500"
              }`}
            >
              {step.name}
            </span>
          </div>
        ))}
      </div>
      <div className="relative flex items-center justify-between w-full">
        {steps.map((step, i) => (
          <div key={`line-${step.id}`} className="relative flex-1">
            {i < steps.length - 1 && (
              <div
                className={`absolute top-0 left-0 h-1 w-full ${
                  currentStatus >= steps[i + 1].id
                    ? "bg-green-500"
                    : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function OrderDetailPage() {
  const params = useParams();
  const router = useRouter();
  const orderId = params.orderId as string;

  const { data, isLoading, error } = useQuery({
    queryKey: ["order", orderId],
    queryFn: () => fetchOrderDetails(orderId),
    enabled: !!orderId,
  });

  if (isLoading) {
    return <OrderDetailSkeleton />;
  }

  if (error || !data || !data.order) {
    return (
      <div className="container mx-auto p-4 max-w-4xl">
        <Button variant="ghost" className="mb-4" onClick={() => router.back()}>
          <ChevronLeft className="mr-2 h-4 w-4" /> Quay lại
        </Button>
        <Card>
          <CardHeader>
            <CardTitle>Không tìm thấy đơn hàng</CardTitle>
            <CardDescription>
              Chúng tôi không thể tìm thấy đơn hàng bạn đang tìm kiếm.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-red-500">
              {error instanceof Error
                ? error.message
                : "Đã xảy ra lỗi khi tải thông tin đơn hàng."}
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/user/orders">
              <Button>Xem tất cả đơn hàng</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    );
  }

  const order = data.order;
  const statusLabel = getOrderStatusLabel(order.status);
  const statusColorClass = getOrderStatusColor(order.status);
  const formattedDate = format(new Date(order.createdAt), "PPP", {
    locale: vi,
  });
  const subtotal = order.totalPrice;
  const shipping = order.shippingFee;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto p-2 sm:p-6 max-w-4xl">
      <Button variant="ghost" className="mb-4" onClick={() => router.back()}>
        <ChevronLeft className="mr-2 h-4 w-4" /> Quay lại
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Order Information */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div>
                  <CardTitle>Đơn hàng #{order.id.substring(0, 8)}</CardTitle>
                  <CardDescription>Đặt ngày {formattedDate}</CardDescription>
                </div>
                <Badge className={statusColorClass}>{statusLabel}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <OrderStatusSteps currentStatus={order.status} />
            </CardContent>
          </Card>

          {/* Order Items */}
          <Card className="mt-4 sm:mt-6">
            <CardHeader>
              <CardTitle>Sản phẩm đã đặt</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[80px]">Hình ảnh</TableHead>
                      <TableHead>Sản phẩm</TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Phân loại
                      </TableHead>
                      <TableHead className="text-right">Đơn giá</TableHead>
                      <TableHead className="text-center">SL</TableHead>
                      <TableHead className="text-right">Thành tiền</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {order.items.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <div className="relative w-10 h-10 sm:w-14 sm:h-14 rounded-md overflow-hidden">
                            {item.variant?.image?.imageurl ? (
                              <Image
                                src={`/image/products/${item.variant.image.imageurl}`}
                                alt={item.product.name}
                                fill
                                className="object-cover"
                              />
                            ) : item.product.productimage?.[0]?.imageurl ? (
                              <Image
                                src={item.product.productimage[0].imageurl}
                                alt={item.product.name}
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                <ShoppingBag className="h-6 w-6 text-gray-400" />
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">
                          {item.product.name}
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          {item.variant ? (
                            <div className="text-sm">
                              <span
                                className="inline-block w-3 h-3 rounded-full mr-1"
                                style={{
                                  backgroundColor: item.variant.color.code,
                                }}
                              ></span>
                              {item.variant.color.name},{" "}
                              {item.variant.size.name}
                            </div>
                          ) : (
                            "N/A"
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          {formatCurrencyVND(item.price)}
                        </TableCell>
                        <TableCell className="text-center">
                          {item.quantity}
                        </TableCell>
                        <TableCell className="text-right">
                          {formatCurrencyVND(item.price * item.quantity)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary and Shipping Info */}
        <div className="space-y-4 sm:space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Tổng quan đơn hàng</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Tạm tính</span>
                  <span>{formatCurrencyVND(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Phí vận chuyển</span>
                  <span>{formatCurrencyVND(shipping)}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-medium">
                  <span>Tổng cộng</span>
                  <span>{formatCurrencyVND(total)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Thông tin giao hàng</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Tên người nhận:</span>{" "}
                  {order.recipientName}
                </p>
                <p>
                  <span className="font-medium">Số điện thoại:</span>{" "}
                  {order.phone}
                </p>
                <p>
                  <span className="font-medium">Địa chỉ:</span> {order.address}
                </p>
                {order.note && (
                  <p>
                    <span className="font-medium">Ghi chú:</span> {order.note}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Thông tin thanh toán</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Phương thức:</span>{" "}
                  {order.paymentMethod === "COD"
                    ? "Thanh toán khi nhận hàng"
                    : order.paymentMethod}
                </p>
                <p>
                  <span className="font-medium">Trạng thái:</span>{" "}
                  <Badge
                    variant={
                      order.paymentStatus === 1 ? "default" : "secondary"
                    }
                  >
                    {order.paymentStatus === 1
                      ? "Đã thanh toán"
                      : "Chưa thanh toán"}
                  </Badge>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function OrderDetailSkeleton() {
  return (
    <div className="container mx-auto p-2 sm:p-6 max-w-4xl">
      <Skeleton className="h-10 w-28 mb-4" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-40 mb-2" />
              <Skeleton className="h-4 w-32" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-16 w-full" />
            </CardContent>
          </Card>

          <Card className="mt-4 sm:mt-6">
            <CardHeader>
              <Skeleton className="h-6 w-32" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-20 w-full" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-32" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-40" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
