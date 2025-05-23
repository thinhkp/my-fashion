"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoreHorizontal, Search, FileDown, Loader2 } from "lucide-react";
import { toast } from "sonner";

// Order status mapping
const ORDER_STATUS = {
  0: { label: "Chờ xác nhận", color: "bg-yellow-100 text-yellow-800" },
  1: { label: "Đã xác nhận", color: "bg-blue-100 text-blue-800" },
  2: { label: "Đang giao hàng", color: "bg-purple-100 text-purple-800" },
  3: { label: "Đã giao hàng", color: "bg-green-100 text-green-800" },
  4: { label: "Đã hủy", color: "bg-red-100 text-red-800" },
};

// Payment status mapping
const PAYMENT_STATUS = {
  0: { label: "Chưa thanh toán", color: "bg-red-100 text-red-800" },
  1: { label: "Đã thanh toán", color: "bg-green-100 text-green-800" },
};

// Payment method mapping
const PAYMENT_METHOD = {
  COD: "Thanh toán khi nhận hàng",
  VNPAY: "VNPay",
  MOMO: "Ví MoMo",
  BANK_TRANSFER: "Chuyển khoản ngân hàng",
};

// Type definitions
type Order = {
  id: string;
  totalPrice: number;
  shippingFee: number;
  status: number;
  paymentMethod: string;
  paymentStatus: number;
  recipientName: string;
  phone: string;
  address: string;
  note?: string;
  createdAt: string;
  updatedAt: string;
  user?: {
    email: string;
    displayname: string;
  };
};

