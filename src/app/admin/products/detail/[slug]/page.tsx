"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { Product } from "@/types/model";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertCircle,
  ArrowLeft,
  Edit,
  Trash2,
  Package,
  Layers,
  Info,
} from "lucide-react";
import { formatCurrencyVND } from "@/utils/format";

// API response type
interface ProductResponse {
  data: Product;
  message: string;
  error?: string;
}

// Function to fetch product using Axios
const fetchProduct = async (slug: string): Promise<ProductResponse> => {
  try {
    const response = await axios.get(`/api/products/${slug}`, {
      headers: {
        "Cache-Control": "no-cache",
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || "Failed to fetch product");
    }
    throw new Error("Failed to fetch product");
  }
};

export default function AdminProductDetail() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug as string;
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Use React Query to fetch product data
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["product", slug],
    queryFn: () => fetchProduct(slug),
    enabled: !!slug,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });


  // Get status label
  const getStatusLabel = (status: number) => {
    switch (status) {
      case 1:
        return { label: "Active", color: "bg-green-100 text-green-800" };
      case 2:
        return { label: "Draft", color: "bg-yellow-100 text-yellow-800" };
      default:
        return { label: "Inactive", color: "bg-red-100 text-red-800" };
    }
  };

  // Handle delete product (placeholder)
  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this product?")) {
      // TODO: Implement delete functionality
      console.log("Delete product:", slug);
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product information...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (isError || !data) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <div className="flex items-center mb-4">
            <AlertCircle className="h-6 w-6 text-red-500 mr-2" />
            <h2 className="text-lg font-semibold text-red-700">
              Error Loading Product
            </h2>
          </div>
          <p className="text-gray-700">
            {error instanceof Error
              ? error.message
              : "Failed to load product data"}
          </p>
          <div className="mt-4 flex justify-end">
            <Button
              variant="outline"
              onClick={() => router.push("/admin/products")}
            >
              Return to Products
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const product = data.data;

  console.log("Product Detail:", product.price, product.discountprice);

  // Handle case where product is not found
  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-md">
          <div className="flex items-center mb-4">
            <AlertCircle className="h-6 w-6 text-yellow-500 mr-2" />
            <h2 className="text-lg font-semibold text-yellow-700">
              Product Not Found
            </h2>
          </div>
          <p className="text-gray-700">
            The requested product could not be found.
          </p>
          <div className="mt-4 flex justify-end">
            <Button
              variant="outline"
              onClick={() => router.push("/admin/products")}
            >
              Return to Products
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Get main image and gallery images
  const productImages = product.productimage || [];
  const mainImage =
    activeImage ||
    (productImages.length > 0 ? productImages[0].imageurl : null);

  // Check if product has stock
  const hasStock =
    product.productvariant?.some((v) => v.stockquantity > 0) || false;

  // Get status
  const statusInfo = getStatusLabel(product.status);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back button */}
      <div className="mb-6">
        <Button
          variant="ghost"
          className="flex items-center text-blue-600"
          onClick={() => router.push("/admin/products")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Button>
      </div>

      {/* Main product details */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images Section */}
          <div className="p-6">
            {/* Main image */}
            <div className="relative h-80 rounded-lg overflow-hidden border border-gray-200 mb-4">
              {mainImage ? (
                <Image
                  src={'/image/products/' + mainImage}
                  alt={product.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <Package className="w-12 h-12 text-gray-400" />
                  <p className="text-gray-500 ml-2">No image available</p>
                </div>
              )}
            </div>

            {/* Thumbnail gallery */}
            {productImages.length > 1 && (
              <div className="grid grid-cols-5 gap-2">
                {productImages.map((image, index) => (
                  <div
                    key={image.id}
                    className={`relative h-16 rounded border cursor-pointer 
                      ${
                        image.imageurl === activeImage
                          ? "border-blue-500 ring-2 ring-blue-200"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                    onClick={() => setActiveImage(image.imageurl)}
                  >
                    <Image
                      src={'/image/products/' + image.imageurl}
                      alt={`${product.name} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info Section */}
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {product.name}
            </h1>

            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className={statusInfo.color}>
                {statusInfo.label}
              </Badge>

              {hasStock ? (
                <Badge variant="outline" className="bg-blue-100 text-blue-800">
                  In Stock
                </Badge>
              ) : (
                <Badge variant="outline" className="bg-red-100 text-red-800">
                  Out of Stock
                </Badge>
              )}

              {product.isfeatured && (
                <Badge
                  variant="outline"
                  className="bg-purple-100 text-purple-800"
                >
                  Featured
                </Badge>
              )}
            </div>

            <div className="flex items-center mb-6">
              <span className="text-xl font-bold text-blue-600">
                ${formatCurrencyVND(product.price)}
              </span>
              {product.discountprice && (
                <span className="ml-2 text-sm text-gray-500 line-through">
                  ${formatCurrencyVND(product.discountprice)}
                </span>
              )}
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <h2 className="text-sm font-medium text-gray-600">SKU</h2>
                <p className="text-gray-800">{product.sku}</p>
              </div>

              <div>
                <h2 className="text-sm font-medium text-gray-600">
                  Description
                </h2>
                <p className="text-gray-800 whitespace-pre-line">
                  {product.description || "No description available"}
                </p>
              </div>

              {product.productcategory &&
                product.productcategory.length > 0 && (
                  <div>
                    <h2 className="text-sm font-medium text-gray-600">
                      Categories
                    </h2>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {product.productcategory.map((pc) => (
                        <Badge variant="secondary" key={pc.categoryid}>
                          {pc.category?.name || "Unknown"}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
            </div>

            <div className="flex gap-3 mt-8">
              <Button
                onClick={() => router.push(`/admin/products/edit/${slug}`)}
              >
                <Edit className="w-4 h-4 mr-2" /> Edit Product
              </Button>
              <Button variant="destructive" onClick={handleDelete}>
                <Trash2 className="w-4 h-4 mr-2" /> Delete Product
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Variants Section */}
      {product.productvariant && product.productvariant.length > 0 && (
        <Card className="mb-8">
          <CardHeader className="border-b">
            <CardTitle className="flex items-center text-lg">
              <Layers className="w-5 h-5 mr-2" /> Product Variants
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      SKU
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Color
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Size
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Stock
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {product.productvariant.map((variant) => (
                    <tr key={variant.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {variant.sku}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div
                            className="w-4 h-4 mr-2 rounded-full border border-gray-200"
                            style={{
                              backgroundColor: variant.color?.code || "#ccc",
                            }}
                          />
                          <span className="text-sm text-gray-900">
                            {variant.color?.name || "Unknown"}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {variant.size?.name || "Unknown"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        $
                        {formatCurrencyVND(
                          product.price + (variant.additionalprice || 0)
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            variant.stockquantity > 0
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {variant.stockquantity > 0
                            ? `${variant.stockquantity} in stock`
                            : "Out of stock"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Technical Info */}
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center text-lg">
            <Info className="w-5 h-5 mr-2" /> Technical Information
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">
                Product ID
              </h3>
              <p className="text-gray-800">{product.id}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Slug</h3>
              <p className="text-gray-800">{product.slug}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">
                Total Variants
              </h3>
              <p className="text-gray-800">
                {product.productvariant?.length || 0}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">
                Total Images
              </h3>
              <p className="text-gray-800">
                {product.productimage?.length || 0}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
