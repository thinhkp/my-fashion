"use client";

import { ShoppingBag, X, Plus, Minus } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "./ui/drawer";
import Image from "next/image";
import Link from "next/link";
import useCart from "@/hooks/use-cart";
import { Progress } from "./ui/progress";
import { cn } from "@/lib/utils";
import { formatCurrencyVND } from "@/utils/format";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "./ui/skeleton";

const Cart = () => {
  const [total, setTotal] = useState(0);

  const {
    cartItemLocal,
    isLoading,
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
  } = useCart();

  
  const freeShipPercent =
    (total / 500000) * 100 > 100 ? 100 : (total / 500000) * 100;

  return (
    <div>
      <Drawer direction="right">
        <DrawerTrigger asChild className="relative">
          <div className="relative">
            <span className=" bg-red-500 text-white flex items-center justify-center text-xs aspect-square h-6 w-6  absolute  -top-[50%] left-full rounded-full" suppressHydrationWarning>
              {cartItemLocal?.length || 0}{" "}
            </span>
            <ShoppingBag></ShoppingBag>
          </div>
        </DrawerTrigger>
        <DrawerContent className=" data-[vaul-drawer-direction=right]:sm:w-120 data-[vaul-drawer-direction=right]:sm:max-w-auto  data-[vaul-drawer-direction=right]:h-screen">
          <div className="flex flex-col h-full w-full overflow-y-hidden">
            <DrawerHeader className=" p-[15px] border-b border-gray-200">
              <div className="flex justify-between items-center mb-5">
                <DrawerTitle className="text-2xl font-bold">
                  Giỏ hàng
                </DrawerTitle>
                <DrawerClose>
                  {" "}
                  <X />
                </DrawerClose>
              </div>
              {cartItemLocal && cartItemLocal.length > 0 && (
                <div className="">
                  {total < 500000 && (
                    <span className="text-sm">
                      Bạn cần mua thêm{" "}
                      <span className="text-red-700 font-bold">
                        {formatCurrencyVND(500000 - total)}
                      </span>{" "}
                      để đc
                      <span className="uppercase font-bold">
                        {" "}
                        miễn phí vận chuyển
                      </span>
                    </span>
                  )}

                  {total >= 500000 && (
                    <span className="text-sm">
                      Bạn đã được
                      <span className="uppercase font-bold">
                        {" "}
                        miễn phí vận chuyển
                      </span>
                    </span>
                  )}

                  <Progress
                    value={freeShipPercent}
                    className={cn(
                      "w-full bg-gray-200 [&>div]:bg-amber-300 mt-5",
                      freeShipPercent == 100 && "[&>div]:bg-green-700"
                    )}
                  />
                </div>
              )}
            </DrawerHeader>
            <div className=" grow min-h-0 flex flex-col ">
              {/* Loading state */}
              {isLoading && (
                <div className="p-4 space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-4 items-center">
                      <Skeleton className="h-16 w-16 rounded" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-[200px]" />
                        <Skeleton className="h-4 w-[150px]" />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* empty  */}
              {!isLoading && (!cartItemLocal || cartItemLocal.length === 0) && (
                <div className="empty w-full h-full relative">
                  <div className="aspect-square w-full relative">
                    <Image
                      src="/image/cart_empty.webp"
                      alt="empty"
                      fill
                      objectFit="contain"
                    />
                  </div>
                  <p className="text-center mb-7">
                    Chưa có sản phẩm trong giỏ hàng...
                  </p>
                  <div className="text-center">
                    <Link href={"/"} className="underline text-blue-300 m-auto">
                      {" "}
                      Trở về trang sản phẩm
                    </Link>
                  </div>
                </div>
              )}

              {/* has item  */}
              {!isLoading && cartItemLocal && cartItemLocal.length > 0 && (
                <>
                  <ScrollArea className=" grow min-h-0 overflow-auto">
                    {cartItemLocal.map((item) => (
                      <div
                        key={item.sku}
                        className="cart-item p-[15px] flex gap-4 w-full items-start"
                      >
                        <div className="shrink-0 w-1/6 relative">
                          <Image
                            className="w-full h-auto"
                            src={`/`}
                            alt={item.sku}
                            width={0}
                            height={0}
                            sizes="(max-width: 768px) 100vw, 16.666667vw"
                          />
                        </div>
                        <div className="grow">
                          <div className=" flex gap-10">
                            <div>
                              <h1 className="uppercase font-semibold">
                                {item.sku}
                              </h1>
                              <span>
                                {item.sku} / {item.sku}
                              </span>
                            </div>
                            <div className="">
                              <Button
                                size={"icon"}
                                variant={"ghost"}
                                onClick={() => {
                                  removeFromCart(item.sku);
                                }}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="flex justify-between">
                            <div className="flex">
                              <Button
                                size={"icon"}
                                variant={"ghost"}
                                onClick={() => {
                                  decreaseQuantity(item.sku);
                                }}
                              >
                                <Minus className="w-4 h-4" />
                              </Button>
                              <Input
                                readOnly
                                value={item.quantity}
                                className="inline-block w-16 text-center no-spinner"
                                type={"number"}
                              ></Input>
                              <Button
                                size={"icon"}
                                variant={"ghost"}
                                onClick={() => {
                                  increaseQuantity(item.sku);
                                }}
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                            </div>
                            <div className="flex flex-col mr-[10px]">
                              {item.sku && (
                                <>
                                  <span className="font-semibold">
                                  </span>
                                  <span className="line-through">
                                  </span>
                                </>
                              )}
                              {!item.sku && (
                                <span>1</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </ScrollArea>
                  <div className="shrink-0">
                    <div className="p-[15px]">
                      <div className="flex justify-between">
                        <span className="uppercase">Tổng tiền</span>
                        <span className="font-bold">
                          {formatCurrencyVND(total)}
                        </span>
                      </div>
                      <Link
                        href={"/checkout"}
                        className="w-full mt-5 bg-red-500 text-white text-center py-3 rounded-md block"
                      >
                        Thanh toán
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Cart;
