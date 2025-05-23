import { prisma } from "@/services/prisma";
import CateWithProductsView from "./CateWithProductsView";
import { category, product } from "@/generated/prisma";
import { getProductsByCategorySlug } from "@/services/data";
import { Product } from "@/types/model";

const CateWithProducts = async ({ index }: { index: number }) => {
  const cates = await prisma.category.findMany({
    skip: index * 4,
    take: 4,
    select: { name: true, slug: true, id: true },
  });

  const productsInCate : Product[] = await getProductsByCategorySlug(
    cates[0].slug || ""
  );

  return <CateWithProductsView cates={cates} productsInCate={productsInCate} />;
};

export default CateWithProducts;
