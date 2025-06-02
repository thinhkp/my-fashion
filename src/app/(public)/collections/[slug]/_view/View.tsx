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
import { Slash, Terminal, X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQueries, useQuery } from "@tanstack/react-query";
import { createUrl } from "@/api";
import { useDebounce } from "use-debounce";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { formatCurrencyVND } from "@/utils/format";
import axios from "axios";
import { GetRes as GetSearchIdRes } from "@/app/api/search/products/route";
import { GetRes as GetProductByIdRes } from "@/app/api/products/by-id/[id]/route";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@/components/ui/dialog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    // eslint-disable-next-line
    const _ = isSelect
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

  // Modify pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);

  // Calculate pagination
  const totalProducts = products?.length || 0;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  // Get current page products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts =
    products?.slice(indexOfFirstProduct, indexOfLastProduct) || [];

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
  }, [selectedSizes, selectedColors, rangeDebounce, searchPrefetch]);

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

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of product section
    const productGridElement = document.querySelector(".product-grid");
    const topPosition = productGridElement
      ? productGridElement.getBoundingClientRect().top + window.scrollY - 100
      : 0;

    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  };

  // Handle products per page change
  const handleProductsPerPageChange = (value: string) => {
    const newProductsPerPage = parseInt(value);
    setProductsPerPage(newProductsPerPage);
    setCurrentPage(1); // Reset to first page when changing display count
  };

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

      {/* Mobile filter button - visible on small screens */}
      <div className="m-container py-4 lg:hidden">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">{cate?.name}</h1>
          <Sheet open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Menu className="h-4 w-4" /> Bộ lọc
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[300px] sm:w-[350px] overflow-y-auto"
            >
              <DialogTitle></DialogTitle>
              <div className="py-4">
                <h2 className="text-xl font-bold mb-4">Bộ lọc</h2>
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
                      <div className="flex flex-wrap gap-1">
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
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Size</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-wrap gap-1">
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
                              handleClickSizes(item.name || "");
                            }}
                          >
                            {item.name}
                          </Button>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {isFiltering && (
                  <div className="mt-6 pt-4 border-t">
                    <Button
                      variant="destructive"
                      className="w-full"
                      onClick={() => {
                        setSelectedColors([]);
                        setSelectedSizes([]);
                        setRange([0, 3000000]);
                        setIsMobileFilterOpen(false);
                      }}
                    >
                      Xóa tất cả bộ lọc
                    </Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="m-container grid grid-cols-1 lg:grid-cols-4 gap-6 py-4 lg:py-10">
        {/* Desktop sidebar - hidden on small screens */}
        <div className="hidden lg:block">
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

        <div className="col-span-1 lg:col-span-3">
          {isFiltering && (
            <div id="selected" ref={selectedRef} className="mb-6">
              <h1 className="text-xl font-bold mb-3">Bạn đang chọn</h1>
              <div className="space-y-3">
                {/* range */}
                {(range[0] !== 0 || range[1] !== 3000000) && (
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
                )}

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
          )}

          {/* Product count display with items per page selector */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
            <div className="text-sm text-gray-600">
              Hiển thị{" "}
              <span className="font-medium">{currentProducts.length}</span> sản
              phẩm
              {totalProducts > 0 && (
                <>
                  {" "}
                  (trong tổng số{" "}
                  <span className="font-medium">{totalProducts}</span> sản phẩm)
                </>
              )}
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-600 whitespace-nowrap">Hiển thị:</span>
              <Select
                value={productsPerPage.toString()}
                onValueChange={handleProductsPerPageChange}
              >
                <SelectTrigger className="h-8 w-[80px]">
                  <SelectValue placeholder="12" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="8">8</SelectItem>
                  <SelectItem value="12">12</SelectItem>
                  <SelectItem value="24">24</SelectItem>
                  <SelectItem value="36">36</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-gray-600">sản phẩm</span>

              {searchPIdsFetching && (
                <div className="text-sm text-blue-600 animate-pulse ml-3">
                  Đang tải...
                </div>
              )}
            </div>
          </div>

          {/* Products grid - responsive grid with different columns based on screen size */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 product-grid">
            {(currentProducts && currentProducts.length > 0) ||
            searchPIdsFetching ? (
              // Show actual products with null check for each item
              currentProducts.map((item, index) => {
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
              <div className="col-span-full">
                <Alert>
                  <Terminal className="h-4 w-4" />
                  <AlertTitle>Không thấy sản phẩm</AlertTitle>
                  <AlertDescription>vui lòng dùng bộ lọc khác</AlertDescription>
                </Alert>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
              <Pagination>
                <PaginationContent>
                  {/* Previous button */}
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) handlePageChange(currentPage - 1);
                      }}
                      className={
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : ""
                      }
                    />
                  </PaginationItem>

                  {/* Page numbers */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    // Show only current page, first, last, and 1 page before and after current
                    .filter(
                      (page) =>
                        page === 1 ||
                        page === totalPages ||
                        Math.abs(page - currentPage) <= 1
                    )
                    .map((page, index, array) => {
                      // Add ellipsis if pages are skipped
                      const showEllipsisBefore =
                        index > 0 && array[index - 1] !== page - 1;
                      const showEllipsisAfter =
                        index < array.length - 1 &&
                        array[index + 1] !== page + 1;

                      return (
                        <React.Fragment key={page}>
                          {showEllipsisBefore && (
                            <PaginationItem>
                              <span className="px-4 py-2">...</span>
                            </PaginationItem>
                          )}

                          <PaginationItem>
                            <PaginationLink
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                handlePageChange(page);
                              }}
                              isActive={page === currentPage}
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>

                          {showEllipsisAfter && (
                            <PaginationItem>
                              <span className="px-4 py-2">...</span>
                            </PaginationItem>
                          )}
                        </React.Fragment>
                      );
                    })}

                  {/* Next button */}
                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages)
                          handlePageChange(currentPage + 1);
                      }}
                      className={
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : ""
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>

              <div className="text-sm text-gray-500">
                Trang {currentPage} / {totalPages}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default View;
