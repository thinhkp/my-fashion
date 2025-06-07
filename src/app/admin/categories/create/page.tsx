"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
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

// Category interface
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

// Form data type
interface CategoryFormData {
  name: string;
  slug: string;
  description: string;
  categorystatus: number;
  parentcategoryid: number | null;
  isshow: boolean;
}

// Fetch categories for parent selection
const fetchCategories = async () => {
  const { data } = await axios.get("/api/admin/categories");
  return data as Category[];
};

export default function CreateCategoryPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

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

  // Watch name for slug generation

  // Fetch categories for parent dropdown
  const { data: categories = [] } = useQuery({
    queryKey: ["admin-categories"],
    queryFn: fetchCategories,
  });

  // Auto-generate slug when name changes
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setValue("name", name);
    setValue("slug", slugify(name));
  };

  // Handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);

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
      // Create FormData for file upload
      const apiFormData = new FormData();

      // Add category data
      apiFormData.append("categoryData", JSON.stringify(formData));

      // Add image if selected
      if (selectedImage) {
        apiFormData.append("image", selectedImage);
      }

      // Send POST request
      await axios.post("/api/admin/categories", apiFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Tạo danh mục thành công", {
        description: "Danh mục mới đã được tạo thành công.",
      });

      // Redirect to categories page
      router.push("/admin/categories");
    } catch (error) {
      console.error("Lỗi khi tạo danh mục:", error);

      toast.error("Tạo danh mục thất bại", {
        description: axios.isAxiosError(error)
          ? error.response?.data.error || "Không thể tạo danh mục"
          : "Đã xảy ra lỗi khi tạo danh mục",
      });
    } finally {
      setIsSubmitting(false);
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
        <h1 className="text-2xl font-bold">Tạo danh mục mới</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Thông tin cơ bản</CardTitle>
                <CardDescription>
                  Nhập thông tin chi tiết của danh mục
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
                      {categories.map((category) => (
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

            {/* Enhance the image upload section with better UI */}
            <Card>
              <CardHeader>
                <CardTitle>Hình ảnh danh mục</CardTitle>
                <CardDescription>Tải lên hình ảnh cho danh mục</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="image">Chọn hình ảnh</Label>
                  <div className="flex items-center justify-center border-2 border-dashed border-gray-300 p-4 rounded-md">
                    <label
                      htmlFor="image-upload"
                      className="cursor-pointer text-center w-full"
                    >
                      {imagePreview ? (
                        <div className="flex flex-col items-center">
                          <div className="relative h-60 w-60 mb-2 overflow-hidden rounded-md border border-gray-200">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={imagePreview}
                              alt="Preview"
                              className="h-full w-full object-contain"
                            />
                          </div>
                          <p className="text-sm text-blue-500 mt-2 hover:underline">
                            Nhấp để thay đổi ảnh
                          </p>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center p-4">
                          <Upload className="h-12 w-12 text-gray-400 mb-2" />
                          <p className="text-sm text-gray-500">
                            Kéo thả hoặc click để tải ảnh lên
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
                  {imagePreview && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSelectedImage(null);
                        setImagePreview(null);
                      }}
                      className="mt-2"
                    >
                      Xóa ảnh
                    </Button>
                  )}
                  <p className="text-xs text-gray-500 mt-2">
                    Hình ảnh tối ưu cho danh mục có kích thước 500x500 pixels,
                    định dạng JPG, PNG hoặc WebP.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col gap-4 mt-6">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Tạo danh mục
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
