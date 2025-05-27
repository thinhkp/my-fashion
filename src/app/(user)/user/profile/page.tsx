"use client";

import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { User as UserIcon, ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import useUserInfo from "@/hooks/use-userinfo";
import Link from "next/link";

export default function UserProfilePage() {
  const router = useRouter();
  const { data: userData, isLoading, error } = useUserInfo();

  if (isLoading) {
    return <UserProfileSkeleton />;
  }

  if (!userData?.user) {
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

  const user = userData.user;

  return (
    <div>
      <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
            Thông tin tài khoản
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Xem thông tin cá nhân của bạn
          </p>
        </div>
        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
          <UserIcon className="h-6 w-6 text-primary" />
        </div>
      </div>

      <Separator className="my-4 sm:my-6" />

      <div className="space-y-6">
        {/* User Information */}
        <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
          <h2 className="text-lg font-medium mb-4">Thông tin cơ bản</h2>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 py-2 border-b border-gray-200">
              <div className="text-sm font-medium text-gray-500">Email</div>
              <div className="sm:col-span-2 font-medium">
                {user.email || "Chưa cập nhật"}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 py-2 border-b border-gray-200">
              <div className="text-sm font-medium text-gray-500">
                Tên hiển thị
              </div>
              <div className="sm:col-span-2">
                {user.displayname || "Chưa cập nhật"}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 py-2 border-b border-gray-200">
              <div className="text-sm font-medium text-gray-500">
                Số điện thoại
              </div>
              <div className="sm:col-span-2">
                {user.phone || "Chưa cập nhật"}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 py-2 border-b border-gray-200">
              <div className="text-sm font-medium text-gray-500">Địa chỉ</div>
              <div className="sm:col-span-2">
                {user.address || "Chưa cập nhật"}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 py-2">
              <div className="text-sm font-medium text-gray-500">Vai trò</div>
              <div className="sm:col-span-2">
                {user.roles?.map((role, index) => (
                  <span
                    key={role}
                    className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 mr-2"
                  >
                    {role}
                  </span>
                )) || "Người dùng"}
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <h2 className="text-lg font-medium">Quản lý tài khoản</h2>

          <div className="space-y-2">
            <Link
              href="/user/edit-profile"
              className="flex items-center justify-between p-3 bg-white border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium">Chỉnh sửa thông tin cá nhân</span>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </Link>

            <Link
              href="/user/change-password"
              className="flex items-center justify-between p-3 bg-white border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium">Đổi mật khẩu</span>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </Link>

            
          </div>
        </div>
      </div>
    </div>
  );
}

function UserProfileSkeleton() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <Skeleton className="h-7 w-48 mb-2" />
          <Skeleton className="h-4 w-64" />
        </div>
        <Skeleton className="h-12 w-12 rounded-full" />
      </div>

      <Separator className="my-6" />

      <div className="space-y-6">
        <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
          <Skeleton className="h-6 w-40 mb-4" />

          <div className="space-y-4">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 py-2 border-b border-gray-200"
                >
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="sm:col-span-2 h-4 w-full" />
                </div>
              ))}
          </div>
        </div>

        <div className="space-y-3">
          <Skeleton className="h-6 w-48" />
          <div className="space-y-2">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
