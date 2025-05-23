import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ProductCardSkeleton = () => {
  return (
    <div>
        <Skeleton className="w-full  aspect-[3/4]"></Skeleton>
        <div className="py-[10px]">
          <Skeleton className="w-full h-10 mb-1 "></Skeleton>
          <Skeleton className="w-full h-5 "></Skeleton>
        </div>
    </div>
  );
};

export default ProductCardSkeleton;
