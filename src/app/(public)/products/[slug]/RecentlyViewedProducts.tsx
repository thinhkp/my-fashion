"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/model";
import ProductCard from "@/components/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { toast } from "sonner";

interface RecentlyViewedProductsProps {
  currentProductId?: number; // ID sản phẩm hiện tại để không hiển thị trùng lặp
  maxItems?: number; // Số lượng sản phẩm tối đa hiển thị
  productType?: string; // Type của sản phẩm hiện tại để hiển thị các sản phẩm cùng loại
}

const RecentlyViewedProducts = ({
  currentProductId,
  maxItems = 5,
  productType,
}: RecentlyViewedProductsProps) => {
  const [recentProducts, setRecentProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentlyViewedProducts = async () => {
      try {
        setLoading(true);

        // Lấy danh sách slug sản phẩm đã xem từ localStorage
        const storedSlugs = localStorage.getItem("recentlyViewedProducts");
        if (!storedSlugs) {
          setLoading(false);
          return;
        }

        const slugs = JSON.parse(storedSlugs) as string[];
        if (!slugs.length) {
          setLoading(false);
          return;
        }

        // Giới hạn số lượng slug cần lấy dữ liệu
        const limitedSlugs = slugs.slice(0, maxItems);

        // Fetch dữ liệu sản phẩm cho từng slug
        const productPromises = limitedSlugs.map(async (slug) => {
          const response = await fetch(`/api/products/${slug}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch product with slug: ${slug}`);
          }
          const result = await response.json();
          return result.data as Product;
        });

        // Đợi tất cả các request hoàn thành
        const products = await Promise.all(productPromises);

        // Lọc bỏ sản phẩm hiện tại nếu có
        const filteredProducts = products
          .filter((product) => product.id !== currentProductId)
          // Lọc các sản phẩm có cùng type nếu productType được cung cấp
          .filter(
            (product) =>
              !productType ||
              (product.productcategory &&
                product.productcategory[0]?.category?.name === productType)
          );

        setRecentProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching recently viewed products:", error);
        toast.error("Không thể tải sản phẩm đã xem gần đây", {
          description: "Vui lòng thử lại sau",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchRecentlyViewedProducts();
  }, [currentProductId, maxItems, productType]);

  if (loading) {
    return (
      <div className="m-container">
        <div className="mt-12 mb-8">
          <h3 className="text-xl font-semibold mb-4">
            Sản phẩm đã xem gần đây
          </h3>
          <div className="w-full h-40 flex items-center justify-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>
    );
  }

  if (recentProducts.length === 0) return null;

  return (
    <div className="m-container">
      <div className="mt-12 mb-8">
        <h3 className="text-xl font-semibold mb-4">Sản phẩm đã xem gần đây</h3>

        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {recentProducts.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <ProductCard item={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </div>
  );
};

export default RecentlyViewedProducts;
