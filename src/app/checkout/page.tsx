// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Label } from "@/components/ui/label";
// import { formatCurrencyVND } from "@/utils/format";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from "@/components/ui/form";
// import useCart from "@/hooks/use-cart";
// import { toast } from "sonner";
// import { useMutation, useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import useUserInfo from "@/hooks/use-userinfo";
// import { UserInfo } from "@/types/user";
// import { Popover, PopoverContent } from "@/components/ui/popover";
// import { PopoverTrigger } from "@radix-ui/react-popover";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import { Check, ChevronsUpDown } from "lucide-react";

// // Schema validation
// const checkoutFormSchema = z.object({
//   fullName: z.string().min(2, "Vui lòng nhập họ và tên"),
//   email: z.string().email("Email không hợp lệ"),
//   phone: z
//     .string()
//     .min(10, "Số điện thoại phải có ít nhất 10 số")
//     .max(11, "Số điện thoại không hợp lệ")
//     .refine((val) => /^[0-9]+$/.test(val), {
//       message: "Số điện thoại chỉ bao gồm các chữ số",
//     }),
//   address: z.string().min(5, "Vui lòng nhập địa chỉ cụ thể"),
//   province: z.string().min(1, "Vui lòng chọn tỉnh/thành"),
//   district: z.string().min(1, "Vui lòng chọn quận/huyện"),
//   ward: z.string().min(1, "Vui lòng chọn phường/xã"),
//   shippingMethod: z.string(),
//   paymentMethod: z.string().min(1, "Vui lòng chọn phương thức thanh toán"),
// });

// type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;

// const CheckoutPage = () => {
//   // Demo cart items

//   const { data } = useUserInfo();
//   const { cart: cartItems } = useCart();

//   const user: UserInfo = data?.user;
//   const createOrder = useMutation({
//     mutationFn: async (data: any) => {
//       console.log(data);
//       // Simulate API call
//       await axios.post("/api/orders", data);
//     },
//     onSuccess: () => {
//       toast.success("Đặt hàng thành công!");
//     },
//     onError: (error) => {
//       toast.error("Đặt hàng thất bại. Vui lòng thử lại.");
//     },
//   });

//   // Calculate totals with proper pricing logic
//   const subtotal =
//     cartItems?.reduce((sum, item) => {
//       // Use discounted price if available, otherwise use regular price
//       const basePrice =
//         item.discountprice !== null && item.discountprice !== undefined
//           ? item.discountprice
//           : item.price;

//       // Add any variant additional price if exists
//       const variantPrice = item.additionalprice || 0;

//       // Final price for this item
//       const finalPrice = basePrice + variantPrice;

//       return sum + finalPrice * item.quantity;
//     }, 0) || 0;

//   // Shipping fee logic: free for orders over 500,000₫, otherwise 100,000₫
//   const shippingThreshold = 500000;
//   const standardShippingFee = 100000;
//   const shipping = subtotal >= shippingThreshold ? 0 : standardShippingFee;

//   const total = subtotal + shipping;

//   // Form setup with validation
//   const form = useForm<CheckoutFormValues>({
//     resolver: zodResolver(checkoutFormSchema),
//     defaultValues: {
//       fullName: "",
//       email: "",
//       phone: "",
//       address: "",
//       province: "",
//       district: "",
//       ward: "",
//       shippingMethod: "freeship",
//       paymentMethod: "cod",
//     },
//   });

//   const isSubmitting = createOrder.isPending;
//   const paymentMethod = form.watch("paymentMethod");

//   // Submit handler
//   const onSubmit = async (values: CheckoutFormValues) => {
//     try {
//       const items = cartItems?.map((item) => {
//         // Calculate the final price: discount price (if available) or regular price + additional price
//         const basePrice = item.discountprice ? item.discountprice : item.price;

//         // Add additional price if it exists
//         const finalPrice = basePrice + (item.additionalprice || 0);

//         return {
//           sku: item.sku,
//           quantity: item.quantity,
//           price: finalPrice,
//         };
//       });

//       const formData = {
//         orderer: {
//           userId: user?.userId || null,
//         },
//         receiver: {
//           name: values.fullName,
//           email: values.email,
//           phone: values.phone,
//           address: values.address,
//           province: values.province,
//           district: values.district,
//           ward: values.ward,
//         },
//         items,
//         shippingMethod: values.shippingMethod,
//         paymentMethod: values.paymentMethod,
//       };

//       createOrder.mutate({ ...formData });
//     } catch (error) {
//       console.error("Checkout error:", error);
//     }
//   };

