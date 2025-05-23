
import { getProductBySlug } from "@/services/data";

export type ProductWithRelations = Awaited<ReturnType<typeof getProductBySlug>>;

export type ProductCardType = {
  id: number;
  name: string;
  slug: string;
  price: number;
  discountprice?: number;

    // Relationships
  productimage: {
    id: number;
    imageurl: string;
    displayorder: number | null;
    productid: number;
  }[];

  productvariant: {
    id: number;
    additionalprice: number | null;
    stockquantity: number;
    sku: string;
    color: {
      id: string;
      name: string;
    };
    size: {
      id: string;
      name :string
    };
  }[];
};



import { Prisma, user , size , color } from '../generated/prisma'

// Type cho full product với relations
export type Product = Prisma.productGetPayload<{
  include: {
    productimage: true,
    productcategory: {
      include: {
        category: true
      }
    },
    productvariant: {
      include: {
        color: true,
        size: true,
        image: true
      }
    }
  }
}>

export type Category = Prisma.categoryGetPayload<{
 include : {
  childcategory : true,
  parentcategory  :true
 }
}>

export type User = user

export type Size = size

export type Color = color



