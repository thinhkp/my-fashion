"use client";
import { category } from "@/generated/prisma";
import React, { useEffect, useState } from "react";
import {
  HomeSection,
  HomeSectionContent,
  HomeSectionHeader,
} from "./my-ui/home-section";
import { cn } from "@/lib/utils";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { Product, ProductCardType } from "@/types/model";
import { fetchApi } from "@/api";
const CateWithProductsView = ({
  cates,
  productsInCate,
}: {
  cates: any[];
  productsInCate: Product[];
}) => {
  console.log('productsInCate');
  
  const [active, setActive] = useState(0);

  
  const { data  , isLoading } = useQuery({
    queryKey: ["prosInCate", cates[active].id],
    queryFn: async () => {
      try{
        return await fetchApi<{data? : Product[]}>({ url: `/api/collections/${cates[active].slug}` });
      }
      catch{
        return {data : []}
      }
      
    },
    staleTime: Infinity,
    
  });


  const products : Product[] = data?.data  ||  productsInCate 

  
  

  return (
    <HomeSection>
      <HomeSectionHeader>
        <ul className="flex lg:justify-center md:justify-start">
          {cates.map((item, index) => {
            return (
              <li
                className="px-5 md:text-[16px]  lg:text-3xl uppercase cursor-pointer"
                key={item.name}
              >
                <span
                  onClick={() => {
                    setActive(index);
                  }}
                  className={cn(
                    " relative font-semibold pb-3 inline-block text-[rgb(149,149,149)] hover:text-black group transition-all duration-700 text ",
                    index == active && "text-black"
                  )}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-0.5 bg-black w-0   group-hover:w-full transition-all duration-700",
                      index == active && "w-full"
                    )}
                  ></span>
                </span>
              </li>
            );
          })}
        </ul>
      </HomeSectionHeader>
      <HomeSectionContent>
        <div className="grid lg:grid-cols-5 grid-cols-2 gap-2">
          { !isLoading && products.map((item, index) => {
            return <ProductCard key={index} item={item}></ProductCard>;
          })}
        </div>
      </HomeSectionContent>
    </HomeSection>
  );
};

export default CateWithProductsView;
