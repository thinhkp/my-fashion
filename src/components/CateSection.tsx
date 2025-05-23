import { prisma } from "@/services/prisma";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  HomeSection,
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

const CateSection = async () => {
  const categories = await prisma.category.findMany({
    take : 8,
    where: {childcategory : {none : {}}},
  });
  return (
    <HomeSection>
      <Carousel opts={{ align: "center" }}>
        <HomeSectionHeader className="flex justify-between">
          <HomeSectionTitle>danh mục sản phẩm</HomeSectionTitle>
          <div className="relative">
            <CarouselPrevious className="left-[-64px] border-0" />
            <CarouselNext className="right-0 border-0" />
          </div>
        </HomeSectionHeader>

        <CarouselContent className="-ml-5">
          {categories.map((item, index) => {
            return (
              <CarouselItem key={index} className="basis-2/3 md:basis-1/2  lg:basis-1/4   relative pl-5">
                <div className="w-full aspect-[2/3] relative z-0 overflow-hidden">
                  <Image
                    className="z-0 hover:scale-110 transition-all duration-500 object-cover"
                    src={`/image/categories/${item.image}`}
                    alt="Description"
                    fill
                    sizes="auto"
                  />
                  <div className="absolute bottom-0 w-full h-[75px] bg-[rgba(255,255,255,0.4)] z-1 px-4 py-3   lg:py-[15px] lg:px-[20px] flex items-center justify-between gap-1">
                    <div className="text-2xl"> {item.name}</div>
                    <div className="h-8 aspect-square rounded-full bg-white flex justify-center items-center ">
                      <ArrowRight />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </HomeSection>
  );
};

export default CateSection;
