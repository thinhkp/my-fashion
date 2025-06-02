"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { formatCurrencyVND } from "@/utils/format";
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
import useCart from "@/hooks/use-cart";
import { toast } from "sonner";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import useUserInfo from "@/hooks/use-userinfo";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ChevronsUpDown } from "lucide-react";
import { useRouter } from "next/navigation";

// Schema validation
const checkoutFormSchema = z.object({
  fullName: z.string().min(2, "Vui lòng nhập họ và tên"),
  email: z.string().email("Email không hợp lệ"),
  phone: z
    .string()
    .min(10, "Số điện thoại phải có ít nhất 10 số")
    .max(11, "Số điện thoại không hợp lệ")
    .refine((val) => /^[0-9]+$/.test(val), {
      message: "Số điện thoại chỉ bao gồm các chữ số",
    }),
  address: z.string().min(5, "Vui lòng nhập địa chỉ cụ thể"),
  province: z.string().min(1, "Vui lòng chọn tỉnh/thành"),
  district: z.string().min(1, "Vui lòng chọn quận/huyện"),
  ward: z.string().min(1, "Vui lòng chọn phường/xã"),
  shippingMethod: z.string(),
  paymentMethod: z.string().min(1, "Vui lòng chọn phương thức thanh toán"),
});

type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;

