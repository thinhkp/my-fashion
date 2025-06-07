export function formatCurrencyVND(amount: number | null | undefined): string {
  if (amount == null || amount == undefined) return "";

  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0, // Không hiển thị phần lẻ
  }).format(amount);
}

export function calculateDiscountPercentage(
  originalPrice: number,
  discountPrice: number
): string {
  const discount = ((originalPrice - discountPrice) / originalPrice) * 100;
  return `-${Math.round(discount)}%`;
}
