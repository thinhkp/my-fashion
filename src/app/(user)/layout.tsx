"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useUserInfo from "@/hooks/use-userinfo";
import { Package, User, Heart, LogOut, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { data: user, isLoading } = useUserInfo();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login?redirect=/user/profile");
    }
  }, [user, isLoading, router]);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await axios.post("/api/auth/logout");
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  if (isLoading) {
    return <UserLayoutSkeleton />;
  }

  if (!user) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto py-2 px-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary flex items-center">
            <Home className="h-3.5 w-3.5 mr-1" />
            Trang chủ
          </Link>
          <ChevronRight className="h-3 w-3 mx-2" />
          <span className="text-gray-700">Tài khoản</span>
        </div>
      </div>

      <div className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow p-4 mb-4 h-full">
              <div className="flex items-center space-x-3 pb-4 border-b">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{user?.displayname}</p>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                </div>
              </div>

              <nav className="mt-4 space-y-1">
                <Link
                  href="/user/profile"
                  className="flex items-center py-2 px-3 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <User className="h-5 w-5 mr-3 text-gray-500" />
                  <span>Thông tin tài khoản</span>
                </Link>
                <Link
                  href="/user/orders"
                  className="flex items-center py-2 px-3 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <Package className="h-5 w-5 mr-3 text-gray-500" />
                  <span>Đơn hàng của tôi</span>
                </Link>
                <Link
                  href="/user/wishlist"
                  className="flex items-center py-2 px-3 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <Heart className="h-5 w-5 mr-3 text-gray-500" />
                  <span>Sản phẩm yêu thích</span>
                </Link>
                <Button
                  variant="ghost"
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="w-full justify-start py-2 px-3 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <LogOut className="h-5 w-5 mr-3 text-gray-500" />
                  <span>
                    {isLoggingOut ? "Đang đăng xuất..." : "Đăng xuất"}
                  </span>
                </Button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow p-4 sm:p-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserLayoutSkeleton() {
  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      <div className="bg-white border-b">
        <div className="container mx-auto py-2 px-4">
          <Skeleton className="h-4 w-40" />
        </div>
      </div>

      <div className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar Skeleton */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow p-4 mb-4">
              <div className="flex items-center space-x-3 pb-4 border-b">
                <Skeleton className="w-12 h-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-24" />
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full" />
              </div>
            </div>
          </div>

          {/* Main Content Skeleton */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow p-4 sm:p-6">
              <div className="space-y-4">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
