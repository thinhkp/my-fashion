import { Metadata } from "next";
import AuthForm from "../auth-form";

export const metadata: Metadata = {
  title: "Đăng nhập | My Fashion",
  description: "Đăng nhập vào tài khoản của bạn để mua sắm và theo dõi đơn hàng",
};

export default function LoginPage() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-md">
      <AuthForm initialTab="login" />
    </div>
  );
}