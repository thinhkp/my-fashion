import React from "react";
import {
  HomeSection,
  HomeSectionContent,
  HomeSectionHeader,
  HomeSectionTitle,
} from "../../../../components/my-ui/home-section";
import { getRelatedProducts } from "@/services/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";
import ProductCard from "../../../../components/ProductCard";

type Props = {
  productId: number;
  limit?: number;
};

const RelatedProducts = async ({ productId, limit }: Props) => {
  const relatedProducts = await getRelatedProducts(productId, limit || 5);

  return (
    <HomeSection>
      <HomeSectionHeader>
        <HomeSectionTitle className="text-center">
          Sản phẩm liên quan
        </HomeSectionTitle>
      </HomeSectionHeader>
      <HomeSectionContent>
        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {relatedProducts.map((item) => {
              // Transform item.productvariant to match ProductCard's expected type
              const transformedItem = {
                ...item,
                productvariant: item.productvariant.map((variant: any) => ({
                  ...variant,
                  image: variant.image ?? null,
                  size: variant.size ?? {
                    name: null,
                    id: "",
                    description: "",
                    index: 0,
                  },
                  color: variant.color,
                })),
              };
              return (
                <CarouselItem
                  key={item.id}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <ProductCard item={transformedItem} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselNext className="right-0 bg-white hidden sm:flex" />
          <CarouselPrevious className="left-0 bg-white hidden sm:flex" />
        </Carousel>
      </HomeSectionContent>
    </HomeSection>
  );
};

export default RelatedProducts;
