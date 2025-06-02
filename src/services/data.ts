import { prisma } from "@/services/prisma";
import { Category, Product } from "@/types/model";
import { Prisma } from "@prisma/client";
import { unstable_cache } from "next/cache";

export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: {
      slug: slug,
    },
    include: {
      productimage: true,
      productvariant: {
        include: {
          color: true,
          image: true,
          size: true,
        },
        orderBy: [
          {
            size: {
              index: "asc",
            },
          },
          {
            colorid: "asc",
          },
        ],
      },
      productcategory: {
        include: {
          category: true,
        },
      },
    },
  });
}

export async function getRelatedProducts(productId: number, limit: number = 4) {
  // Get the product with its categories
  const product = await prisma.product.findUnique({
    where: { id: productId },
    include: {
      productcategory: {
        select: {
          categoryid: true,
        },
      },
    },
  });

  if (!product) return [];

  // Get category IDs of the current product
  const categoryIds = product.productcategory.map((pc) => pc.categoryid);

  // Find related products that share categories
  const relatedProducts = await prisma.product.findMany({
    where: {
      AND: [
        { id: { not: productId } }, // Exclude current product
        {
          productcategory: {
            some: {
              categoryid: { in: categoryIds },
            },
          },
        },
        { status: 1 }, // Assuming 1 means active/published
      ],
    },
    include: {
      productimage: true,
      productvariant: {
        include: {
          color: true,
        },
      },
      productcategory: {
        include: {
          category: true,
        },
      },
    },
    take: limit,
    orderBy: {
      id: "desc", // Get newest products first
    },
  });

  return relatedProducts;
}

export async function getDiscountProducts(): Promise<Product[]> {
  const products = (await prisma.product.findMany({
    where: {
      discountprice: { not: null },
      status: 1,
    },
    select: {
      id: true,
      name: true,
      slug: true,
      description: true,
      sku: true,
      price: true,
      discountprice: true,
      status: true,
      isfeatured: true,
      productimage: {
        select: {
          id: true,
          imageurl: true,
          displayorder: true,
          productid: true,
        },
      },
      productcategory: {
        select: {
          categoryid: true,
          category: {
            select: {
              id: true,
              name: true,
              description: true,
              slug: true,
              image: true,
            },
          },
        },
      },
      productvariant: {
        select: {
          id: true,
          sku: true,
          additionalprice: true,
          stockquantity: true,
          size: {
            select: {
              id: true,
              name: true,
            },
          },
          color: {
            select: {
              id: true,
              name: true,
            },
          },
          image: {
            select: {
              id: true,
              imageurl: true,
            },
          },
        },
        orderBy: [
          {
            size: {
              index: "asc",
            },
          },
        ],
      },
    },
    orderBy: {
      id: "desc",
    },
  })) as unknown as Product[];

  return products;
}

export async function getProductsByCategorySlug(
  slug: string
): Promise<Product[]> {
  const products = (await prisma.product.findMany({
    where: {
      productcategory: {
        some: {
          category: {
            slug: slug,
            categorystatus: 1,
          },
        },
      },
      status: 1,
    },
    select: {
      id: true,
      name: true,
      slug: true,
      description: true,
      sku: true,
      price: true,
      discountprice: true,
      status: true,
      isfeatured: true,
      productimage: {
        select: {
          id: true,
          imageurl: true,
          displayorder: true,
          productid: true,
        },
      },
      productcategory: {
        select: {
          categoryid: true,
          category: {
            select: {
              id: true,
              name: true,
              description: true,
              slug: true,
              image: true,
            },
          },
        },
      },
      productvariant: {
        select: {
          id: true,
          sku: true,
          additionalprice: true,
          stockquantity: true,
          size: {
            select: {
              id: true,
              name: true,
            },
          },
          color: {
            select: {
              id: true,
              name: true,
            },
          },
          image: {
            select: {
              id: true,
              imageurl: true,
            },
          },
        },
        orderBy: [
          {
            size: {
              index: "asc",
            },
          },
        ],
      },
    },
    orderBy: {
      id: "desc",
    },
  })) as unknown as Product[];

  return products;
}

// search
export async function searchProductsByName(
  query: string,
  limit: number = 10,
  offset: number = 0
): Promise<Product[]> {
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: query, // So sánh với trường `name`
        mode: "insensitive", // Không phân biệt chữ hoa/chữ thường
      },
    },
    include: {
      productimage: true,
      productcategory: {
        include: {
          category: true,
        },
      },
      productvariant: {
        include: {
          color: true,
          size: true,
          image: true,
        },
      },
    },
    take: limit, // Giới hạn số lượng sản phẩm trả về
    skip: offset, // Bỏ qua một số sản phẩm đầu tiên (phân trang)
    orderBy: {
      id: "desc", // Sắp xếp theo sản phẩm mới nhất
    },
  });

  return products; // Đảm bảo luôn trả về một mảng
}

