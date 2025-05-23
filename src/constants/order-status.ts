export enum OrderStatus {
  Pending = 0,          // Mới tạo, chưa xử lý
  Confirmed = 1,        // Đã xác nhận
  Processing = 2,       // Đang xử lý
  ReadyToShip = 3,      // Đã đóng gói, chuẩn bị giao
  Shipping = 4,         // Đang giao
  Delivered = 5,        // Giao thành công
  Completed = 6,        // Hoàn tất
  Cancelled = 7,        // Đã hủy
  FailedDelivery = 8,   // Giao thất bại
  Returned = 9          // Đã hoàn hàng
}
