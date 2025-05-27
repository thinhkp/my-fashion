"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import type { Category, Color, Product, Size } from "@/types/model";
import ProductCard from "@/components/ProductCard";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import gsap from "gsap";
import { Slash, Terminal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQueries, useQuery } from "@tanstack/react-query";
import { createUrl, fetchApi } from "@/api";
import { useDebounce } from "use-debounce";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { formatCurrencyVND } from "@/utils/format";
import axios from "axios";
import { GetRes as GetSearchIdRes } from "@/app/api/search/products/route";
import { GetRes as GetProductByIdRes } from "@/app/api/products/by-id/[id]/route";
import { se } from "date-fns/locale";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";

type ViewProps = {
  products: Product[];
  sizes: Size[];
  colors: Color[];
  cate: Category | null;
};

const View = ({ products: initProduct, sizes, colors, cate }: ViewProps) => {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [range, setRange] = useState<number[]>([0, 3000000]);

  const [rangeDebounce] = useDebounce(range, 1000);

  const handleClickSizes = (value: string) => {
    const isSelect = selectedSizes.includes(value);

    isSelect
      ? setSelectedSizes([...selectedSizes.filter((item) => item != value)])
      : setSelectedSizes([value, ...selectedSizes]);
  };
  const handleClickColors = (value: string) => {
    const isSelect = selectedColors.includes(value);

    if (!isSelect) {
      // Add to selected colors if not already selected
      setSelectedColors([...selectedColors, value]);
    } else {
      // Remove from selected colors if already selected
      setSelectedColors(selectedColors.filter((item) => item !== value));
    }
  };

  const {
    data: searchPIds,
    isFetching: searchPIdsFetching,
    refetch: searchPrefetch,
  } = useQuery({
    queryKey: ["searchedProductIds"],
    queryFn: async () => {
      try {
        const res = await axios.get<GetSearchIdRes>(
          createUrl("/api/search/products", {
            sizes: selectedSizes,
            colors: selectedColors,
            minPrice: range[0],
            maxPrice: range[1],
            categorySlug: cate?.slug || "",
          })
        );
        return res.data.productIds || [];
      } catch (error) {
        console.error("Error fetching products:", error);
        return [];
      }
    },
    staleTime: 0,
    retry: false,
  });

  const productQueries = useQueries({
    queries:
      searchPIds?.map((id) => ({
        queryKey: ["product", id],
        queryFn: async () => {
          return await axios
            .get<GetProductByIdRes>(`/api/products/by-id/${id}`)
            .then((res) => res.data.product);
        },
        enabled: !!searchPIds,
      })) || [],
  });

  const data = productQueries.map((query) => {
    return query.data; // Return the product data
  });

  // Safely handle products data with proper null checking and error handling
  const products = data || initProduct;

  console.log(searchPIds);
  console.log(products);

  const selectedRef = useRef<HTMLDivElement>(null);

  const isFiltering =
    selectedColors.length > 0 ||
    selectedSizes.length > 0 ||
    range[0] !== 0 ||
    range[1] !== 3000000;

  useEffect(() => {
      searchPrefetch();
  }, [selectedSizes, selectedColors , rangeDebounce])
  

  useLayoutEffect(() => {
    if (!selectedRef.current) return;

    if (isFiltering) {
      // Hiển thị phần selected với opacity 0 và height 0
      gsap.set(selectedRef.current, {
        height: 0,
        opacity: 0,
        overflow: "hidden",
        display: "block",
      });

      // Animate mở rộng
      gsap.to(selectedRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          // Khi hoàn thành, đặt overflow thành visible
          gsap.set(selectedRef.current, { overflow: "visible" });
        },
      });
    } else if (!isFiltering) {
      gsap.to(selectedRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(selectedRef.current, { display: "none" });
        },
      });
    }
  }, [isFiltering]);

  return (
    <>
      <div className="m-container bg-[#f5f5f5] py-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href={`/collections/${cate?.slug}`}>
                {cate?.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="m-container grid grid-cols-4 py-10">
        <div>
          <div className="px-5 sticky top-[100px] h-auto overflow-y-auto">
            <h1 className="text-2xl font-bold mb-5">Bộ lọc</h1>
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="item-2">
                <AccordionTrigger>Khoảng giá</AccordionTrigger>
                <AccordionContent>
                  <Slider
                    defaultValue={[0, 3000000]}
                    min={0}
                    max={3000000}
                    step={100000}
                    className={cn("py-5")}
                    value={range}
                    onValueChange={setRange}
                  ></Slider>

                  <div className="flex justify-between">
                    <span>{formatCurrencyVND(0)}</span>
                    <span>{formatCurrencyVND(3000000)}</span>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Màu sắc</AccordionTrigger>
                <AccordionContent>
                  {colors.map((item) => (
                    <Button
                      className="mb-1 mr-1"
                      size={"sm"}
                      variant={
                        selectedColors.includes(item.name || "")
                          ? "outline"
                          : "ghost"
                      }
                      key={item.id}
                      onClick={() => {
                        handleClickColors(item.name);
                      }}
                    >
                      {item.name}
                    </Button>
                  ))}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Size</AccordionTrigger>
                <AccordionContent>
                  {sizes.map((item) => (
                    <Button
                      className={cn("mb-1 mr-1")}
                      size={"sm"}
                      variant={
                        selectedSizes.includes(item.name || "")
                          ? "outline"
                          : "ghost"
                      }
                      key={item.id}
                      onClick={() => {
                        console.log("clinkl");
                        handleClickSizes(item.name || "");
                      }}
                    >
                      {item.name}
                    </Button>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="col-span-3">
          {
            <div id="selected" ref={selectedRef}>
              <h1 className="text-2xl font-bold mb-5">Bạn đang chọn</h1>
              <div className="mb-5 space-y-3">
                {/* range */}
                {range[0] != 0 ||
                  (range[1] != 3000000 && (
                    <div className="relative pl-9">
                      <Button
                        className="absolute top-0 left-0"
                        size={"icon"}
                        variant={"ghost"}
                        onClick={() => {
                          setRange([0, 3000000]);
                        }}
                      >
                        <X></X>
                      </Button>
                      <div className="text-xs pt-2 ">
                        <strong className="text-sm">Khoảng giá : </strong>{" "}
                        {formatCurrencyVND(range[0])}
                        {" - "}
                        {formatCurrencyVND(range[1])}
                      </div>
                    </div>
                  ))}

                {/* colors */}
                {selectedColors.length > 0 && (
                  <div className="relative pl-9">
                    <Button
                      className="absolute top-0 left-0"
                      size={"icon"}
                      variant={"ghost"}
                      onClick={() => {
                        setSelectedColors([]);
                      }}
                    >
                      <X></X>
                    </Button>
                    <div className="text-xs pt-2 space-x-1 space-y-1 ">
                      <strong className="text-sm">Màu sắc : </strong>{" "}
                      {selectedColors.map((item, index, arr) => {
                        return (
                          <span className="inline-block" key={item}>
                            {item}
                            {index != arr.length - 1 && ","}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* sizes */}
                {selectedSizes.length > 0 && (
                  <div className="relative pl-9">
                    <Button
                      className="absolute top-0 left-0"
                      size={"icon"}
                      variant={"ghost"}
                      onClick={() => {
                        setSelectedSizes([]);
                      }}
                    >
                      <X></X>
                    </Button>
                    <div className="text-xs pt-2 space-x-1 space-y-1 ">
                      <strong className="text-sm">Sizes : </strong>{" "}
                      {selectedSizes.map((item, index, arr) => {
                        return (
                          <span className="inline-block" key={item}>
                            {item}
                            {index != arr.length - 1 && ","}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          }

          {/* Products grid */}
          <div className="grid grid-cols-4 gap-4">
            {(products && products.length > 0) || searchPIdsFetching ? (
              // Show actual products with null check for each item
              products.map((item, index) => {
                if (!item) return <ProductCardSkeleton key={`pske-${index}`} />;
                try {
                  return <ProductCard key={`product-${item.id}`} item={item} />;
                } catch (error) {
                  console.error("Error rendering product card:", error);
                  return null;
                }
              })
            ) : (
              // No products found
              <div className="col-span-4">
                <Alert>
                  <Terminal className="h-4 w-4" />
                  <AlertTitle>Không thấy sản phẩm</AlertTitle>
                  <AlertDescription>vui lòng dùng bộ lọc khác</AlertDescription>
                </Alert>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
