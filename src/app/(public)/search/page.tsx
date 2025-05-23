import {
  HomeSection,
  HomeSectionContent,
  HomeSectionHeader,
  HomeSectionTitle,
} from "@/components/my-ui/home-section";
import ProductCard from "@/components/ProductCard";
import { countProductsByName, searchProductsByName } from "@/services/data";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { number } from "zod";

type PageProps = {
  searchParams: {
    q: string;
    page: number;
    limit: number;
  };
};

const createPageUrl = (
  searchParams: { [key: string]: string | number },
  pageNumber: number
) => {
  const params = new URLSearchParams();

  // Copy all existing search params
  Object.entries(searchParams).forEach(([key, value]) => {
    params.set(key, String(value));
  });

  // Update or add page parameter
  params.set("page", String(pageNumber));

  return `/search?${params.toString()}`;
};

const Page = async ({ searchParams }: PageProps) => {
  const { q, page: pageStr = 1, limit: limitStr = 10 } = searchParams;

  // lỗi runtime cast lại thành number
  const page = Number(pageStr);
  const limit = Number(limitStr);

  const skip = (page - 1) * limit;

  const products = await searchProductsByName(q, limit, skip);

  const count = await countProductsByName(q);

  const totalPages = Math.ceil(count / limit);

  const arrPages: number[] = [];

  const itemPerSide = 2;
  const leftIndex = page - itemPerSide;
  const rightIndex = page + itemPerSide;

  const isFarFromLastPage = totalPages - page > itemPerSide ;

  for (let index = 1; index <= totalPages; index++) {
    if (index >= leftIndex && index <= rightIndex) {
      arrPages.push(index);
    }
  }

  return (
    <HomeSection>
      <HomeSectionHeader>
        <HomeSectionTitle className="font-bold text-center mb-5">
          Tìm kiếm
        </HomeSectionTitle>
        <p className="text-center text-sm">
          Có <strong>{count} sản phẩm</strong> cho kết quả tìm kiếm
        </p>
      </HomeSectionHeader>
      <HomeSectionContent>
        <div className="grid grid-cols-5 mb-10">
          {products.map((item) => (
            <div key={item.id} className=" lg:px-3">
              <ProductCard item={item}></ProductCard>
            </div>
          ))}
        </div>
        <Pagination>
          <PaginationContent>
            {page != 1 && (
              <PaginationItem>
                <PaginationPrevious href={createPageUrl(searchParams, page -1)} />
              </PaginationItem>
            )}

            {arrPages.map((item) => {
              const isActive = item == page;
              return (
                <PaginationItem key={item}>
                  <PaginationLink
                    isActive={isActive}
                    href={createPageUrl(searchParams, item)}
                  >
                    {item}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            {isFarFromLastPage && (
              <>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href={createPageUrl(searchParams, totalPages)}>{totalPages}</PaginationLink>
              </PaginationItem>

              </>
              
            )}

            {page != totalPages && (
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </HomeSectionContent>
    </HomeSection>
  );
};

export default Page;