//   // Then update the form values when user data is available
//   useEffect(() => {
//     if (user) {
//       form.setValue("fullName", user.displayname || "");
//       form.setValue("email", user.email || "");
//     }
//   }, [user, form]);

//   const [provinceCode, setProvinceCode] = useState(0);
//   const [districtCode, setDistrictCode] = useState(0);

//   const province = form.watch("province");
//   const district = form.watch("district");
//   const ward = form.watch("ward");

//   const { data: provinces } = useQuery({
//     queryKey: ["provinces"],
//     queryFn: async () => {
//       const response = await axios.get("https://provinces.open-api.vn/api/p/");
//       return response.data as { name: string; code: string }[];
//     },
//   });

//   const { data: districts } = useQuery({
//     queryKey: ["districts" , provinceCode],
//     queryFn: async () => {
//       const response = await axios.get(
//         `https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`
//       );
//       return response.data.districts as { name: string; code: string }[];
//     },
//     enabled: !!province,
//   });

//   const { data: wards } = useQuery({
//     queryKey: ["wards" , districtCode],
//     queryFn: async () => {
//       const response = await axios.get(
//         `https://provinces.open-api.vn/api/d/${districtCode}?depth=2`
//       );
//       return response.data.wards as { name: string; code: string }[];
//     },
//     enabled: !!district,
//   });


//   console.log(wards);
//   console.log(districts);


//   return (
//     <div className="container mx-auto px-4 py-8 max-w-6xl">
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)}>
//           <div className="flex flex-col lg:flex-row gap-8">
//             {/* Left side - Shipping information */}
//             <div className="w-full lg:w-3/5 space-y-6">
//               <Link href="/" className="mb-8 block">
//                 <Image
//                   src="/image/logo.webp"
//                   alt="Torano"
//                   width={200}
//                   height={50}
//                   className="h-auto"
//                 />
//               </Link>

//               <h2 className="text-2xl font-medium mb-6">Thông tin giao hàng</h2>

//               {/* Login prompt */}
//               {!user && (
//                 <div className="mb-6">
//                   <p className="text-gray-600">
//                     Bạn đã có tài khoản?{" "}
//                     <Link
//                       href="/login"
//                       className="text-blue-600 hover:underline"
//                     >
//                       Đăng nhập
//                     </Link>
//                   </p>
//                 </div>
//               )}

//               {/* Shipping form */}
//               <div className="space-y-4">
//                 <FormField
//                   control={form.control}
//                   name="fullName"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormControl>
//                         <Input
//                           placeholder="Họ và tên"
//                           {...field}
//                           disabled={isSubmitting}
//                         />
//                       </FormControl>
//                       <FormMessage className="text-xs text-red-500" />
//                     </FormItem>
//                   )}
//                 />

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormControl>
//                           <Input
//                             type="email"
//                             placeholder="Email"
//                             {...field}
//                             disabled={isSubmitting}
//                           />
//                         </FormControl>
//                         <FormMessage className="text-xs text-red-500" />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="phone"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormControl>
//                           <Input
//                             placeholder="Số điện thoại"
//                             {...field}
//                             disabled={isSubmitting}
//                           />
//                         </FormControl>
//                         <FormMessage className="text-xs text-red-500" />
//                       </FormItem>
//                     )}
//                   />
//                 </div>

//                 <FormField
//                   control={form.control}
//                   name="address"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormControl>
//                         <Input
//                           placeholder="Địa chỉ"
//                           {...field}
//                           disabled={isSubmitting}
//                         />
//                       </FormControl>
//                       <FormMessage className="text-xs text-red-500" />
//                     </FormItem>
//                   )}
//                 />

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <FormField
//                     control={form.control}
//                     name="province"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormControl>
//                           <Popover>
//                             <PopoverTrigger asChild>
//                               <Button
//                                 variant="outline"
//                                 className="w-full text-left"
//                                 role="combobox"
//                               >
//                                 {province || "Tỉnh / Thành phố"}
//                                 <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//                               </Button>
//                             </PopoverTrigger>
//                             <PopoverContent className="">
//                               <Command>
//                                 <CommandInput placeholder="Search framework..." />
//                                 <CommandList>
//                                   <CommandEmpty>
//                                     No framework found.
//                                   </CommandEmpty>
//                                   <CommandGroup>
//                                     {provinces?.map((framework) => (
//                                       <CommandItem
//                                         key={framework.code}
//                                         value={framework.name}
//                                         onSelect={() => {
//                                           field.onChange(framework.name);
//                                           setProvinceCode(
//                                             parseInt(framework.code)
//                                           );
//                                           form.setValue("district", "");
//                                           form.setValue("ward", "");
//                                         }}
//                                       >
//                                         {framework.name}
//                                       </CommandItem>
//                                     ))}
//                                   </CommandGroup>
//                                 </CommandList>
//                               </Command>
//                             </PopoverContent>
//                           </Popover>
//                         </FormControl>