const CheckoutPage = () => {
  const router = useRouter();
  const { data: user } = useUserInfo();
  const { cartItemData } = useCart();

  

  const createOrder = useMutation({
    // eslint-disable-next-line
    mutationFn: async (data: any) => {
      return await axios.post("/api/orders", data);
    },
    onSuccess: () => {
      toast.success("Đặt hàng thành công!");
      // Navigate to confirmation page or home after successful order
      router.push("/order-success");
    },
    onError: (error) => {
      toast.error("Đặt hàng thất bại. Vui lòng thử lại.");
      console.error("Order error:", error);
    },
  });

  // Calculate subtotal
  const subtotal = useMemo(() => {
    if (!cartItemData || cartItemData.length === 0) return 0;

    return cartItemData.reduce((sum, item) => {
      const itemPrice = item?.discountprice || item?.price || 0;
      return sum + itemPrice * (item?.quantity || 1);
    }, 0);
  }, [cartItemData]);

  // Shipping fee logic: free for orders over 500,000₫, otherwise 30,000₫
  const shippingThreshold = 500000;
  const standardShippingFee = 30000;
  const shipping = subtotal >= shippingThreshold ? 0 : standardShippingFee;

  const total = subtotal + shipping;

  // Form setup with validation
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      province: "",
      district: "",
      ward: "",
      shippingMethod: "standard",
      paymentMethod: "cod",
    },
  });

  const isSubmitting = createOrder.isPending;

  // Submit handler
  const onSubmit = async (values: CheckoutFormValues) => {
    if (!cartItemData || cartItemData.length === 0) {
      toast.error("Giỏ hàng trống, không thể thanh toán");
      return;
    }

    try {
      // Simplify items to only include sku and quantity
      const items = cartItemData
        .map((item) => {
          if (!item?.sku) return null;
          return {
            sku: item.sku,
            quantity: item?.quantity || 1,
          };
        })
        .filter(Boolean); // Remove any null items

      const formData = {
        orderer: {
          userId: user?.userId || null,
        },
        receiver: {
          name: values.fullName,
          email: values.email,
          phone: values.phone,
          address: values.address,
          province: values.province,
          district: values.district,
          ward: values.ward,
        },
        items,
        shippingMethod: values.shippingMethod,
        paymentMethod: values.paymentMethod,
      };

      await createOrder.mutateAsync(formData);

      // Success handling is in the onSuccess callback of the mutation
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Đã xảy ra lỗi khi xử lý đơn hàng");
    }
  };

  // Update form values when user data is available
  useEffect(() => {
    if (user) {
      form.setValue("fullName", user.displayname || "");
      form.setValue("email", user.email || "");
    }
  }, [user, form]);

  // Redirect if cart is empty
  useEffect(() => {
    if (cartItemData && cartItemData.length === 0) {
      toast.error("Giỏ hàng trống, vui lòng thêm sản phẩm");
      router.push("/");
    }
  }, [cartItemData, router]);

  const [provinceCode, setProvinceCode] = useState<number>(0);
  const [districtCode, setDistrictCode] = useState<number>(0);

  const province = form.watch("province");
  const district = form.watch("district");
  const ward = form.watch("ward");

  const { data: provinces } = useQuery({
    queryKey: ["provinces"],
    queryFn: async () => {
      const response = await axios.get("https://provinces.open-api.vn/api/p/");
      return response.data as { name: string; code: string }[];
    },
  });

  const { data: districts } = useQuery({
    queryKey: ["districts", provinceCode],
    queryFn: async () => {
      const response = await axios.get(
        `https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`
      );
      return response.data.districts as { name: string; code: string }[];
    },
    enabled: !!provinceCode,
  });

  const { data: wards } = useQuery({
    queryKey: ["wards", districtCode],
    queryFn: async () => {
      const response = await axios.get(
        `https://provinces.open-api.vn/api/d/${districtCode}?depth=2`
      );
      return response.data.wards as { name: string; code: string }[];
    },
    enabled: !!districtCode,
  });

  // Loading state
  if (!cartItemData) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex justify-center items-center h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800 mx-auto mb-4"></div>
            <p className="text-gray-600">Đang tải thông tin đơn hàng...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left side - Shipping information */}
            <div className="w-full lg:w-3/5 space-y-6">
              <Link href="/" className="mb-8 block">
                <Image
                  src="/image/logo.webp"
                  alt="Torano"
                  width={200}
                  height={50}
                  className="h-auto"
                />
              </Link>

              <h2 className="text-2xl font-medium mb-6">Thông tin giao hàng</h2>

              {/* Login prompt */}
              {!user && (
                <div className="mb-6">
                  <p className="text-gray-600">
                    Bạn đã có tài khoản?{" "}
                    <Link
                      href="/login"
                      className="text-blue-600 hover:underline"
                    >
                      Đăng nhập
                    </Link>
                  </p>
                </div>
              )}

              {/* Shipping form */}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Họ và tên"
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Email"
                            {...field}
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Số điện thoại"
                            {...field}
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Địa chỉ"
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="province"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className="w-full text-left justify-between"
                                role="combobox"
                                disabled={isSubmitting}
                              >
                                {province || "Tỉnh / Thành phố"}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-full p-0">
                              <Command>
                                <CommandInput placeholder="Tìm tỉnh thành..." />
                                <CommandList>
                                  <CommandEmpty>Không tìm thấy</CommandEmpty>
                                  <CommandGroup className="max-h-60 overflow-y-auto">
                                    {provinces?.map((province) => (
                                      <CommandItem
                                        key={province.code}
                                        value={province.name}
                                        onSelect={() => {
                                          field.onChange(province.name);
                                          setProvinceCode(
                                            parseInt(province.code)
                                          );
                                          form.setValue("district", "");
                                          form.setValue("ward", "");
                                        }}
                                      >
                                        {province.name}
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>
                                </CommandList>
                              </Command>
                            </PopoverContent>
                          </Popover>
                        </FormControl>

                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="district"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className="w-full text-left justify-between"
                                role="combobox"
                                disabled={!province || isSubmitting}
                              >
                                {district || "Quận / Huyện"}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-full p-0">
                              <Command>
                                <CommandInput placeholder="Tìm quận huyện..." />
                                <CommandList>
                                  <CommandEmpty>Không tìm thấy</CommandEmpty>
                                  <CommandGroup className="max-h-60 overflow-y-auto">
                                    {districts?.map((item) => (
                                      <CommandItem
                                        key={item.code}
                                        value={item.name}
                                        onSelect={() => {
                                          field.onChange(item.name);
                                          setDistrictCode(parseInt(item.code));
                                          form.setValue("ward", "");
                                        }}
                                      >
                                        {item.name}
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>
                                </CommandList>
                              </Command>
                            </PopoverContent>
                          </Popover>
                        </FormControl>

                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="ward"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className="w-full text-left justify-between"
                                role="combobox"
                                disabled={!district || isSubmitting}
                              >
                                {ward || "Xã / Phường"}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-full p-0">
                              <Command>
                                <CommandInput placeholder="Tìm phường xã..." />
                                <CommandList>
                                  <CommandEmpty>Không tìm thấy</CommandEmpty>
                                  <CommandGroup className="max-h-60 overflow-y-auto">
                                    {wards?.map((item) => (
                                      <CommandItem
                                        key={item.code}
                                        value={item.name}
                                        onSelect={() => {
                                          field.onChange(item.name);
                                        }}
                                      >
                                        {item.name}
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>
                                </CommandList>
                              </Command>
                            </PopoverContent>
                          </Popover>
                        </FormControl>

                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <h2 className="text-2xl font-medium mb-4 mt-8">
                Phương thức vận chuyển
              </h2>

              <FormField
                control={form.control}
                name="shippingMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="border rounded-md p-4"
                        disabled={isSubmitting}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="standard" id="standard" />
                            <Label htmlFor="standard">
                              {subtotal >= shippingThreshold
                                ? "Miễn phí vận chuyển"
                                : "Giao hàng tiêu chuẩn"}
                            </Label>
                          </div>
                          <span>
                            {shipping === 0
                              ? "Miễn phí"
                              : formatCurrencyVND(shipping)}
                          </span>
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Phương thức thanh toán */}
              <h2 className="text-2xl font-medium mb-4 mt-8">
                Phương thức thanh toán
              </h2>

              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="space-y-3"
                        disabled={isSubmitting}
                      >
                        {/* COD */}
                        <div className="border rounded-md p-4 transition-all hover:border-gray-400 cursor-pointer">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="cod" id="cod" />
                            <div className="flex items-center gap-3">
                              <Image
                                src="/image/payment/cod.png"
                                alt="COD"
                                width={30}
                                height={30}
                                className="h-auto"
                              />
                              <Label htmlFor="cod" className="cursor-pointer">
                                Thanh toán khi giao hàng (COD)
                              </Label>
                            </div>
                          </div>
                        </div>

                        {/* VNPAY */}
                        <div className="border rounded-md p-4 transition-all hover:border-gray-400 cursor-pointer">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="vnpay" id="vnpay" />
                            <div className="flex items-center gap-3">
                              <Image
                                src="/image/payment/vnpay.png"
                                alt="VNPAY"
                                width={30}
                                height={30}
                                className="h-auto"
                              />
                              <Label htmlFor="vnpay" className="cursor-pointer">
                                Thanh toán qua VNPAY
                              </Label>
                            </div>
                          </div>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
            </div>

            {/* Right side - Order summary */}
            <div className="w-full lg:w-2/5 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-medium mb-4 border-b pb-4">
                Đơn hàng của bạn ({cartItemData.length} sản phẩm)
              </h2>

              {/* Cart items */}
              <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-2">
                {cartItemData.map((item) => (
                  <div
                    key={`cart-item-${item?.sku || Math.random()}`}
                    className="flex items-center gap-4 py-3 border-b border-gray-100"
                  >
                    <div className="relative w-20 h-20 bg-gray-100 rounded-md overflow-hidden">
                      <span className="absolute top-0 right-0 bg-gray-500 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">
                        {item?.quantity || 1}
                      </span>
                      <Image
                        src={`/image/products/${item?.image || "default.jpg"}`}
                        alt={item?.name || "Product Image"}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium text-sm">
                        {item?.name || "Sản phẩm"}
                      </h3>
                      <p className="text-gray-500 text-xs">
                        {item?.color || "N/A"} / {item?.size || "N/A"}
                      </p>
                    </div>
                    <div className="font-medium">
                      {formatCurrencyVND(
                        (item?.discountprice || item?.price || 0) *
                          (item?.quantity || 1)
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Order totals */}
              <div className="space-y-3 border-t pt-4">
                <div className="flex justify-between">
                  <span>Tạm tính</span>
                  <span>{formatCurrencyVND(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Phí vận chuyển</span>
                  <div className="text-right">
                    {shipping === 0 ? (
                      <span className="text-green-600">Miễn phí</span>
                    ) : (
                      <span>{formatCurrencyVND(shipping)}</span>
                    )}
                    {subtotal > 0 && (
                      <span className="block text-xs text-gray-500">
                        (Miễn phí vận chuyển cho đơn hàng từ 500.000đ)
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t">
                  <span>Tổng cộng</span>
                  <div className="text-right">
                    <span className="text-sm text-gray-500 block">VND</span>
                    <span>{formatCurrencyVND(total)}</span>
                  </div>
                </div>
              </div>

              {/* Checkout button */}
              <Button
                className="w-full mt-6 py-6 text-lg bg-red-500 hover:bg-red-600 text-white"
                type="submit"
                disabled={isSubmitting || cartItemData.length === 0}
              >
                {isSubmitting ? "Đang xử lý..." : "Hoàn tất đơn hàng"}
              </Button>

              <div className="mt-4 text-center">
                <Link
                  href="/"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Tiếp tục mua sắm
                </Link>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CheckoutPage;
