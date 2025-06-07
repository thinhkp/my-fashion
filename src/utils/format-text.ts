import { OrderStatus } from "@/constants/order-status";

export const getOrderStatusLabel = (statusCode: number): string => {
  const statusMap: Record<string, string> = {
    Pending: "Chờ xác nhận",
    Confirmed: "Đã xác nhận",
    Processing: "Đang xử lý",
    ReadyToShip: "Sẵn sàng giao",
    Shipping: "Đang giao",
    Delivered: "Đã giao",
    Completed: "Hoàn thành",
    Cancelled: "Đã hủy",
    FailedDelivery: "Giao thất bại",
    Returned: "Đã hoàn hàng",
  };

  const statusName = OrderStatus[statusCode] || "Unknown";
  return statusMap[statusName] || statusName;
};

// Ánh xạ màu sắc cho trạng thái đơn hàng
export const getOrderStatusColor = (statusCode: number) => {
  switch (statusCode) {
    case OrderStatus.Pending: // 0 - Chờ xác nhận
      return "bg-gray-100 text-gray-800 border-gray-200";
    case OrderStatus.Confirmed: // 1 - Đã xác nhận
      return "bg-blue-100 text-blue-800 border-blue-200";
    case OrderStatus.Processing: // 2 - Đang xử lý
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case OrderStatus.Shipping: // 3 - Đang giao
      return "bg-purple-100 text-purple-800 border-purple-200";
    case OrderStatus.Delivered: // 4 - Đã giao
      return "bg-green-100 text-green-800 border-green-200";
    case OrderStatus.Cancelled: // 5 - Đã hủy
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};
