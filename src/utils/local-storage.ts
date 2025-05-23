export function addViewedProduct(slug: string) {
  const key = "viewedProducts";
  let viewed: string[] = JSON.parse(window.localStorage.getItem(key) || "[]");

  if (!viewed.includes(slug)) {
    viewed.unshift(slug);
    viewed.length > 8 ? viewed.pop() : null; // Giới hạn số lượng sản phẩm đã xem là 8
    localStorage.setItem(key, JSON.stringify(viewed));
  }
}
