"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Loader2, Upload } from "lucide-react";
import { slugify } from "@/lib/utils";
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

// Form data type
interface CategoryFormData {
  name: string;
  slug: string;
  description: string;
  categorystatus: number;
  parentcategoryid: number | null;
  isshow: boolean;
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

// Fetch categories for parent selection
const fetchCategories = async () => {
  const { data } = await axios.get("/api/admin/categories");
  return data as Category[];
};

export default function EditCategoryPage() {
  const router = useRouter();
  const params = useParams();
  const categoryId = params?.id as string;
  const queryClient = useQueryClient();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [originalImage, setOriginalImage] = useState<string | null>(null);

  // React Hook Form
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CategoryFormData>({
    defaultValues: {
      name: "",
      slug: "",
      description: "",
      categorystatus: 1,
      parentcategoryid: null,
      isshow: false,
    },
  });

  // Fetch category data
  const {
    data: categoryData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["edit-category", categoryId],
    queryFn: () => fetchCategory(categoryId),
    enabled: !!categoryId,
  });

  // Fetch categories for parent dropdown
  const { data: categories = [] } = useQuery({
    queryKey: ["admin-categories"],
    queryFn: fetchCategories,
  });

  // When data is loaded, populate form
  useEffect(() => {
    if (categoryData?.data) {
      const category = categoryData.data;
      setValue("name", category.name);
      setValue("slug", category.slug || "");
      setValue("description", category.description || "");
      setValue("categorystatus", category.categorystatus);
      setValue("parentcategoryid", category.parentcategoryid);
      setValue("isshow", category.isshow);

      // Set original image if exists
      if (category.image) {
        setOriginalImage(category.image);
        setImagePreview(`/image/categories/${category.image}`);
      }
    }
  }, [categoryData, setValue]);

  // Auto-generate slug when name changes (only if slug is empty or user didn't manually edit it)
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setValue("name", newName);

