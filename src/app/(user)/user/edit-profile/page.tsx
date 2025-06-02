"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import useUserInfo from "@/hooks/use-userinfo";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, Save, ArrowLeft } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

// Form schema for user profile
const userProfileSchema = z.object({
  displayname: z
    .string()
    .min(2, { message: "Tên hiển thị phải có ít nhất 2 ký tự" })
    .max(50, { message: "Tên hiển thị không được vượt quá 50 ký tự" }),
  phone: z
    .string()
    .min(10, { message: "Số điện thoại phải có ít nhất 10 số" })
    .max(15, { message: "Số điện thoại không được vượt quá 15 số" })
    .optional()
    .or(z.literal("")),
  address: z
    .string()
    .max(200, { message: "Địa chỉ không được vượt quá 200 ký tự" })
    .optional()
    .or(z.literal("")),
});

type UserProfileFormValues = z.infer<typeof userProfileSchema>;

// Function to update user profile
const updateProfile = async (data: UserProfileFormValues) => {
  const response = await axios.patch("/api/auth/me", data);
  return response.data;
};

export default function EditProfilePage() {
  const router = useRouter();
  const { data: userData, isLoading, refetch } = useUserInfo();

  // Set up the form
  const form = useForm<UserProfileFormValues>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: {
      displayname: "",
      phone: "",
      address: "",
    },
  });

  // Update form when user data is loaded
  useEffect(() => {
    if (userData) {
      form.reset({
        displayname: userData.displayname || "",
        phone: userData.phone || "",
        address: userData.address || "",
      });
    }
  }, [userData, form]);

  // Set up mutation for updating profile
  const mutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      toast.success("Cập nhật thông tin thành công");
      refetch(); // Refresh user data
      router.push("/user/profile");
    },
    onError: (error) => {
      console.error("Update error:", error);
      toast.error("Không thể cập nhật thông tin. Vui lòng thử lại sau.");
    },
  });

  // Handle form submission
  const onSubmit = (data: UserProfileFormValues) => {
    mutation.mutate(data);
  };

  if (isLoading) {
    return <EditProfileSkeleton />;
  }

  if (!userData) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">
          Không thể tải thông tin người dùng. Vui lòng thử lại sau.
        </p>
        <Button className="mt-4" onClick={() => router.refresh()}>
          Tải lại
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center mb-6">
        <Button
          variant="ghost"
          className="mr-4 p-0 h-auto"
          onClick={() => router.push("/user/profile")}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
            Chỉnh sửa thông tin cá nhân
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Cập nhật thông tin của bạn
          </p>
        </div>
      </div>

      <Separator className="my-4 sm:my-6" />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {/* Email field (read-only) */}
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Email
              </label>
              <Input
                value={userData.email || ""}
                disabled
                className="bg-gray-50"
              />
              <p className="text-xs text-muted-foreground">
                Email không thể thay đổi và được sử dụng để đăng nhập
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Display name field */}
              <FormField
                control={form.control}
                name="displayname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tên hiển thị</FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập tên hiển thị" {...field} />
                    </FormControl>
                    <FormDescription>
                      Tên sẽ hiển thị trong đơn hàng và trên trang web
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone field */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Số điện thoại</FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập số điện thoại" {...field} />
                    </FormControl>
                    <FormDescription>
                      Số điện thoại liên hệ khi giao hàng
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Address field */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Địa chỉ</FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập địa chỉ giao hàng" {...field} />
                  </FormControl>
                  <FormDescription>
                    Địa chỉ mặc định để giao hàng
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:justify-end pt-2">
            <Button
              type="button"
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => router.push("/user/profile")}
            >
              Hủy
            </Button>
            <Button
              type="submit"
              className="w-full sm:w-auto"
              disabled={mutation.isPending || !form.formState.isDirty}
            >
              {mutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Đang lưu...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Lưu thay đổi
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

function EditProfileSkeleton() {
  return (
    <div>
      <div className="flex items-center mb-6">
        <Skeleton className="h-5 w-5 mr-4" />
        <div>
          <Skeleton className="h-7 w-48 mb-2" />
          <Skeleton className="h-4 w-40" />
        </div>
      </div>

      <Separator className="my-6" />

      <div className="space-y-6">
        <div className="space-y-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-3 w-3/4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-3 w-3/4" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-3 w-3/4" />
          </div>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-3 w-3/4" />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:justify-end pt-2">
          <Skeleton className="h-10 w-full sm:w-24" />
          <Skeleton className="h-10 w-full sm:w-36" />
        </div>
      </div>
    </div>
  );
}