//                         <FormMessage className="text-xs text-red-500" />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="district"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormControl>
//                           <Popover>
//                             <PopoverTrigger asChild>
//                               <Button
//                                 variant="outline"
//                                 className="w-full text-left"
//                                 role="combobox"
//                                 disabled={province == ""}
//                               >
//                                 {district || 'Quận / Huyện'}
//                                 <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />  
//                               </Button>
                              

//                             </PopoverTrigger>
//                             <PopoverContent className="">
//                               <Command>
//                                 <CommandInput placeholder="Search framework..." />
//                                 <CommandList>
//                                   <CommandEmpty>
//                                     No framework found.
//                                   </CommandEmpty>
//                                   <CommandGroup>
//                                     {districts?.map((item) => (
//                                       <CommandItem
//                                         key={item.code}
//                                         value={item.name}
//                                         onSelect={() => {
//                                           field.onChange(item.name);
//                                           setDistrictCode(parseInt(item.code));
//                                           form.setValue("ward", "");
//                                         }}
//                                       >
//                                         {item.name}
//                                       </CommandItem>
//                                     ))}
//                                   </CommandGroup>
//                                 </CommandList>
//                               </Command>
//                             </PopoverContent>
//                           </Popover>
//                         </FormControl>

//                         <FormMessage className="text-xs text-red-500" />
//                       </FormItem>
//                     )}
//                   />

//                     <FormField
//                     control={form.control}
//                     name="ward"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormControl>
//                           <Popover>
//                             <PopoverTrigger asChild>
//                               <Button
//                                 variant="outline"
//                                 className="w-full text-left"
//                                 role="combobox"
//                                 disabled={district == ""}
//                               >
//                                 {ward || 'Xã  / Phường'}
//                                 <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />  
//                               </Button>
                              

//                             </PopoverTrigger>
//                             <PopoverContent className="">
//                               <Command>
//                                 <CommandInput placeholder="Search framework..." />
//                                 <CommandList>
//                                   <CommandEmpty>
//                                     No framework found.
//                                   </CommandEmpty>
//                                   <CommandGroup>
//                                     {wards?.map((item) => (
//                                       <CommandItem
//                                         key={item.code}
//                                         value={item.name}
//                                         onSelect={() => {
//                                           field.onChange(item.name);
//                                         }}
//                                       >
//                                         {item.name}
//                                       </CommandItem>
//                                     ))}
//                                   </CommandGroup>
//                                 </CommandList>
//                               </Command>
//                             </PopoverContent>
//                           </Popover>
//                         </FormControl>

//                         <FormMessage className="text-xs text-red-500" />
//                       </FormItem>
//                     )}
//                   />

//                 </div>
//               </div>

//               <h2 className="text-2xl font-medium mb-4 mt-8">
//                 Phương thức vận chuyển
//               </h2>

//               <FormField
//                 control={form.control}
//                 name="shippingMethod"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormControl>
//                       <RadioGroup
//                         onValueChange={field.onChange}
//                         defaultValue={field.value}
//                         className="border rounded-md p-4"
//                         disabled={isSubmitting}
//                       >
//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center space-x-2">
//                             <RadioGroupItem value="freeship" id="freeship" />
//                             <Label htmlFor="freeship">
//                               Freeship đơn trên 500K
//                             </Label>
//                           </div>
//                           <span>{formatCurrencyVND(0)}</span>
//                         </div>
//                       </RadioGroup>
//                     </FormControl>
//                   </FormItem>
//                 )}
//               />

//               {/* Phương thức thanh toán */}
//               <h2 className="text-2xl font-medium mb-4 mt-8">
//                 Phương thức thanh toán
//               </h2>

