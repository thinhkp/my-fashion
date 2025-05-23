"use client";

import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { HtmlProps } from "next/dist/shared/lib/html-context.shared-runtime";
import { cn } from "@/lib/utils";

const slideImgs = [
  "/image/slide/slide_1_img.webp",
  "/image/slide/slide_2_img.webp",
  "/image/slide/slide_3_img.webp",
  "/image/slide/slide_4_img.webp",
];

const Slider = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn(className)}>
      <Carousel
        className="w-full select-none"
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 5000, // Thời gian giữa các slide
            stopOnInteraction: true, // Tùy chọn dừng khi người dùng tương tác
          }),
        ]}
      >
        <CarouselContent className="w-full h-full ml-0">
          {slideImgs.map((src, index) => {
            return (
              <CarouselItem key={index} className="w-full h-full pl-0">
                <AspectRatio ratio={5 / 2} className="w-full">
                  <Image src={src} fill className="object-cover" alt="1" />{" "}
                </AspectRatio>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious className="left-10 lg:visible invisible" />
        <CarouselNext className="right-10 lg:visible invisible" />
      </Carousel>
    </div>
  );
};

export default Slider;
