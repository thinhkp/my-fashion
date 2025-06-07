"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Lock,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { z } from "zod";
import { useSearchParams } from "next/navigation";

const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
      .regex(/[A-Z]/, "Mật khẩu phải có ít nhất 1 chữ hoa")
      .regex(/[a-z]/, "Mật khẩu phải có ít nhất 1 chữ thường")
      .regex(/[0-9]/, "Mật khẩu phải có ít nhất 1 số"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu không trùng khớp",
    path: ["confirmPassword"],
  });

function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});

  // Check if token exists
  useEffect(() => {
    if (!token) {
      // Redirect to forgot password if no token
      window.location.href = "/auth/forgot-password";
    }
  }, [token]);

  const resetPasswordMutation = useMutation({
    mutationFn: async (data: { token: string; password: string }) => {
      const response = await axios.post("/api/auth/reset-password", data);
      return response.data;
    },
    onSuccess: () => {
      setIsCompleted(true);
    },
   
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationErrors({});

    // Validate with Zod
    const validationResult = resetPasswordSchema.safeParse({
      password,
      confirmPassword,
    });

    if (!validationResult.success) {
      const errors: Record<string, string> = {};
      validationResult.error.errors.forEach((error) => {
        if (error.path[0]) {
          errors[error.path[0] as string] = error.message;
        }
      });
      setValidationErrors(errors);
      return;
    }

    if (!token) {
      return;
    }

    resetPasswordMutation.mutate({
      token,
      password,
    });
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-6 sm:space-y-8 bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 sm:h-16 sm:w-16 bg-green-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Đặt lại mật khẩu thành công!
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-2">
              Mật khẩu của bạn đã được cập nhật thành công. Bạn có thể đăng nhập
              với mật khẩu mới.
            </p>
            <Link
              href="/auth/login"
              className="inline-flex items-center bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition-all text-sm sm:text-base"
            >
              Đăng nhập ngay
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6 sm:space-y-8 bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Đặt lại mật khẩu
          </h1>
          <p className="text-sm sm:text-base text-gray-600 px-2">
            Nhập mật khẩu mới cho tài khoản của bạn
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {resetPasswordMutation.error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                
                {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (resetPasswordMutation.error as any)?.response?.data
                  ?.message || "Có lỗi xảy ra, vui lòng thử lại"}
              </AlertDescription>
            </Alert>
          )}

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Mật khẩu mới
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 sm:pl-10 pr-12 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                placeholder="Nhập mật khẩu mới"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 sm:h-5 sm:w-5" />
                ) : (
                  <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
                )}
              </button>
            </div>
            {validationErrors.password && (
              <p className="mt-1 text-sm text-red-600">
                {validationErrors.password}
              </p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Xác nhận mật khẩu
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-9 sm:pl-10 pr-12 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                placeholder="Nhập lại mật khẩu mới"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4 sm:h-5 sm:w-5" />
                ) : (
                  <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
                )}
              </button>
            </div>
            {validationErrors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">
                {validationErrors.confirmPassword}
              </p>
            )}
          </div>

          {/* Password Requirements */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Yêu cầu mật khẩu:
            </p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                Ít nhất 8 ký tự
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                Ít nhất 1 chữ hoa (A-Z)
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                Ít nhất 1 chữ thường (a-z)
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                Ít nhất 1 chữ số (0-9)
              </li>
            </ul>
          </div>

          <button
            type="submit"
            disabled={resetPasswordMutation.isPending}
            className="w-full bg-red-500 text-white py-2.5 sm:py-3 px-4 rounded-lg font-medium hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm sm:text-base"
          >
            {resetPasswordMutation.isPending ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                Đang xử lý...
              </div>
            ) : (
              "Cập nhật mật khẩu"
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center space-y-3 sm:space-y-4">
          <Link
            href="/auth/login"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại đăng nhập
          </Link>

          <p className="text-gray-600 text-sm sm:text-base">
            Chưa có tài khoản?{" "}
            <Link
              href="/auth/register"
              className="text-pink-600 hover:text-pink-700 font-medium"
            >
              Đăng ký ngay
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto"></div>
            <p className="mt-2 text-gray-600">Đang tải...</p>
          </div>
        </div>
      }
    >
      <ResetPasswordForm />
    </Suspense>
  );
}
