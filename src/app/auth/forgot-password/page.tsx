"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, AlertCircle } from "lucide-react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { z } from "zod";

const emailSchema = z.object({
  email: z.string().email("Email không hợp lệ"),
});

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState("");

  const forgotPasswordMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await axios.post("/api/auth/forgot-password", {
        email: email,
      });
      return response.data;
    },
    onSuccess:  () => {
      setIsSubmitted(true);
    },
    
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError("");

    // Validate email với Zod
    const validationResult = emailSchema.safeParse({ email });
    console.log(!validationResult.success);

    if (!validationResult.success) {
      setValidationError(validationResult.error.errors[0].message);
      return;
    }

    forgotPasswordMutation.mutate(email);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-6 sm:space-y-8 bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 sm:h-16 sm:w-16 bg-green-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Kiểm tra email của bạn
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-2">
              Chúng tôi đã gửi hướng dẫn đặt lại mật khẩu đến email {email}
            </p>
            <Link
              href="/auth/login"
              className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium text-sm sm:text-base"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Quay lại đăng nhập
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
            Quên mật khẩu?
          </h1>
          <p className="text-sm sm:text-base text-gray-600 px-2">
            Nhập email của bạn và chúng tôi sẽ gửi hướng dẫn đặt lại mật khẩu
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {(forgotPasswordMutation.error || validationError) && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {validationError ||
                  //  eslint-disable-next-line 
                  (forgotPasswordMutation.error as any)?.response?.data
                    ?.message ||
                  "Có lỗi xảy ra, vui lòng thử lại"}
              </AlertDescription>
            </Alert>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Địa chỉ email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                placeholder="Nhập email của bạn"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={forgotPasswordMutation.isPending}
            className="w-full bg-red-500 text-white py-2.5 sm:py-3 px-4 rounded-lg font-medium hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm sm:text-base"
          >
            {forgotPasswordMutation.isPending ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                Đang gửi...
              </div>
            ) : (
              "Gửi hướng dẫn"
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
