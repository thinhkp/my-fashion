import { Product } from "@/types/model";

export async function getProductsBySlugArray(
  slugs: string[]
): Promise<Product[]> {
  try {
    if (!slugs.length) return [];

    // Create a query string with the slugs
    const queryParams = new URLSearchParams();
    slugs.forEach((slug) => queryParams.append("slugs", slug));

    const response = await fetch(
      `/api/products/by-slugs?${queryParams.toString()}`
    );

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
