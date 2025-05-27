"use client";

import { CircleAlert, Clipboard, ClipboardCheck, LogOut, User } from "lucide-react";
import React, { useState } from "react";
import { PopoverTrigger, Popover, PopoverContent } from "./ui/popover";
import { Separator } from "./ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { Alert, AlertTitle } from "./ui/alert";
import useUserInfo from "@/hooks/use-userinfo";
import Link from "next/link";

type UserProps = {
  allowOpen?: boolean;
};

const UserC = ({ allowOpen }: UserProps) => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { data, refetch } = useUserInfo();

  const user = data?.user

  console.log("user", user);
  

   

  const loginMutation = useMutation({
    mutationFn: async (credentials: { username: string; password: string }) => {
      const response = await axios.post("/api/auth/login", credentials);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success("Đăng nhập thành công");
      refetch();
    },
    onError: (error) => {
      setError("Sai tài khoản hoặc mật khẩu");
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      const response = await axios.post("/api/auth/logout");
      return response.data;
    },
    onSuccess: () => {
      toast.success("Đã đăng xuất");
      refetch();
    },
    onError: (error) => {
      toast.error("Không thể đăng xuất. Vui lòng thử lại.");
      console.log("Logout error:", error);
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    loginMutation.mutate({ username, password });
  };
  return (
    <Popover open={allowOpen && open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="">
          <User />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-85">
        <>
          {!user && (
            <div className="">
              <h1 className="uppercase text-center mb-1 text-xl ">
                đăng nhập tài khoản
              </h1>
              <p className="text-sm text-center text-[rgb(103,114,121)]">
                Nhập email và mật khẩu của bạn
              </p>
              <Separator className="my-3" />
              <Input
                type="text"
                className="inline-block w-full mb-3"
                placeholder="Tài khoản"
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type="password"
                className="inline-block w-full mb-3"
                placeholder="Mật khẩu"
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && (
                <Alert>
                  <CircleAlert className="h-4 w-4"></CircleAlert>
                  <AlertTitle>{error}</AlertTitle>
                </Alert>
              )}

              <Button
                variant={"ghost"}
                onClick={handleSubmit}
                disabled={loginMutation.isPending}
                className="border-0 w-full group overflow-hidden z-1 mx-auto px-12 py-3 rounded-md uppercase text-sm relative before:content-[''] before:absolute before:inset-[-200px] before:-translate-x-[101%] before:bg-red-500 hover:before:translate-x-0 before:transition-all before:z-[-1] before:duration-700 before:rotate-45"
              >
                <span className="font-medium text-red-500 group-hover:text-white duration-700 transition-colors uppercase">
                  {loginMutation.isPending ? "Đang xử lý..." : "đăng nhập"}
                </span>
              </Button>
            </div>
          )}
          {user && (
            <div className="text-center  bg-white">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-green-500 font-bold">
                    {user?.displayname?.charAt(0).toUpperCase()}
                  </span>
                </div>

                <h1 className="text-xl font-semibold text-green-600">
                  Xin chào, {user.displayname}!
                </h1>

                <div className="grid grid-cols-1 gap-0 w-full">
                  {/* thông tin cá nhân */}
                  <Button
                    variant="ghost"
                    className="mt-4 text-red-500 h-auto p-2 border-red-200 hover:bg-red-50 hover:text-red-600 w-full m-0"
                  >
                    <Link href="/user/profile" className="w-full flex items-center font-bold text-black justify-between gap-2">
                      <User className="size-5 p-2 box-content bg-gray-200 rounded-full " />
                      <span className="grow text-left ">Thông tin cá nhân</span>
                    </Link>
                  </Button>
                  {/* đơn hàng */}
                  <Button
                    variant="ghost"
                    className="mt-4 text-red-500 h-auto p-2 border-red-200 hover:bg-red-50 hover:text-red-600 w-full m-0"
                  >
                    <Link href="/user/orders" className="w-full flex items-center font-bold text-black justify-between gap-2">
                      <ClipboardCheck className="size-5 p-2 box-content bg-gray-200 rounded-full " />
                      <span className="grow text-left ">Đơn hàng</span>
                    </Link>
                  </Button>
                  {/* đăng xuất */}
                  <Button
                    variant="ghost"
                    onClick={handleLogout}
                    disabled={logoutMutation.isPending}
                    className="mt-4 text-red-500 h-auto p-2 border-red-200 hover:bg-red-50 hover:text-red-600 w-full m-0"
                  >
                    <div className="w-full flex items-center font-bold text-black justify-between gap-2">
                      <LogOut className="size-5 p-2 box-content bg-gray-200 rounded-full " />
                      <span className="grow text-left ">{logoutMutation.isPending ? "Đang xử lý..." : "Đăng xuất"}</span>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </>
      </PopoverContent>
    </Popover>
  );
};

export default UserC;
