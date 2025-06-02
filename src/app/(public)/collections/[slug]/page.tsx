import {
  getAllColors,
  getAllSizes,
  getCategoryBySlug,
  getProductsByCategorySlug,
} from "@/services/data";
import { Category, Product } from "@/types/model";
import View from "./_view/View";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const products: Product[] = await getProductsByCategorySlug(slug);

  const cate: Category | null = await getCategoryBySlug(slug);

  const [sizes, colors] = await Promise.all([getAllSizes(), getAllColors()]);

  return <View products={products} sizes={sizes} colors={colors} cate={cate} />;
};

export default Page;
