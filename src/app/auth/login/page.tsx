import { Metadata } from "next";
import AuthForm from "../auth-form";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Đăng nhập | My Fashion",
  description: "Đăng nhập vào tài khoản của bạn để mua sắm và theo dõi đơn hàng",
};

export default function LoginPage() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-md">
      <Suspense fallback={<div>Loading...</div>}>
        <AuthForm initialTab="login" />
      </Suspense>
    </div>
  );
}