export default function OrdersPage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Fetch orders with React Query
  const {
    data,
    isLoading,
    error,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      try {
        const response = await axios.get("/api/orders");
        return response.data ;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw new Error(`Error fetching orders: ${error.response?.status}`);
        }
        throw error;
      }
    },
  });

  const  orders : Order[]  = data?.orders || []; ;

  // Update order status mutation
  const updateStatusMutation = useMutation({
    mutationFn: async ({
      orderId,
      status,
    }: {
      orderId: string;
      status: number;
    }) => {
      try {
        const response = await axios.patch(`/api/admin/orders/${orderId}`, {
          status,
        });
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw new Error(`Error updating order: ${error.response?.status}`);
        }
        throw error;
      }
    },
    onSuccess: () => {
      // Invalidate and refetch orders after status update
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      toast.success("Cập nhật trạng thái thành công");
    },
    onError: (error) => {
      toast.error(`Lỗi khi cập nhật: ${error.message}`);
    },
  });

  // Export to CSV mutation
  const exportMutation = useMutation({
    mutationFn: async (ordersToExport: Order[]) => {
      const headers = [
        "ID",
        "Khách hàng",
        "SĐT",
        "Địa chỉ",
        "Tổng tiền",
        "Phí ship",
        "Phương thức",
        "Trạng thái",
        "Thanh toán",
        "Ngày tạo",
      ];

      const csvData = ordersToExport.map((order) => [
        order.id,
        order.recipientName,
        order.phone,
        order.address,
        order.totalPrice,
        order.shippingFee,
        PAYMENT_METHOD[order.paymentMethod as keyof typeof PAYMENT_METHOD] ||
          order.paymentMethod,
        ORDER_STATUS[order.status as keyof typeof ORDER_STATUS].label,
        PAYMENT_STATUS[order.paymentStatus as keyof typeof PAYMENT_STATUS]
          .label,
        format(new Date(order.createdAt), "dd/MM/yyyy HH:mm"),
      ]);

      const csvContent = [headers, ...csvData]
        .map((row) => row.map((cell) => `"${cell}"`).join(","))
        .join("\n");

      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);

      // Create and trigger download
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute(
        "download",
        `orders-${format(new Date(), "yyyy-MM-dd")}.csv`
      );
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      return { success: true };
    },
    onSuccess: () => {
      toast.success("Đã xuất file CSV thành công");
    },
    onError: () => {
      toast.error("Lỗi khi xuất file CSV");
    },
  });

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  // Filter orders based on search term and status
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.recipientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.phone.includes(searchTerm);

    const matchesStatus =
      statusFilter === "all" || order.status === parseInt(statusFilter);

    return matchesSearch && matchesStatus;
  });

  const handleUpdateStatus = (orderId: string, newStatus: number) => {
    updateStatusMutation.mutate({ orderId, status: newStatus });
  };

  const handleExportCSV = () => {
    exportMutation.mutate(filteredOrders);
  };

  // View order details
  const viewOrderDetails = useMutation({
    mutationFn: async (orderId: string) => {
      router.push(`/admin/orders/${orderId}`);
      return { success: true };
    },
  });

  if (isError) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="rounded-md bg-red-50 p-4 border border-red-200">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                Lỗi khi tải dữ liệu
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <p>
                  {(error as Error).message ||
                    "Có lỗi xảy ra. Vui lòng thử lại sau."}
                </p>
              </div>
              <div className="mt-4">
                <Button onClick={() => refetch()}>Thử lại</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Quản lý đơn hàng</h1>
        <Button
          onClick={handleExportCSV}
          disabled={exportMutation.isPending}
          className="flex items-center gap-2"
        >
          {exportMutation.isPending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <FileDown size={16} />
          )}
          Xuất CSV
        </Button>
      </div>

      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Bộ lọc</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Tìm kiếm theo ID, tên, số điện thoại..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Trạng thái" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="0">Chờ xác nhận</SelectItem>
                <SelectItem value="1">Đã xác nhận</SelectItem>
                <SelectItem value="2">Đang giao hàng</SelectItem>
                <SelectItem value="3">Đã giao hàng</SelectItem>
                <SelectItem value="4">Đã hủy</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {isLoading ? (
        <div className="text-center py-16">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
          <p className="mt-2 text-muted-foreground">Đang tải dữ liệu...</p>
        </div>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Người đặt</TableHead>
                <TableHead>Người nhận</TableHead>
                <TableHead>Địa chỉ giao hàng</TableHead>
                <TableHead className="text-right">Tổng tiền</TableHead>
                <TableHead>Thanh toán</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Ngày tạo</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-10">
                    Không tìm thấy đơn hàng nào
                  </TableCell>
                </TableRow>
              ) : (
                filteredOrders.map((order) => (
                  <TableRow
                    key={order.id}
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => viewOrderDetails.mutate(order.id)}
                  >
                    <TableCell className="font-medium">
                      {order.id.slice(0, 8)}
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{order.user?.displayname || order.recipientName}</div>
                      
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{order.recipientName}</div>
                      
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{order.phone}</div>
                      <div className="text-sm text-muted-foreground truncate max-w-[200px]">
                        {order.address}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="font-medium">
                        {formatCurrency(order.totalPrice)}
                      </div>
                      {order.shippingFee > 0 && (
                        <div className="text-xs text-muted-foreground">
                          Ship: {formatCurrency(order.shippingFee)}
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      <div>
                        <Badge
                          className={
                            PAYMENT_STATUS[
                              order.paymentStatus as keyof typeof PAYMENT_STATUS
                            ].color
                          }
                        >
                          {
                            PAYMENT_STATUS[
                              order.paymentStatus as keyof typeof PAYMENT_STATUS
                            ].label
                          }
                        </Badge>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {PAYMENT_METHOD[
                          order.paymentMethod as keyof typeof PAYMENT_METHOD
                        ] || order.paymentMethod}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={
                          ORDER_STATUS[
                            order.status as keyof typeof ORDER_STATUS
                          ].color
                        }
                      >
                        {
                          ORDER_STATUS[
                            order.status as keyof typeof ORDER_STATUS
                          ].label
                        }
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {format(new Date(order.createdAt), "dd/MM/yyyy")}
                      <div className="text-xs text-muted-foreground">
                        {format(new Date(order.createdAt), "HH:mm")}
                      </div>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          asChild
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Mở menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Hành động</DropdownMenuLabel>
                          <DropdownMenuItem
                            onClick={(e) => {
                              e.stopPropagation();
                              viewOrderDetails.mutate(order.id);
                            }}
                          >
                            Chi tiết
                          </DropdownMenuItem>
                          {order.status === 0 && (
                            <>
                              <DropdownMenuItem
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleUpdateStatus(order.id, 1);
                                }}
                                disabled={updateStatusMutation.isPending}
                              >
                                Xác nhận đơn hàng
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleUpdateStatus(order.id, 4);
                                }}
                                disabled={updateStatusMutation.isPending}
                                className="text-red-600"
                              >
                                Hủy đơn hàng
                              </DropdownMenuItem>
                            </>
                          )}
                          {order.status === 1 && (
                            <DropdownMenuItem
                              onClick={(e) => {
                                e.stopPropagation();
                                handleUpdateStatus(order.id, 2);
                              }}
                              disabled={updateStatusMutation.isPending}
                            >
                              Chuyển sang đang giao
                            </DropdownMenuItem>
                          )}
                          {order.status === 2 && (
                            <DropdownMenuItem
                              onClick={(e) => {
                                e.stopPropagation();
                                handleUpdateStatus(order.id, 3);
                              }}
                              disabled={updateStatusMutation.isPending}
                            >
                              Xác nhận đã giao
                            </DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
