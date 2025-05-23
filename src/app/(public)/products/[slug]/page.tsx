import ProductDetail from "@/app/(public)/products/[slug]/ProductDetail";
import ProductTab from "@/app/(public)/products/[slug]/ProductTab";
import RelatedProducts from "@/app/(public)/products/[slug]/RelatedProducts";

import { getProductBySlug } from "@/services/data";
import { ProductWithRelations } from "@/types/model";
import { notFound } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;

  const product: ProductWithRelations = await getProductBySlug(slug);

  if (!product) return notFound();

  return (
    <div>
      <ProductDetail product={product} />
      <ProductTab />
      <RelatedProducts productId={product.id} />
    </div>
  );
};

export default page;
