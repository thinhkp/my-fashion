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
// Status color mapping
export const getOrderStatusColor = (statusCode: number) => {
  switch (statusCode) {
    case OrderStatus.Pending: // 0
      return "bg-gray-100 text-gray-800 border-gray-200";
    case OrderStatus.Confirmed: // 1
      return "bg-blue-100 text-blue-800 border-blue-200";
    case OrderStatus.Processing: // 2
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case OrderStatus.ReadyToShip: // 3
      return "bg-indigo-100 text-indigo-800 border-indigo-200";
    case OrderStatus.Shipping: // 4
      return "bg-purple-100 text-purple-800 border-purple-200";
    case OrderStatus.Delivered: // 5
      return "bg-green-100 text-green-800 border-green-200";
    case OrderStatus.Completed: // 6
      return "bg-emerald-100 text-emerald-800 border-emerald-200";
    case OrderStatus.Cancelled: // 7
      return "bg-red-100 text-red-800 border-red-200";
    case OrderStatus.FailedDelivery: // 8
      return "bg-orange-100 text-orange-800 border-orange-200";
    case OrderStatus.Returned: // 9
      return "bg-amber-100 text-amber-800 border-amber-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};
