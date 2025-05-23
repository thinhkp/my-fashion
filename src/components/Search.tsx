"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

import { Search as SearchI, SearchIcon, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "./ui/input";
import { useQuery } from "@tanstack/react-query";
import { formatCurrencyVND } from "@/utils/format";
import { fetchApi } from "@/api";
import { Product } from "@/types/model";
import { useMediaQuery } from "@/hooks/use-mediaquery";

type Pagination = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

type Res = {
  data: Product[];
  pagination: Pagination;
};

const Search = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 500);
  const [isOpen, setIsOpen] = useState(false);
  const isLg = useMediaQuery("(min-width: 1024px)");

  const { data } = useQuery({
    queryKey: ["search", debouncedQuery],
    queryFn: async () => {
      return await fetchApi<Res>({
        url: "/api/search",
        params: { q: debouncedQuery, limit: "4", page: "1" },
      });
    },
    enabled: debouncedQuery.length >= 2 && debouncedQuery == query,
    staleTime: 1000 * 60 * 2,
  });

  const products: Product[] = data?.data || [];
  const pagination: Pagination = data?.pagination || {
    total: 0,
    page: 1,
    limit: 0,
    totalPages: 0,
  };
  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Drawer
      direction={isLg ? "top" : "bottom"}
      open={isOpen}
      onOpenChange={setIsOpen}
      onClose={() => {
        setQuery("");
      }}
    >
      <DrawerTrigger asChild>
        <SearchI />
      </DrawerTrigger>
      <DrawerContent className="h-auto data-[vaul-drawer-direction=bottom]:min-h-[50vh]">
        <DrawerHeader className="m-container ">
          <DrawerTitle className="">
            <div className="grid grid-cols-4 ">
              <div className="">
                <Link href={"/"} className="block">
                  <Image
                    height={50}
                    width={220}
                    alt="logo"
                    src={"/image/logo.webp"}
                  />
                </Link>
              </div>

              <div className=" px-5 relative col-span-2 flex items-center justify-center">
                <Input
                  type="text"
                  className="w-full pl-10"
                  placeholder="Tìm kiếm sản phẩm..."
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-end">
                <DrawerClose>
                  <X />
                </DrawerClose>
              </div>
            </div>
            {products.length > 0 && debouncedQuery == query && (
              <div className="grid grid-cols-4 ">
                <div className="col-start-2 col-span-2 flex flex-wrap ">
                  {products.map((item) => (
                    <div
                      key={item.sku}
                      className="py-3 flex justify-between items-center gap-3 w-full border-b border-b-slate-200"
                    >
                      <div className="">
                        <h1 className="text-lg font-bold">
                          <Link
                            href={`/products/${item.slug}`}
                            onClick={toggleDrawer}
                          >
                            {item?.name}
                          </Link>
                        </h1>
                        <div className="">
                          {item.discountprice && (
                            <div className="space-x-3 text-[12px]">
                              <span className=" text-red-500">
                                {formatCurrencyVND(item.discountprice)}
                              </span>
                              <span className="line-through">
                                {formatCurrencyVND(item.price)}
                              </span>
                            </div>
                          )}
                          {!item.discountprice && (
                            <span className="text-[12px]">
                              {formatCurrencyVND(item.price)}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="w-[50px] shrink-0 ">
                        <Link
                          href={`/products/${item.slug}`}
                          onClick={toggleDrawer}
                        >
                          <Image
                            alt="item.name"
                            src={`/image/products/${item?.productimage[0]?.imageurl}`}
                            width={50}
                            height={0}
                            className="w-full h-auto"
                          />
                        </Link>
                      </div>
                    </div>
                  ))}
                  <Link
                    onClick={toggleDrawer}
                    className="block text-center w-full py-3"
                    href={`/search?q=${query}`}
                  >
                    Xem thêm {pagination.total} sản phẩm
                  </Link>
                </div>
              </div>
            )}
          </DrawerTitle>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default Search;
