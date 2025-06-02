"use client";

import React, { Suspense, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

// Validation schemas
const loginSchema = z.object({
  username: z
    .string()
    .min(3, "Tên đăng nhập phải có ít nhất 3 ký tự")
    .max(50, "Tên đăng nhập không được vượt quá 50 ký tự"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, "Tên đăng nhập phải có ít nhất 3 ký tự")
      .max(50, "Tên đăng nhập không được vượt quá 50 ký tự")
      .refine((val) => /^[a-zA-Z0-9_]+$/.test(val), {
        message: "Tên đăng nhập chỉ chấp nhận chữ cái, số và dấu gạch dưới",
      }),
    email: z.string().email("Email không hợp lệ"),
    password: z
      .string()
      .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
      .refine((val) => /[A-Z]/.test(val), {
        message: "Mật khẩu phải có ít nhất 1 chữ hoa",
      })
      .refine((val) => /[0-9]/.test(val), {
        message: "Mật khẩu phải có ít nhất 1 chữ số",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu không trùng khớp",
    path: ["confirmPassword"],
  });

type LoginFormValues = z.infer<typeof loginSchema>;
type RegisterFormValues = z.infer<typeof registerSchema>;

type AuthFormProps = {
  initialTab: "login" | "register";
};

const AuthForm = ({ initialTab }: AuthFormProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get("returnUrl") || "/user/profile";
  const [activeTab, setActiveTab] = useState<"login" | "register">(initialTab);

  // Login form với validation
  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // Register form với validation
  const registerForm = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: async (credentials: LoginFormValues) => {
      try {
        const response = await axios.post("/api/auth/login", credentials);
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw new Error(
            error.response?.data?.message || "Đăng nhập thất bại"
          );
        }
        throw error;
      }
    },
    onSuccess: () => {
      toast.success("Đăng nhập thành công");
      // Redirect to the return URL from query string
      router.push(returnUrl);
    },
    onError: (error: Error) => {
      toast.error(error.message || "Đăng nhập thất bại");
    },
  });

  // Register mutation
  const registerMutation = useMutation({
    mutationFn: async (
      userData: Omit<RegisterFormValues, "confirmPassword">
    ) => {
      try {
        const response = await axios.post("/api/auth/register", userData);
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw new Error(error.response?.data?.message || "Đăng ký thất bại");
        }
        throw error;
      }
    },
    onSuccess: () => {
      toast.success("Đăng ký thành công! Vui lòng đăng nhập.");
      handleTabChange("login");
      registerForm.reset();
    },
    onError: (error: Error) => {
      toast.error(error.message || "Đăng ký thất bại");
    },
  });

  // Xử lý khi tab thay đổi
  const handleTabChange = (tab: "login" | "register") => {
    setActiveTab(tab);
    // Thay đổi route
    router.replace(`/auth/${tab}`);
  };

  // Handle form submissions
  const onLoginSubmit = (values: LoginFormValues) => {
    loginMutation.mutate(values);
  };

  const onRegisterSubmit = (values: RegisterFormValues) => {
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...registerData } = values;
    registerMutation.mutate(registerData);
  };

  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Đang tải...</p>
        </div>
      </div>
    }>
      {/* Logo */}
      <div className="text-center mb-8">
        <Link href="/" className="inline-block">
          <Image
            src="/image/logo.webp"
            alt="My Fashion"
            width={180}
            height={45}
            className="h-auto"
          />
        </Link>
      </div>

      {/* Login/Register Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={(value) =>
          handleTabChange(value as "login" | "register")
        }
        className="w-full"
      >
        <TabsList className="grid h-auto w-full grid-cols-2 mb-8">
          <TabsTrigger value="login" className="text-lg py-3">
            Đăng nhập
          </TabsTrigger>
          <TabsTrigger value="register" className="text-lg py-3">
            Đăng ký
          </TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <Form {...loginForm}>
            <form
              onSubmit={loginForm.handleSubmit(onLoginSubmit)}
              className="space-y-6"
            >
              <div className="space-y-4">
                <FormField
                  control={loginForm.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Vui lòng nhập tên đăng nhập"
                          className="h-12 bg-gray-100 border-none"
                          disabled={loginMutation.isPending}
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={loginForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          type="password"
                          placeholder="Vui lòng nhập mật khẩu"
                          className="h-12 bg-gray-100 border-none"
                          disabled={loginMutation.isPending}
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="text-xs text-gray-500">
                <p>
                  This site is protected by reCAPTCHA and the Google{" "}
                  <a href="#" className="text-blue-500">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-500">
                    Terms of Service
                  </a>{" "}
                  apply.
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white h-12 text-lg"
                disabled={loginMutation.isPending}
              >
                {loginMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ĐANG XỬ LÝ...
                  </>
                ) : (
                  "ĐĂNG NHẬP"
                )}
              </Button>

              <div className="flex flex-col space-y-2 text-center text-sm">
                <p>
                  Bạn chưa có tài khoản?{" "}
                  <button
                    type="button"
                    className="text-blue-500 hover:underline"
                    onClick={() => handleTabChange("register")}
                  >
                    Đăng ký
                  </button>
                </p>
                <p>
                  Bạn quên mật khẩu?{" "}
                  <Link
                    href="/forgot-password"
                    className="text-blue-500 hover:underline"
                  >
                    Quên mật khẩu?
                  </Link>
                </p>
              </div>
            </form>
          </Form>
        </TabsContent>

        <TabsContent value="register">
          <Form {...registerForm}>
            <form
              onSubmit={registerForm.handleSubmit(onRegisterSubmit)}
              className="space-y-6"
            >
              <div className="space-y-4">
                <FormField
                  control={registerForm.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Vui lòng nhập tên đăng nhập"
                          className="h-12 bg-gray-100 border-none"
                          disabled={registerMutation.isPending}
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={registerForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="Vui lòng nhập email của bạn"
                          className="h-12 bg-gray-100 border-none"
                          disabled={registerMutation.isPending}
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={registerForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          type="password"
                          placeholder="Vui lòng nhập mật khẩu"
                          className="h-12 bg-gray-100 border-none"
                          disabled={registerMutation.isPending}
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={registerForm.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          type="password"
                          placeholder="Xác nhận mật khẩu"
                          className="h-12 bg-gray-100 border-none"
                          disabled={registerMutation.isPending}
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="text-xs text-gray-500">
                <p>
                  This site is protected by reCAPTCHA and the Google{" "}
                  <a href="#" className="text-blue-500">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-500">
                    Terms of Service
                  </a>{" "}
                  apply.
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white h-12 text-lg"
                disabled={registerMutation.isPending}
              >
                {registerMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ĐANG XỬ LÝ...
                  </>
                ) : (
                  "ĐĂNG KÝ"
                )}
              </Button>

              <div className="flex flex-col space-y-2 text-center text-sm">
                <p>
                  Bạn đã có tài khoản?{" "}
                  <button
                    type="button"
                    className="text-blue-500 hover:underline"
                    onClick={() => handleTabChange("login")}
                  >
                    Đăng nhập
                  </button>
                </p>
              </div>
            </form>
          </Form>
        </TabsContent>
      </Tabs>
    </Suspense>
  );
};

export default AuthForm;