    // Only auto-update slug if it's empty or hasn't been manually changed
    if (!watch("slug") || watch("slug") === slugify(watch("name"))) {
      setValue("slug", slugify(newName));
    }
  };

  // Handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
      setOriginalImage(null);

      // Create preview
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Form submission handler
  const onSubmit = async (formData: CategoryFormData) => {
    setIsSubmitting(true);

    try {
      // Prevent selecting self as parent
      if (formData.parentcategoryid === parseInt(categoryId)) {
        toast.error("Lỗi cập nhật", {
          description: "Một danh mục không thể là danh mục cha của chính nó.",
        });
        setIsSubmitting(false);
        return;
      }

      // Create FormData for file upload
      const apiFormData = new FormData();

      // Add category data
      apiFormData.append("categoryData", JSON.stringify(formData));

      // Add image if selected
      if (selectedImage) {
        apiFormData.append("image", selectedImage);
        apiFormData.append("updateImage", "true");
      } else {
        apiFormData.append("updateImage", "false");
      }

      // Add removeImage flag if original image was removed
      if (!selectedImage && !originalImage && categoryData?.data.image) {
        apiFormData.append("removeImage", "true");
      }

      // Send PUT request
      await axios.put(`/api/admin/categories/${categoryId}`, apiFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Cập nhật thành công", {
        description: "Danh mục đã được cập nhật thành công.",
      });

      // Refresh queries
      await queryClient.refetchQueries({ queryKey: ["admin-categories"] });

      // Redirect to categories page
      router.push("/admin/categories");
    } catch (error) {
      console.error("Lỗi khi cập nhật danh mục:", error);

      toast.error("Cập nhật thất bại", {
        description: axios.isAxiosError(error)
          ? error.response?.data.error || "Không thể cập nhật danh mục"
          : "Đã xảy ra lỗi khi cập nhật danh mục",
      });
    } finally {
      setIsSubmitting(false);
    }
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

  // Filter out self from parent category options to prevent circular references
  const filteredCategories = categories.filter(
    (category) => category.id !== parseInt(categoryId)
  );

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
        <h1 className="text-2xl font-bold">Chỉnh sửa danh mục</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Thông tin cơ bản</CardTitle>
                <CardDescription>
                  Cập nhật thông tin chi tiết của danh mục
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Tên danh mục</Label>
                  <Input
                    id="name"
                    {...register("name", { required: true })}
                    onChange={handleNameChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      Vui lòng nhập tên danh mục
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="slug">Đường dẫn</Label>
                  <Input id="slug" {...register("slug", { required: true })} />
                  {errors.slug && (
                    <p className="text-red-500 text-sm">
                      Vui lòng nhập đường dẫn
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Mô tả</Label>
                  <Textarea
                    id="description"
                    {...register("description")}
                    rows={5}
                    placeholder="Nhập mô tả danh mục"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="parentcategory">Danh mục cha</Label>
                  <Select
                    value={watch("parentcategoryid")?.toString() || "null"}
                    onValueChange={(value) =>
                      setValue(
                        "parentcategoryid",
                        value === "null" ? null : parseInt(value)
                      )
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn danh mục cha (nếu có)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="null">Không có</SelectItem>
                      {filteredCategories.map((category) => (
                        <SelectItem
                          key={category.id}
                          value={category.id.toString()}
                        >
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Trạng thái danh mục</CardTitle>
                <CardDescription>Quản lý trạng thái hiển thị</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="status">Trạng thái</Label>
                  <Select
                    value={watch("categorystatus").toString()}
                    onValueChange={(value) =>
                      setValue("categorystatus", parseInt(value))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn trạng thái" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Hoạt động</SelectItem>
                      <SelectItem value="0">Không hoạt động</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <Checkbox
                    id="isshow"
                    checked={watch("isshow")}
                    onCheckedChange={(checked) => setValue("isshow", !!checked)}
                  />
                  <Label htmlFor="isshow">Hiển thị trên trang chủ</Label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hình ảnh danh mục</CardTitle>
                <CardDescription>
                  {originalImage
                    ? "Hình ảnh hiện tại của danh mục"
                    : "Tải lên hình ảnh cho danh mục"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {originalImage ? (
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="text-sm font-medium mb-2">
                        Hình ảnh hiện tại:
                      </h3>
                      <div className="flex flex-col items-center">
                        {/* Large preview of current image */}
                        <div className="relative h-60 w-full mb-2 rounded-md overflow-hidden border border-gray-200">
                          {/* Use next/image for optimized loading but with unoptimized option for direct viewing */}
                          <Image
                            src={`/image/categories/${originalImage}`}
                            alt="Current category image"
                            fill
                            unoptimized
                            className="object-contain"
                            onClick={() =>
                              window.open(
                                `/image/categories/${originalImage}`,
                                "_blank"
                              )
                            }
                            style={{ cursor: "zoom-in" }}
                          />
                        </div>

                        {/* Image details */}
                        <div className="w-full mt-2 text-center">
                          <p className="text-xs text-gray-500 break-all mb-1">
                            {originalImage}
                          </p>
                          <div className="flex justify-center gap-2 mt-2">
                            <button
                              type="button"
                              className="text-xs text-blue-600 hover:underline"
                              onClick={() =>
                                window.open(
                                  `/image/categories/${originalImage}`,
                                  "_blank"
                                )
                              }
                            >
                              Xem ảnh đầy đủ
                            </button>
                            <span className="text-gray-400">|</span>
                            <button
                              type="button"
                              className="text-xs text-red-600 hover:underline"
                              onClick={() => {
                                setSelectedImage(null);
                                setImagePreview(null);
                                setOriginalImage(null);
                              }}
                            >
                              Xóa ảnh này
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Image upload controls */}
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="image-upload">Thay đổi hình ảnh:</Label>
                      <div className="flex items-center justify-center border-2 border-dashed border-gray-300 p-4 rounded-md">
                        <label
                          htmlFor="image-upload"
                          className="cursor-pointer text-center w-full"
                        >
                          {selectedImage ? (
                            <div className="flex flex-col items-center">
                              <div className="relative h-40 w-40 mb-2 overflow-hidden rounded-md border border-gray-200">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={imagePreview || undefined}
                                  alt="New image preview"
                                  className="h-full w-full object-contain"
                                />
                              </div>
                              <p className="text-sm text-blue-500">
                                Nhấp để chọn ảnh khác
                              </p>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center p-4">
                              <Upload className="h-10 w-10 text-gray-400 mb-2" />
                              <p className="text-sm text-gray-500">
                                Kéo thả hoặc click để tải ảnh mới
                              </p>
                            </div>
                          )}
                          <input
                            id="image-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                          />
                        </label>
                      </div>
                      {selectedImage && (
                        <div className="flex gap-2">
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setSelectedImage(null);
                              setImagePreview(
                                `/image/categories/${originalImage}?t=${Date.now()}`
                              );
                            }}
                          >
                            Hủy thay đổi
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  // No image - show upload prompt
                  <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 p-8 rounded-md">
                    <label
                      htmlFor="image-upload"
                      className="cursor-pointer text-center w-full"
                    >
                      <div className="flex flex-col items-center p-4">
                        <Upload className="h-12 w-12 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500">
                          Kéo thả hoặc click để tải ảnh lên
                        </p>
                        <p className="text-xs text-gray-400 mt-2">
                          Hình ảnh tối ưu cho danh mục có kích thước 500x500
                          pixels
                        </p>
                      </div>
                      <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                      />
                    </label>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="flex flex-col gap-4 mt-6">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Cập nhật danh mục
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/admin/categories")}
              >
                Hủy bỏ
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
