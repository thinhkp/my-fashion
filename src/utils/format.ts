export function formatCurrencyVND(amount: number | null): string {
  if (amount == null) return ""

  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0, // Không có phần lẻ,
  }).format(amount);
}

export function calculateDiscountPercentage(
  originalPrice: number,
  discountPrice: number
): string {
  const discount = ((originalPrice - discountPrice) / originalPrice) * 100;
  return `-${Math.round(discount)}%`;
}