//               <FormField
//                 control={form.control}
//                 name="paymentMethod"
//                 render={({ field }) => (
//                   <FormItem className="space-y-4">
//                     <FormControl>
//                       <RadioGroup
//                         onValueChange={field.onChange}
//                         value={field.value}
//                         className="space-y-3"
//                         disabled={isSubmitting}
//                       >
//                         {/* COD */}
//                         <div className="border rounded-md p-4 transition-all hover:border-gray-400 cursor-pointer">
//                           <div className="flex items-center space-x-2">
//                             <RadioGroupItem value="cod" id="cod" />
//                             <div className="flex items-center gap-3">
//                               <Image
//                                 src="/image/payment/cod.png"
//                                 alt="COD"
//                                 width={30}
//                                 height={30}
//                                 className="h-auto"
//                               />
//                               <Label htmlFor="cod" className="cursor-pointer">
//                                 Thanh toán khi giao hàng (COD)
//                               </Label>
//                             </div>
//                           </div>
//                         </div>

//                         {/* VNPAY */}
//                         <div className="border rounded-md p-4 transition-all hover:border-gray-400 cursor-pointer">
//                           <div className="flex items-center space-x-2">
//                             <RadioGroupItem value="vnpay" id="vnpay" />
//                             <div className="flex items-center gap-3">
//                               <Image
//                                 src="/image/payment/vnpay.png"
//                                 alt="VNPAY"
//                                 width={30}
//                                 height={30}
//                                 className="h-auto"
//                               />
//                               <Label htmlFor="vnpay" className="cursor-pointer">
//                                 Thanh toán qua VNPAY
//                               </Label>
//                             </div>
//                           </div>
//                         </div>
//                       </RadioGroup>
//                     </FormControl>
//                     <FormMessage className="text-xs text-red-500" />
//                   </FormItem>
//                 )}
//               />
//             </div>

//             {/* Right side - Order summary */}
//             <div className="w-full lg:w-2/5 bg-gray-50 p-6 rounded-lg">
//               <h2 className="text-xl font-medium mb-4 border-b pb-4">
//                 Đơn hàng của bạn
//               </h2>

//               {/* Cart items */}
//               <div className="space-y-4 mb-6">
//                 {cartItems?.map((item) => {
//                   // Calculate display price for this item - discount price (if available) + variant price
//                   const displayPrice =
//                     item.discountprice !== null &&
//                     item.discountprice !== undefined
//                       ? item.discountprice + (item.additionalprice || 0)
//                       : item.price + (item.additionalprice || 0);

//                   return (
//                     <div
//                       key={`cart-item-${item.sku}`}
//                       className="flex items-center gap-4 py-3"
//                     >
//                       <div className="relative w-20 h-20 bg-gray-100 rounded-md overflow-hidden">
//                         <span className="absolute top-0 right-0 bg-gray-500 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">
//                           {item.quantity}
//                         </span>
//                         <Image
//                           src={`/image/products/${item.image}`}
//                           alt={item.name}
//                           width={80}
//                           height={80}
//                           className="object-cover w-full h-full"
//                         />
//                       </div>
//                       <div className="flex-grow">
//                         <h3 className="font-medium">{item.name}</h3>
//                         <p className="text-gray-500 text-sm">
//                           {item.color} / {item.size}
//                         </p>
//                         {item.additionalprice && item.additionalprice > 0 && (
//                           <p className="text-xs text-gray-500">
//                             (+{formatCurrencyVND(item.additionalprice)})
//                           </p>
//                         )}
//                       </div>
//                       <div className="font-medium">
//                         {formatCurrencyVND(displayPrice)}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* Order totals */}
//               <div className="space-y-3 border-t pt-4">
//                 <div className="flex justify-between">
//                   <span>Tạm tính</span>
//                   <span>{formatCurrencyVND(subtotal)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Phí vận chuyển</span>
//                   <div className="text-right">
//                     {shipping === 0 ? (
//                       <span className="text-green-600">Miễn phí</span>
//                     ) : (
//                       <span>{formatCurrencyVND(shipping)}</span>
//                     )}
//                     {subtotal > 0 && (
//                       <span className="block text-xs text-gray-500">
//                         (Miễn phí vận chuyển cho đơn hàng từ 500.000 đ)
//                       </span>
//                     )}
//                   </div>
//                 </div>
//                 <div className="flex justify-between font-bold text-lg pt-2 border-t">
//                   <span>Tổng cộng</span>
//                   <div className="text-right">
//                     <span className="text-sm text-gray-500 block">VND</span>
//                     <span>{formatCurrencyVND(total)}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Checkout button */}
//               <Button
//                 className="w-full mt-6 py-6 text-lg"
//                 type="submit"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? "Đang xử lý..." : "Hoàn tất đơn hàng"}
//               </Button>
//             </div>
//           </div>
//         </form>
//       </Form>
//     </div>
//   );
// };

// export default CheckoutPage;
