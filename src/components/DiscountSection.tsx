import {prisma} from "@/services/prisma";
import React from "react";
import {
  HomeSection,
  HomeSectionContent,
  HomeSectionHeader,
  HomeSectionTitle,
} from "./my-ui/home-section";
import {
  Carousel,
  CarouselPrevious,
  CarouselNext,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import { cn } from "@/lib/utils";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { getDiscountProducts } from "@/services/data";

const DiscountSection = async ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  
  const products = await getDiscountProducts()

  
  return (
    <div className="bg-[rgb(255,249,249)]">

    <HomeSection className={cn("")}>
      <Carousel opts={{ align: "start" }}>
        <HomeSectionHeader className="flex justify-between">
          <HomeSectionTitle>Sản phẩm khuyến mãi</HomeSectionTitle>
          <div className="relative">
            <CarouselPrevious className="left-[-64px] border-0 bg-transparent" />
            <CarouselNext className="right-0 border-0 bg-transparent" />
          </div>
        </HomeSectionHeader>

        <HomeSectionContent>
          <CarouselContent className="-ml-5 select-none">
            {products.map((item, index) => {
              return (
                <CarouselItem key={index} className="basis-1/2  lg:basis-1/6  relative pl-5 flex flex-col">
                  <ProductCard item={item} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </HomeSectionContent>
      </Carousel>
      <HomeSectionContent>
        <div className="mt-[30px] relative z-0 flex justify-center items-center">
          <Link className=" max-lg:w-full text-center group overflow-hidden z-1 mx-auto px-12 py-3 rounded-md  uppercase border text-sm relative before:content-[''] before:absolute before:inset-[-200px] before:-translate-x-[101%] before:bg-red-500 hover:before:translate-x-0 before:transition-all before:z-[-1] before:duration-700 before:rotate-45 " href={"/"}>
            <span className="group-hover:text-white duration-700 transition-colors">xem tất cả <strong>sản phẩm khuyến mãi</strong></span>
          </Link>
        </div>
      </HomeSectionContent>
    </HomeSection>

    </div>

  );
};

export default DiscountSection;
