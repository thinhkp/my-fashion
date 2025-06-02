"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
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
import { Loader2, Save, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Form schema for changing password
const passwordChangeSchema = z
  .object({
    currentPassword: z
      .string()
      .min(6, { message: "Mật khẩu hiện tại phải có ít nhất 6 ký tự" }),
    newPassword: z
      .string()
      .min(8, { message: "Mật khẩu mới phải có ít nhất 8 ký tự" })
      .regex(/[A-Z]/, { message: "Mật khẩu phải có ít nhất 1 chữ hoa" })
      .regex(/[a-z]/, { message: "Mật khẩu phải có ít nhất 1 chữ thường" })
      .regex(/[0-9]/, { message: "Mật khẩu phải có ít nhất 1 số" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Mật khẩu xác nhận không khớp",
    path: ["confirmPassword"],
  });

type PasswordChangeFormValues = z.infer<typeof passwordChangeSchema>;

// Function to update password
const changePassword = async (data: PasswordChangeFormValues) => {
  const response = await axios.patch("/api/auth/me", data);
  return response.data;
};

export default function ChangePasswordPage() {
  const router = useRouter();
  const { data: user, isLoading } = useUserInfo();
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Set up the form
  const form = useForm<PasswordChangeFormValues>({
    resolver: zodResolver(passwordChangeSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  // Set up mutation for changing password
  const mutation = useMutation({
    mutationFn: changePassword,
    onSuccess: () => {
      toast.success("Đổi mật khẩu thành công");
      form.reset();
      router.push("/user/profile");
    },
    onError: (error: AxiosError) => {
      console.error("Change password error:", error);
      const errorData = error.response?.data as { error?: string } | undefined;
      if (errorData && errorData.error === "incorrect_password") {
        toast.error("Mật khẩu hiện tại không chính xác");
        form.setError("currentPassword", {
          type: "manual",
          message: "Mật khẩu hiện tại không chính xác",
        });
      } else {
        toast.error("Không thể đổi mật khẩu. Vui lòng thử lại sau.");
      }
    },
  });

  // Handle form submission
  const onSubmit = (data: PasswordChangeFormValues) => {
    mutation.mutate(data);
  };

  if (isLoading) {
    return <ChangePasswordSkeleton />;
  }

  if (!user) {
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
            Đổi mật khẩu
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Cập nhật mật khẩu tài khoản của bạn
          </p>
        </div>
      </div>

      <Separator className="my-4 sm:my-6" />

      <Alert className="mb-6 bg-amber-50 text-amber-800 border-amber-200">
        <AlertTitle className="text-amber-800">Lưu ý</AlertTitle>
        <AlertDescription className="text-amber-700">
          Mật khẩu mới phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường và
          số. Sau khi đổi mật khẩu, bạn sẽ cần đăng nhập lại.
        </AlertDescription>
      </Alert>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 max-w-md">
            {/* Current Password field */}
            <FormField
              control={form.control}
              name="currentPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mật khẩu hiện tại</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        placeholder="Nhập mật khẩu hiện tại"
                        type={showCurrentPassword ? "text" : "password"}
                        {...field}
                      />
                    </FormControl>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() =>
                        setShowCurrentPassword(!showCurrentPassword)
                      }
                    >
                      {showCurrentPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* New Password field */}
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mật khẩu mới</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        placeholder="Nhập mật khẩu mới"
                        type={showNewPassword ? "text" : "password"}
                        {...field}
                      />
                    </FormControl>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <FormDescription>
                    Mật khẩu mới phải có ít nhất 8 ký tự, 1 chữ hoa, 1 chữ
                    thường và 1 số
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password field */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Xác nhận mật khẩu mới</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        placeholder="Nhập lại mật khẩu mới"
                        type={showConfirmPassword ? "text" : "password"}
                        {...field}
                      />
                    </FormControl>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:justify-start pt-2">
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
              disabled={mutation.isPending}
            >
              {mutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Đang xử lý...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Đổi mật khẩu
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

function ChangePasswordSkeleton() {
  return (
    <div>
      <div className="flex items-center mb-6">
        <Skeleton className="h-5 w-5 mr-4" />
        <div>
          <Skeleton className="h-7 w-48 mb-2" />
          <Skeleton className="h-4 w-64" />
        </div>
      </div>

      <Separator className="my-6" />

      <Skeleton className="h-20 w-full mb-6" />

      <div className="space-y-6 max-w-md">
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-3 w-3/4" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-3/4" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-3 w-3/4" />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:justify-start pt-2">
          <Skeleton className="h-10 w-full sm:w-24" />
          <Skeleton className="h-10 w-full sm:w-36" />
        </div>
      </div>
    </div>
  );
}
