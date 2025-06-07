import { getProductBySlug } from "@/services/data";
import { Prisma, user, size, color } from "@prisma/client";

export type ProductWithRelations = Awaited<ReturnType<typeof getProductBySlug>>;

export type ProductCardType = {
  id: number;
  name: string;
  slug: string;
  price: number;
  discountprice?: number;

  // Các mối quan hệ với bảng khác
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
      name: string;
    };
  }[];
};

// Type cho full product với relations
export type Product = Prisma.productGetPayload<{
  include: {
    productimage: true;
    productcategory: {
      include: {
        category: true;
      };
    };
    productvariant: {
      include: {
        color: true;
        size: true;
        image: true;
      };
    };
  };
}>;

export type Category = Prisma.categoryGetPayload<{
  include: {
    childcategory: true;
    parentcategory: true;
  };
}>;

export type User = user;

export type Size = size;

export type Color = color;

export type Order = Prisma.orderGetPayload<{
  include: {
    user: {
      select: {
        email: true;
        displayname: true;
      };
    };
    items: {
      include: {
        product: {
          select: {
            name: true;
            sku: true;
          };
        };
        variant: {
          include: {
            color: true;
            size: true;
            image: {
              select: {
                imageurl: true;
              };
            };
          };
        };
      };
    };
  };
}>;
