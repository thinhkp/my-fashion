import { Product } from "@/types/model";

export async function getProductsBySlugArray(
  slugs: string[]
): Promise<Product[]> {
  try {
    // Tạo chuỗi truy vấn với các slug
    const queryString = slugs
      .map((slug) => `slugs=${encodeURIComponent(slug)}`)
      .join("&");

    const response = await fetch(`/api/products/by-slugs?${queryString}`);

    if (!response.ok) {
      throw new Error("Failed to fetch products by slugs");
    }

    const data = await response.json();
    return data.products || [];
  } catch (error) {
    console.error("Error fetching products by slugs:", error);
    return [];
  }
}
