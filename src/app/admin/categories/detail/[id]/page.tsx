"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, Loader2, Edit } from "lucide-react";
import Image from "next/image";

// Category interfaces
interface Category {
  id: number;
  name: string;
  description: string | null;
  categorystatus: number;
  image: string | null;
  slug: string | null;
  parentcategoryid: number | null;
  isshow: boolean;
}

interface CategoryResponse {
  data: Category;
  message: string;
  error?: string;
}

// Fetch category data
const fetchCategory = async (id: string): Promise<CategoryResponse> => {
  try {
    const response = await axios.get(`/api/admin/categories/${id}`, {
      headers: {
        "Cache-Control": "no-cache",
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || "Failed to fetch category");
    }
    throw new Error("Failed to fetch category");
  }
};

// Helper function to get status text
const getCategoryStatusText = (status: number): string => {
  switch (status) {
    case 1:
      return "Hoạt động";
    case 0:
      return "Không hoạt động";
    default:
      return "Không xác định";
  }
};

export default function CategoryDetailPage() {
  const router = useRouter();
  const params = useParams();
  const categoryId = params?.id as string;
  const [imageError, setImageError] = useState(false);

  // Fetch category data
  const {
    data: categoryData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["category-detail", categoryId],
    queryFn: () => fetchCategory(categoryId),
    enabled: !!categoryId,
  });

  // Handle edit button click
  const handleEdit = () => {
    router.push(`/admin/categories/edit/${categoryId}`);
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="mt-4 text-gray-500">Đang tải thông tin danh mục...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-red-700 mb-2">Lỗi</h2>
          <p className="text-gray-700">
            {error instanceof Error
              ? error.message
              : "Đã xảy ra lỗi khi tải thông tin danh mục."}
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => router.push("/admin/categories")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại danh sách danh mục
          </Button>
        </div>
      </div>
    );
  }

  const category = categoryData?.data;

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-yellow-700 mb-2">
            Không tìm thấy
          </h2>
          <p className="text-gray-700">Không tìm thấy thông tin danh mục.</p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => router.push("/admin/categories")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại danh sách danh mục
          </Button>
        </div>
      </div>
    );
  }

  // For the full-sized image display
  const handleImageClick = () => {
    if (category.image) {
      window.open(`/image/categories/${category.image}`, "_blank");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex justify-between items-center">
        <Button
          variant="ghost"
          className="flex items-center text-blue-600"
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Quay lại
        </Button>
        <h1 className="text-2xl font-bold">Chi tiết danh mục</h1>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex items-center"
            onClick={handleEdit}
          >
            <Edit className="h-4 w-4 mr-2" />
            Chỉnh sửa
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Thông tin cơ bản</CardTitle>
              <CardDescription>Chi tiết của danh mục</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">ID</h3>
                  <p className="mt-1">{category.id}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Tên danh mục
                  </h3>
                  <p className="mt-1 font-medium">{category.name}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Slug</h3>
                  <p className="mt-1">{category.slug || "Chưa có"}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Trạng thái
                  </h3>
                  <p className="mt-1">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        category.categorystatus === 1
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {getCategoryStatusText(category.categorystatus)}
                    </span>
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Hiển thị trên trang chủ
                  </h3>
                  <p className="mt-1">{category.isshow ? "Có" : "Không"}</p>
                </div>
              </div>

              {category.description && (
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-500">Mô tả</h3>
                  <p className="mt-1 text-gray-700">{category.description}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - Image */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Hình ảnh danh mục</CardTitle>
              <CardDescription>Xem hình ảnh đại diện</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {category.image ? (
                <div className="flex flex-col items-center">
                  <div
                    className="relative w-full h-72 rounded-md overflow-hidden border border-gray-200 cursor-zoom-in"
                    onClick={handleImageClick}
                  >
                    {imageError ? (
                      <div className="flex items-center justify-center h-full bg-gray-100">
                        <p className="text-gray-500 text-sm">
                          Không thể tải ảnh
                        </p>
                      </div>
                    ) : (
                      <Image
                        src={`/image/categories/${
                          category.image
                        }?t=${Date.now()}`}
                        alt={category.name}
                        fill
                        className="object-contain"
                        unoptimized
                        onError={() => setImageError(true)}
                      />
                    )}
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-xs text-gray-500 break-all">
                      {category.image}
                    </p>
                    <Button
                      variant="link"
                      className="mt-1 p-0 h-auto text-blue-600 text-sm"
                      onClick={handleImageClick}
                    >
                      Xem ảnh gốc
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-md">
                  <p className="text-gray-500">Danh mục này không có ảnh</p>
                  <Button variant="link" className="mt-2" onClick={handleEdit}>
                    Thêm ảnh
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
