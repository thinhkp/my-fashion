"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ShoppingBag, Eye, Minus, Plus } from "lucide-react";
import { calculateDiscountPercentage, formatCurrencyVND } from "@/utils/format";
import Link from "next/link";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Product, ProductCardType } from "@/types/model";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import useCart from "@/hooks/use-cart";
import { Input } from "./ui/input";

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  item: Product;
}

const ProductCard = ({ item }: ProductCardProps) => {
  const isDiscount = item.discountprice != null;

  const { productvariant } = item;

  const colors = useMemo(
    () =>
      productvariant
        .map((item) => item.color.name)
        .filter((item, i, a) => i == a.indexOf(item)),
    [item]
  );

  const sizes = useMemo(
    () =>
      productvariant
        .map((item) => item.size.name)
        .filter((item, i, a) => i == a.indexOf(item)),
    [item]
  );

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(sizes[0]);
  const [color, setColor] = useState(colors[0]);
  const [selectedType, setSelectedType] = useState("color");
  const [api, setApi] = useState<CarouselApi>();
  const [api2, setApi2] = useState<CarouselApi>();
  const [currentImage, setCurrentImage] = useState(0);
  const { addToCart } = useCart();

  // Hàm giúp tìm ảnh phù hợp với màu sắc được chọn
  const findImageIndexForColor = useMemo(() => {
    if (!color) return 0;

    // Tìm variant có màu tương ứng và có liên kết với ảnh
    const variantWithImage = productvariant.find(
      (variant) => variant.color.name === color && variant.image
    );

    if (variantWithImage?.image) {
      // Tìm index của ảnh trong mảng productimage
      const imageIndex = item.productimage.findIndex(
        (img) => img.id === variantWithImage.image?.id
      );

      if (imageIndex !== -1) {
        return imageIndex;
      }
    }

    // Nếu không tìm thấy, trả về ảnh đầu tiên
    return 0;
  }, [color, productvariant, item.productimage]);

  // Effect để cập nhật carousel khi màu sắc thay đổi
  useEffect(() => {
    if (api) {
      setCurrentImage(findImageIndexForColor);
      api.scrollTo(findImageIndexForColor);
    }
  }, [color, findImageIndexForColor, api]);

  const availableSizesForColor = useMemo(() => {
    return productvariant
      .filter((variant) => variant.color.name === color)
      .map((variant) => variant.size.name);
  }, [color, productvariant]);

  const availableColorsForSize = useMemo(() => {
    return productvariant
      .filter((variant) => variant.size.name === size)
      .map((variant) => variant.color.name);
  }, [size, productvariant]);

  useEffect(() => {
    if (selectedType === "color" && !availableSizesForColor.includes(size)) {
      setSize(availableSizesForColor[0]);
    } else if (
      selectedType === "size" &&
      !availableColorsForSize.includes(color)
    ) {
      setColor(availableColorsForSize[0]);
    }
  }, [color, size]);

  // effect on carousel1
  useEffect(() => {
    if (!api) return;
    api.scrollTo(currentImage);

    api.on("select", (index) => {
      setCurrentImage(api?.selectedScrollSnap());
    });
  }, [api, currentImage]);

  const currentVariant = useMemo(() => {
    return productvariant.find(
      (item) => item.color.name == color && item.size.name == size
    );
  }, [size, color]);

  return (
    <div className="grow w-full relative flex flex-col z-0">
      {isDiscount && (
        <div className=" z-1 absolute rounded-full top-2 left-2 bg-red-600 px-3 py-1 text-xs text-white leading-3 font-bold ">
          {calculateDiscountPercentage(item.price, item?.discountprice || 0)}
        </div>
      )}

      {/* ảnh và link */}
      <div className="relative group    ">
        <Link
          href={"/products/" + item.slug}
          className=" w-full aspect-[3/4] bg-white relative overflow-hidden  z-0 block"
        >
          <Image
            className="w-full h-full z-0 group-hover:scale-80 group-hover:opacity-0  transition-all duration-700 object-contain  "
            src={`/image/products/${item?.productimage[0]?.imageurl}`}
            alt="Description"
            fill
            sizes="auto"
          />
          <Image
            className=" w-full h-full z-0 opacity-0 scale-90 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 object-cover "
            src={`/image/products/${item?.productimage[1]?.imageurl}`}
            alt="Description"
            fill
            sizes="auto"
          />
        </Link>
        {/* action */}
        <Dialog>
          <div className="absolute transition-all duration-700 translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-0  top-4/5 w-full right-0  px-5 flex justify-between gap-4  ">
            <DialogTrigger asChild>
              <div
                className=" relative cursor-pointer overflow-hidden z-0 rounded-md h-9 gap-1 p-5 flex items-center justify-center bg-white before:content-[''] before:absolute before:inset-[-200px] before:-translate-x-[101%] before:bg-red-500 hover:before:translate-x-0 before:transition-all before:z-[-1] before:duration-700 before:rotate-45 hover:text-white
              transition-all duration-700 "
              >
                <ShoppingBag />
                <span className="  uppercase text-xs font-bold  line-clamp-1 lead-[100%] relative z-0">
                  thêm vào giỏ hàng
                </span>
              </div>
            </DialogTrigger>
            <DialogTrigger asChild>
              <Button
                className="shrink-0 cursor-pointer"
                size={"icon"}
                variant={"default"}
              >
                <Eye></Eye>
              </Button>
            </DialogTrigger>
            <DialogContent className=" sm:max-w-screen block p-5 py-6 w-1/2 ">
              <DialogTitle>
                <VisuallyHidden></VisuallyHidden>
              </DialogTitle>
              <div className="grid grid-cols-2">
                <div className="">
                  <Carousel setApi={setApi}>
                    <CarouselContent>
                      {item.productimage.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="w-full aspect-[4/5] relative">
                            <Image
                              src={`/image/products/${image.imageurl}`}
                              fill
                              alt="Product image"
                              className="object-contain rounded-lg"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                  <Carousel className="w-full" setApi={setApi2}>
                    <CarouselContent className="m-0">
                      {item.productimage.map((image, index) => (
                        <div
                          key={index}
                          className={cn(
                            "relative w-20 aspect-square cursor-pointer",
                            currentImage === index &&
                              "border-2 border-primary rounded-lg"
                          )}
                          onClick={() => setCurrentImage(index)}
                        >
                          <Image
                            src={`/image/products/${image.imageurl}`}
                            alt="Thumbnail"
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
                <div className="px-3 py-5 space-y-5 ">
                  <h1 className="font-bold">{item.name}</h1>
                  <div className=" flex flex-col space-y-1">
                    <span className="text-xs">
                      Mã sản phẩm : <strong>{currentVariant?.sku}</strong>
                    </span>
                    <span className="text-xs">
                      Tình trạng :{" "}
                      <strong>
                        {(currentVariant?.stockquantity || 0) > 0
                          ? "Còn hàng"
                          : "Hết hàng"}
                      </strong>
                    </span>
                  </div>
                  <div className="text-sm p-4 flex space-x-8 bg-amber-100 items-center">
                    <span className="font-bold">Giá :</span>
                    {isDiscount && (
                      <div className="space-x-3 flex items-center">
                        <span>{formatCurrencyVND(item.discountprice)}</span>
                        <span className="line-through">
                          {formatCurrencyVND(item.price)}
                        </span>
                        <span className="text-xs text-white py-1 px-2 rounded-full bg-red-500 ">
                          {" "}
                          {calculateDiscountPercentage(
                            item.price,
                            item?.discountprice || 0
                          )}{" "}
                        </span>
                      </div>
                    )}
                    {!isDiscount && (
                      <span>{formatCurrencyVND(item.price)}</span>
                    )}
                  </div>
                  {/* màu sắc */}
                  <div className="px-4 space-y-2 ">
                    <span className="text-sm inline-block">
                      <strong>Màu sắc : </strong>
                    </span>
                    <div className="">
                      {colors.map((item) => (
                        <button
                          key={item}
                          className={cn(
                            "relative overflow-hidden cursor-pointer text-xs text-center min-w-20 inline-block px-1 py-2 rounded-md border border-gray-300 mr-2 mb-2",
                            item == color ? "border-red-500" : "",
                            selectedType === "size" &&
                              !availableColorsForSize.includes(item)
                              ? "opacity-50 cursor-not-allowed "
                              : ""
                          )}
                          onClick={() => {
                            setColor(item);
                            setSelectedType("color");
                          }}
                          disabled={
                            selectedType === "size" &&
                            !availableColorsForSize.includes(item)
                          }
                        >
                          {item}
                          {selectedType === "size" &&
                            !availableColorsForSize.includes(item) && (
                              <>
                                <span className="absolute rotate-30 bg-red-900 left-0 top-1/2 w-full h-0.25"></span>
                                <span className="absolute -rotate-30 bg-red-900 left-0 bottom-1/2 w-full h-0.25"></span>
                              </>
                            )}
                        </button>
                      ))}
                    </div>
                  </div>
                  {/* kích thước */}
                  <div className="px-4 space-y-2">
                    <span className="text-sm inline-block">
                      <strong>Kích thước : </strong>
                    </span>
                    <div className="">
                      {sizes.map((item) => (
                        <button
                          key={item}
                          className={cn(
                            "relative overflow-hidden cursor-pointer text-xs text-center min-w-20 inline-block px-1 py-2 rounded-md border border-gray-300 mr-2 mb-2",
                            item == size ? "border-red-500" : "",
                            selectedType === "color" &&
                              !availableSizesForColor.includes(item)
                              ? "opacity-50 cursor-not-allowed "
                              : ""
                          )}
                          onClick={() => {
                            setSize(item);
                            setSelectedType("size");
                          }}
                          disabled={
                            selectedType === "color" &&
                            !availableSizesForColor.includes(item)
                          }
                        >
                          {item}
                          {selectedType === "color" &&
                            !availableSizesForColor.includes(item || "") && (
                              <>
                                <span className="absolute rotate-30 bg-red-900 left-0 top-1/2 w-full h-0.25"></span>
                                <span className="absolute -rotate-30 bg-red-900 left-0 bottom-1/2 w-full h-0.25"></span>
                              </>
                            )}
                        </button>
                      ))}
                    </div>
                  </div>
                  {/* số lương */}
                  <div className="px-4">
                    <span className="text-sm inline-block">
                      <strong>Số lượng : </strong>
                    </span>
                    <div className="inline-block">
                      <div className="flex">
                        <Button
                          size={"icon"}
                          variant={"ghost"}
                          onClick={() => {
                            setQuantity((state) => state - 1);
                          }}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <Input
                          readOnly
                          value={quantity}
                          className="inline-block w-16 text-center no-spinner"
                          type={"number"}
                        ></Input>
                        <Button
                          size={"icon"}
                          variant={"ghost"}
                          onClick={() => {
                            setQuantity((state) => state + 1);
                          }}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  {/* btn mua hàng */}
                  <div
                    onClick={() => {
                      addToCart(currentVariant?.sku ||"", quantity);
                    }}
                    className=" relative z-1 overflow-hidden rounded-md text-center border border-red-700 cursor-pointer before:content-[''] before:absolute before:inset-[-200px] before:-translate-x-[101%] before:bg-red-500 hover:before:translate-x-0 before:transition-all before:z-[-1] before:duration-700 before:rotate-45 hover:text-white text-red-700
                                    transition-all duration-700"
                  >
                    {" "}
                    <span className=" text-[16px] font-bold p-5 inline-block ">
                      Thêm vào giỏ
                    </span>
                  </div>
                </div>
              </div>
            </DialogContent>
          </div>
        </Dialog>
      </div>

      <div className="grow flex flex-col px-2 py-[10px] space-y-2">
        <div className="variant flex justify-between text-xs">
          <span>Màu sắc : +{colors?.length}</span>
          <span>Kích thước : +{sizes?.length}</span>
        </div>
        <div className="name grow text-sm font-semibold mb-1 line-clamp-2 ">
          {item.name}
        </div>
        <div className="price text-xs font-semibold flex gap-2">
          <span className="text-sm text-red-500">
            {formatCurrencyVND(item?.discountprice || 0)}{" "}
          </span>
          <span className=" text-sm text-muted-foreground line-through ">
            {formatCurrencyVND(item.price)}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