export async function countProductsByName(query: string): Promise<number> {
  return await prisma.product.count({
    where: {
      name: {
        contains: query,
        mode: "insensitive",
      },
      status: 1,
    },
  });
}

export async function getShowedCategories(): Promise<Category[]> {
  const activeCategories = await prisma.category.findMany({
    where: {
      isshow: true, // Chỉ lấy các category đang active
    },
    include: {
      childcategory: true,
      parentcategory: true,
    },
    orderBy: {
      id: "asc",
    },
  });

  return activeCategories;
}

export async function getChildCategories(parentId: number) {
  const childCategories = await prisma.category.findMany({
    where: {
      parentcategoryid: parentId,
      categorystatus: 1, // Chỉ lấy các category đang active
    },
    select: {
      id: true,
      name: true,
      description: true,
      slug: true,
      image: true,
      parentcategoryid: true,
    },
    orderBy: {
      id: "asc",
    },
  });

  return childCategories;
}

export async function getCategoryBySlug(
  slug: string
): Promise<Category | null> {
  const category = await prisma.category.findFirst({
    where: {
      slug: slug,
    },
    include: {
      childcategory: {
        where: {
          categorystatus: 1, // Chỉ lấy các child category đang active
        },
      },
      parentcategory: true, // Include thông tin category cha nếu có
    },
  });

  return category;
}

// Get all sizes ordered by index with cache
export const getAllSizes = unstable_cache(
  async () => {
    const sizes = await prisma.size.findMany({
      orderBy: {
        index: "asc",
      },
      select: {
        id: true,
        name: true,
        description: true,
        index: true,
      },
    });
    return sizes;
  },
  ["all-sizes-cache"], // unique cache key
  { revalidate: 3600 } // cache for 1 hour
);

// Get all colors with cache
export const getAllColors = unstable_cache(
  async () => {
    const colors = await prisma.color.findMany({
      select: {
        id: true,
        name: true,
        code: true,
      },
      orderBy: {
        name: "asc",
      },
    });
    return colors;
  },
  ["all-colors-cache"],
  { revalidate: 3600 }
);

export async function getProductIdsByQuery({
  sizes,
  colors,
  minPrice,
  maxPrice,
  categorySlug,
}: {
  sizes: string[];
  colors: string[];
  minPrice: number;
  maxPrice: number;
  categorySlug?: string;
}): Promise<number[]> {
  // Build the where clause for prisma query
  // eslint-disable-next-line
  const where: any = {
    price: {
      gte: minPrice,
      lte: maxPrice,
    },
    status: 1, // Ensure we only get active products
  };

  // Add size and color filters if provided
  if (sizes.length > 0 || colors.length > 0) {
    where.productvariant = {
      some: {
        ...(sizes.length > 0 && {
          size: {
            name: { in: sizes },
          },
        }),
        ...(colors.length > 0 && {
          color: {
            name: { in: colors },
          },
        }),
      },
    };
  }

  // Add category filter by slug if provided
  if (categorySlug) {
    where.productcategory = {
      some: {
        category: {
          OR: [
            { slug: categorySlug },
            { parentcategory: { slug: categorySlug } },
          ],
        },
      },
    };
  }

  // Only select the product IDs
  const products = await prisma.product.findMany({
    where,
    select: {
      id: true,
    },
  });

  // Return an array of product IDs
  return products.map((product) => product.id);
}

// Create a new function to get products by IDs
export async function getProductsByIds(
  productIds: number[]
): Promise<Product[]> {
  if (!productIds.length) return [];

  return await prisma.product.findMany({
    where: {
      id: { in: productIds },
      status: 1,
    },
    include: {
      productimage: true,
      productcategory: {
        include: {
          category: true,
        },
      },
      productvariant: {
        include: {
          color: true,
          size: true,
          image: true,
        },
        orderBy: [
          {
            size: {
              index: "asc",
            },
          },
        ],
      },
    },
  });
}

export async function getUserByUsername<T extends Prisma.userInclude>(
  username: string,
  options?: { include?: T }
): // eslint-disable-next-line
Promise<any> {
  return await prisma.user.findFirst({
    where: { username },
    ...(options?.include ? { include: options.include } : {}),
  });
}

export async function getUserById<T extends Prisma.userInclude>(
  userId: string,
  options?: { include?: T }
): // eslint-disable-next-line
Promise<any> {
  return await prisma.user.findFirst({
    where: { userId: userId },
    ...(options?.include ? { include: options.include } : {}),
  });
}
