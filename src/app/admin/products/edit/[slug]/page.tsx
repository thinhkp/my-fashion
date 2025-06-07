"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Product } from "@/types/model";
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
import { ArrowLeft, Loader2 } from "lucide-react";
import { toast } from "sonner";

// API response type
interface ProductResponse {
  data: Product;
  message: string;
  error?: string;
}

// Form data type
interface ProductFormData {
  name: string;
  slug: string;
  description: string;
  sku: string;
  price: number;
  discountprice: number;
  status: number;
  isfeatured: boolean;
}

// Fetch product data
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

export default function EditProduct() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug as string;
  const queryClient = useQueryClient();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // React Hook Form
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ProductFormData>({
    defaultValues: {
      name: "",
      slug: "",
      description: "",
      sku: "",
      price: 0,
      discountprice: 0,
      status: 1,
      isfeatured: false,
    },
  });

  // Fetch product data
  const { data, error, isLoading } = useQuery({
    queryKey: ["edit-product", slug],
    queryFn: () => fetchProduct(slug),
    enabled: !!slug,
  });

  // When data is loaded, populate form
  useEffect(() => {
    if (data?.data) {
      const product = data.data;
      setValue("name", product.name);
      setValue("slug", product.slug);
      setValue("description", product.description || "");
      setValue("sku", product.sku);
      // Use the actual price without division
      setValue("price", product.price);
      setValue("discountprice", product.discountprice || 0);
      setValue("status", product.status);
      setValue("isfeatured", product.isfeatured);
    }
  }, [data, setValue]);

  // Form submission handler
  const onSubmit = async (formData: ProductFormData) => {
    setIsSubmitting(true);

    try {
      // Use prices directly without converting to cents
      const apiData = {
        ...formData,
        price: formData.price,
        discountprice: formData.discountprice || null,
      };

      const response = await axios.put(`/api/products/${slug}`, apiData);

      toast.success("Cập nhật thành công", {
        description: "Sản phẩm đã được cập nhật thành công.",
      });

      await queryClient.refetchQueries({ queryKey: ["product", slug] });

      // Redirect to product detail page
      router.push(`/admin/products/detail/${response.data.data.slug}`);
    } catch (error) {
      console.error("Lỗi cập nhật sản phẩm:", error);

      toast.error("Cập nhật thất bại", {
        description: axios.isAxiosError(error)
          ? error.response?.data.error || "Không thể cập nhật sản phẩm"
          : "Đã xảy ra lỗi khi cập nhật sản phẩm",
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
        <p className="mt-4 text-gray-500">Đang tải thông tin sản phẩm...</p>
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
              : "Đã xảy ra lỗi khi tải thông tin sản phẩm."}
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => router.push("/admin/products")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại danh sách sản phẩm
          </Button>
        </div>
      </div>
    );
  }

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
        <h1 className="text-2xl font-bold">Chỉnh sửa sản phẩm</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main product info */}
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Thông tin cơ bản</CardTitle>
                <CardDescription>
                  Cập nhật thông tin chi tiết của sản phẩm
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Tên sản phẩm</Label>
                  <Input id="name" {...register("name", { required: true })} />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      Vui lòng nhập tên sản phẩm
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
                  <Label htmlFor="sku">Mã sản phẩm (SKU)</Label>
                  <Input
                    id="sku"
                    {...register("sku", {
                      required: "Mã sản phẩm là bắt buộc",
                    })}
                  />
                  {errors.sku && (
                    <p className="text-red-500 text-sm">
                      Vui lòng nhập mã sản phẩm
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Pricing */}
            <Card>
              <CardHeader>
                <CardTitle>Giá sản phẩm</CardTitle>
                <CardDescription>Thiết lập giá cho sản phẩm</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Giá bán (VNĐ)</Label>
                  <Input
                    id="price"
                    type="number"
                    min="0"
                    {...register("price", {
                      required: true,
                      min: 0,
                      valueAsNumber: true,
                    })}
                  />
                  {errors.price && (
                    <p className="text-red-500 text-sm">
                      Vui lòng nhập giá hợp lệ
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="discountprice">Giá khuyến mãi (VNĐ)</Label>
                  <Input
                    id="discountprice"
                    type="number"
                    min="0"
                    {...register("discountprice", {
                      min: 0,
                      valueAsNumber: true,
                    })}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Trạng thái sản phẩm</CardTitle>
                <CardDescription>Quản lý trạng thái hiển thị</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="status">Trạng thái</Label>
                  <Select
                    value={watch("status").toString()}
                    onValueChange={(value) =>
                      setValue("status", parseInt(value))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn trạng thái" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Đang kinh doanh</SelectItem>
                      <SelectItem value="2">Bản nháp</SelectItem>
                      <SelectItem value="0">Ngừng kinh doanh</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <Checkbox
                    id="isfeatured"
                    checked={watch("isfeatured")}
                    onCheckedChange={(checked) =>
                      setValue("isfeatured", !!checked)
                    }
                  />
                  <Label htmlFor="isfeatured">Sản phẩm nổi bật</Label>
                </div>
              </CardContent>
            </Card>

            {/* Note: Add sections for categories, images, and variants here */}
            <div className="flex flex-col gap-4 mt-6">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Lưu thay đổi
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push(`/admin/products/detail/${slug}`)}
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
