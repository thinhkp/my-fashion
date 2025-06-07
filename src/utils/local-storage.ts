export function addViewedProduct(slug: string) {
  const key = "viewedProducts";
  const viewed: string[] = JSON.parse(window.localStorage.getItem(key) || "[]");

  if (!viewed.includes(slug)) {
    viewed.unshift(slug);
    // eslint-disable-next-line
    const _ = viewed.length > 8 ? viewed.pop() : null; // Giới hạn tối đa 8 sản phẩm đã xem
    localStorage.setItem(key, JSON.stringify(viewed));
  }
}
