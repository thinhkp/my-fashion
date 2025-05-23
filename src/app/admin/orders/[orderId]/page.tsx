'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { format } from 'date-fns';
import Image from 'next/image';
import { Loader2, ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import axios from 'axios';
import { Button } from '@/components/ui/button';

// Order status mapping
const ORDER_STATUS = {
  0: { name: 'Chờ xác nhận', color: 'bg-yellow-100 text-yellow-800' },
  1: { name: 'Đã xác nhận', color: 'bg-blue-100 text-blue-800' },
  2: { name: 'Đang giao hàng', color: 'bg-purple-100 text-purple-800' },
  3: { name: 'Đã giao hàng', color: 'bg-green-100 text-green-800' },
  4: { name: 'Đã hủy', color: 'bg-red-100 text-red-800' },
};

const PAYMENT_STATUS = {
  0: { name: 'Chưa thanh toán', color: 'bg-red-100 text-red-800' },
  1: { name: 'Đã thanh toán', color: 'bg-green-100 text-green-800' },
};

// Define interfaces based on your Prisma schema
interface OrderItem {
  id: string;
  productId: number;
  variantId?: number | null;
  quantity: number;
  price: number;
  product: {
    name: string;
    sku: string;
  };
  variant?: {
    id: number;
    sku: string;
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
  } | null;
}

interface Order {
  id: string;
  userId?: string | null;
  totalPrice: number;
  shippingFee: number;
  status: number;
  paymentMethod: string;
  paymentStatus: number;
  recipientName: string;
  phone: string;
  address: string;
  note?: string | null;
  createdAt: string;
  updatedAt: string;
  items: OrderItem[];
  user?: {
    email: string;
    displayname: string;
  } | null;
}

export default function OrderDetailPage() {
  const params = useParams();
  const router = useRouter();
  const orderId = params.orderId as string;
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updatingStatus, setUpdatingStatus] = useState(false);

  useEffect(() => {
    async function fetchOrderDetails() {
      setLoading(true);
      try {
        const response = await axios.get(`/api/orders/${orderId}`);
        
        const data = await response.data;
        setOrder(data);
        setError(null);
      } catch (err) {
        setError('Không thể tải thông tin đơn hàng. Vui lòng thử lại sau.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchOrderDetails();
  }, [orderId]);

  const updateOrderStatus = async (newStatus: number) => {
    setUpdatingStatus(true);
   try {
      const response = await axios.patch(`/api/orders/${orderId}`, {
        status: newStatus
      });
      // Update the local order state with the new status
      setOrder(prev => prev ? { ...prev, status: newStatus } : null);
    } catch (err) {
      setError('Cập nhật trạng thái đơn hàng thất bại. Vui lòng thử lại.');
      console.error(err);
    } finally {
      setUpdatingStatus(false);
    }
  };

  const updatePaymentStatus = async (newStatus: number) => {
    setUpdatingStatus(true);
    try {
      const response = await axios.patch(`/api/orders/${orderId}`, {
        paymentStatus: newStatus
      });
      
      // Update the local order state with the new payment status
      setOrder(prev => prev ? { ...prev, paymentStatus: newStatus } : null);
    } catch (err) {
      setError('Cập nhật trạng thái thanh toán thất bại. Vui lòng thử lại.');
      console.error(err);
    } finally {
      setUpdatingStatus(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen p-8 flex justify-center items-center">
        <Loader2 className="h-8 w-8 animate-spin" />
        <p className="ml-2">Đang tải thông tin đơn hàng...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen p-8">
        <div className="bg-red-50 p-4 rounded-md">
          <h2 className="text-red-800 font-medium text-lg">Lỗi</h2>
          <p className="text-red-700">{error}</p>
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

  if (!order) {
    return (
      <div className="min-h-screen p-8">
        <div className="bg-amber-50 p-4 rounded-md">
          <h2 className="text-amber-800 font-medium text-lg">Không tìm thấy đơn hàng</h2>
          <p className="text-amber-700">Không thể tìm thấy đơn hàng với mã: {orderId}</p>
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

  const orderStatusInfo = ORDER_STATUS[order.status as keyof typeof ORDER_STATUS];
  const paymentStatusInfo = PAYMENT_STATUS[order.paymentStatus as keyof typeof PAYMENT_STATUS];

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6 flex items-center">
        <button 
          onClick={() => router.back()} 
          className="mr-4 p-2 rounded-full hover:bg-gray-100"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-2xl font-bold">Chi tiết đơn hàng #{order.id.substring(0, 8)}</h1>
      </div>

      {/* Order Info & Status Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <div>
              <h2 className="text-lg font-semibold">Thông tin đơn hàng</h2>
              <p className="text-gray-600">
                Ngày tạo: {format(new Date(order.createdAt), 'dd/MM/yyyy HH:mm')}
              </p>
            </div>
            <div className="mt-2 sm:mt-0">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${orderStatusInfo.color}`}>
                {orderStatusInfo.name}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Thông tin khách hàng</h3>
              <p><span className="text-gray-500">Họ tên:</span> {order.recipientName}</p>
              <p><span className="text-gray-500">Số điện thoại:</span> {order.phone}</p>
              {order.user && (
                <p><span className="text-gray-500">Email:</span> {order.user.email}</p>
              )}
            </div>
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Địa chỉ giao hàng</h3>
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
            <h3 className="font-medium text-gray-700 mb-2">Trạng thái đơn hàng</h3>
            <div className="flex flex-col gap-2">
              {Object.entries(ORDER_STATUS).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => updateOrderStatus(Number(key))}
                  disabled={updatingStatus || order.status === Number(key)}
                  className={`px-4 py-2 rounded-md text-left flex justify-between items-center ${
                    order.status === Number(key)
                      ? value.color
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {value.name}
                  {order.status === Number(key) && (
                    <CheckCircle className="h-4 w-4" />
                  )}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Trạng thái thanh toán</h3>
            <div className="mb-2">
              <p className="text-sm text-gray-600 mb-1">Phương thức thanh toán: {order.paymentMethod}</p>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${paymentStatusInfo.color}`}>
                {paymentStatusInfo.name}
              </span>
            </div>
            
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => updatePaymentStatus(0)}
                disabled={updatingStatus || order.paymentStatus === 0}
                className={`px-3 py-2 rounded-md text-sm ${
                  order.paymentStatus === 0 
                    ? 'bg-red-100 text-red-800' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Chưa thanh toán
              </button>
              <button
                onClick={() => updatePaymentStatus(1)}
                disabled={updatingStatus || order.paymentStatus === 1}
                className={`px-3 py-2 rounded-md text-sm ${
                  order.paymentStatus === 1 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Đã thanh toán
              </button>
            </div>
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
                            src={item.variant.image.imageurl}
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
                            {item.variant.size?.name}, {item.variant.color?.name}
                          </p>
                        )}
                        <p className="text-xs text-gray-500">
                          SKU: {item.variant?.sku || item.product.sku}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    {new Intl.NumberFormat('vi-VN', {
                      style: 'currency',
                      currency: 'VND',
                    }).format(item.price)}
                  </td>
                  <td className="py-3 px-4 text-center">{item.quantity}</td>
                  <td className="py-3 px-4 text-right">
                    {new Intl.NumberFormat('vi-VN', {
                      style: 'currency',
                      currency: 'VND',
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
            <span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
              order.totalPrice - order.shippingFee
            )}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Phí vận chuyển:</span>
            <span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
              order.shippingFee
            )}</span>
          </div>
          <div className="flex justify-between py-3 border-t font-medium text-lg">
            <span>Tổng cộng:</span>
            <span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
              order.totalPrice
            )}</span>
          </div>
        </div>
      </div>
    </div>
  );
}