"use client";

import { formatCurrencyVND } from "@/utils/format";
import { Product, ProductWithRelations } from "@/types/model";
import { Input } from "@/components/ui/input";
import {
  Truck,
  ShieldCheck,
  Phone,
  Repeat,
  CheckCircle,
  Store,
  Slash,
} from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";
import useCart from "@/hooks/use-cart";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";
import { Button } from "../../../../components/ui/button";

type Props = {
  product: Product;
};

const ProductDetail = ({ product }: Props) => {
  const { productvariant } = product;

  // Extract unique colors and sizes using the same approach as ProductCard
  const colors = useMemo(
    () =>
      productvariant
        .map((item) => item.color.name)
        .filter((item, i, a) => i == a.indexOf(item)),
    [productvariant]
  );

  const sizes = useMemo(
    () =>
      productvariant
        .map((item) => item.size.name)
        .filter((item, i, a) => i == a.indexOf(item)),
    [productvariant]
  );

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(sizes[0]);
  const [color, setColor] = useState(colors[0]);
  const [selectedType, setSelectedType] = useState("color");
  const [api, setApi] = useState<CarouselApi>();
  const [api2, setApi2] = useState<CarouselApi>();
  const [currentImage, setCurrentImage] = useState(0);

  // Logic to find image for selected color (from ProductCard)
  const findImageIndexForColor = useMemo(() => {
    if (!color) return 0;

    // Find variant with corresponding color and linked to an image
    const variantWithImage = productvariant.find(
      (variant) => variant.color.name === color && variant.image
    );

    if (variantWithImage?.image) {
      // Find index of the image in productimage array
      const imageIndex = product.productimage.findIndex(
        (img) => img.id === variantWithImage.image?.id
      );

      if (imageIndex !== -1) {
        return imageIndex;
      }
    }

    // If not found, return the first image
    return 0;
  }, [color, productvariant, product.productimage]);

  // Effect to update carousel when color changes
  useEffect(() => {
    if (api) {
      setCurrentImage(findImageIndexForColor);
      api.scrollTo(findImageIndexForColor);
    }
  }, [color, findImageIndexForColor, api]);

  // Available sizes for the selected color
  const availableSizesForColor = useMemo(() => {
    return productvariant
      .filter((variant) => variant.color.name === color)
      .map((variant) => variant.size.name);
  }, [color, productvariant]);

  // Available colors for the selected size
  const availableColorsForSize = useMemo(() => {
    return productvariant
      .filter((variant) => variant.size.name === size)
      .map((variant) => variant.color.name);
  }, [size, productvariant]);

  // Update size or color when the other selection changes
  useEffect(() => {
    if (selectedType === "color" && !availableSizesForColor.includes(size)) {
      setSize(availableSizesForColor[0]);
    } else if (
      selectedType === "size" &&
      !availableColorsForSize.includes(color)
    ) {
      setColor(availableColorsForSize[0]);
    }
  }, [
    color,
    size,
    selectedType,
    availableSizesForColor,
    availableColorsForSize,
  ]);

  // Effect on carousel1
  useEffect(() => {
    if (!api) return;
    api.scrollTo(currentImage);

    api.on("select", () => {
      setCurrentImage(api?.selectedScrollSnap() || 0);
    });
  }, [api, currentImage]);

  // Find the current variant based on selected color and size
  const currentVariant = useMemo(() => {
    return productvariant.find(
      (item) => item.color.name === color && item.size.name === size
    );
  }, [size, color, productvariant]);

  // Calculate final price including variant's additional price
  const finalPrice = useMemo(() => {
    if (!product) return 0;
    const basePrice = product.price || 0;
    const additionalPrice = currentVariant?.additionalprice || 0;
    return basePrice + additionalPrice;
  }, [product, currentVariant]);

  // Calculate final discount price if available
  const finalDiscountPrice = useMemo(() => {
    if (
      !product ||
      product.discountprice === null ||
      product.discountprice === undefined
    ) {
      return null;
    }
    const additionalPrice = currentVariant?.additionalprice || 0;
    return product.discountprice + additionalPrice;
  }, [product, currentVariant]);


  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!currentVariant || !product) return;
    addToCart(currentVariant.sku, quantity);
  };

  // Get product status text
  const getStockStatusText = () => {
    if (!currentVariant) return "Không có sẵn";

    if ((currentVariant.stockquantity || 0) > 0) {
      return "Còn hàng";
    } else {
      return "Hết hàng";
    }
  };

  return (
    <>
      <div className="m-container bg-[#f5f5f5] py-2">
        <Breadcrumb>
          <BreadcrumbList className="flex-wrap">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={`/collections/${
                  product.productcategory[0]?.category?.slug || "#"
                }`}
              >
                {product.productcategory[0]?.category?.name || "Danh mục"}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-xs sm:text-sm truncate max-w-[200px] sm:max-w-none">
                {product.name}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="m-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-12 lg:col-span-4 space-y-4 px-3 py-5">
            <Carousel className="w-full" setApi={setApi}>
              <CarouselContent>
                {product.productimage.map((image, index) => (
                  <CarouselItem key={`main-image-${index}`}>
                    <div className="w-full aspect-[3/4] relative">
                      <Image
                        src={`/image/products/${image.imageurl}`}
                        fill
                        alt={`${product.name} - Hình ${index + 1}`}
                        className="object-contain rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-1 sm:left-5 w-8 h-8 sm:w-10 sm:h-10" />
              <CarouselNext className="right-1 sm:right-5 w-8 h-8 sm:w-10 sm:h-10" />
            </Carousel>
            <div className="hidden sm:block">
              <Carousel className="w-full" setApi={setApi2}>
                <CarouselContent className="m-0 flex flex-wrap justify-center">
                  {product.productimage.map((image, index) => (
                    <div
                      key={`thumb-image-${index}`}
                      className={cn(
                        "relative w-16 sm:w-20 aspect-square cursor-pointer",
                        currentImage === index &&
                          "border-2 border-primary rounded-lg"
                      )}
                      onClick={() => setCurrentImage(index)}
                    >
                      <Image
                        src={`/image/products/${image.imageurl}`}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex left-5 w-8 h-8" />
                <CarouselNext className="hidden md:flex right-5 w-8 h-8" />
              </Carousel>
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:hidden">
              {product.productimage.slice(0, 4).map((image, index) => (
                <div
                  key={`mobile-thumb-${index}`}
                  className={cn(
                    "relative w-16 aspect-square cursor-pointer",
                    currentImage === index &&
                      "border-2 border-primary rounded-lg"
                  )}
                  onClick={() => {
                    setCurrentImage(index);
                    api?.scrollTo(index);
                  }}
                >
                  <Image
                    src={`/image/products/${image.imageurl}`}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
              {product.productimage.length > 4 && (
                <div className="relative w-16 aspect-square cursor-pointer bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs">
                    +{product.productimage.length - 4}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="md:col-span-12 lg:col-span-8 px-3 py-5">
            <div className="lg:grid lg:grid-cols-12 gap-4">
              <div className="lg:col-span-8">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1">
                  {product.name}
                </h1>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="text-xs">
                    Mã sản phẩm: <strong>{currentVariant?.sku || "N/A"}</strong>
                  </span>
                  <span className="text-xs">
                    Tình trạng: <strong>{getStockStatusText()}</strong>
                  </span>
                </div>
                <div className="p-3 sm:p-4 mb-5 rounded-md bg-gray-100">
                  <span className="min-w-20 sm:min-w-30 inline-block text-sm sm:text-base">
                    Giá:
                  </span>
                  {finalDiscountPrice !== null ? (
                    <>
                      <span className="text-red-500 font-semibold mr-2 text-lg sm:text-xl">
                        {formatCurrencyVND(finalDiscountPrice)}
                      </span>
                      <span className="text-gray-500 line-through mr-2 text-sm">
                        {formatCurrencyVND(finalPrice)}
                      </span>
                    </>
                  ) : (
                    <span className="font-semibold text-lg sm:text-xl">
                      {formatCurrencyVND(finalPrice)}
                    </span>
                  )}
                  {currentVariant?.additionalprice && (
                    <div className="text-xs text-gray-500 mt-1">
                      (Đã bao gồm phụ phí:{" "}
                      {formatCurrencyVND(currentVariant.additionalprice)})
                    </div>
                  )}
                </div>
                <div className="p-2 sm:p-4 flex flex-col gap-5">
                  <div className="color flex flex-wrap items-center">
                    <span className="min-w-20 sm:min-w-30 inline-block mb-2 sm:mb-0">
                      Màu sắc:
                    </span>
                    <div className="flex flex-wrap">
                      {colors.map((item) => (
                        <span
                          key={`color-${item}`}
                          className={cn(
                            "cursor-pointer text-xs text-center min-w-[60px] inline-block px-1 py-2 rounded-md border border-gray-300 mr-2 mb-2",
                            item === color ? "border-red-500" : "",
                            selectedType === "size" &&
                              !availableColorsForSize.includes(item)
                              ? "opacity-50 cursor-not-allowed relative overflow-hidden"
                              : ""
                          )}
                          onClick={() => {
                            if (
                              selectedType !== "size" ||
                              availableColorsForSize.includes(item)
                            ) {
                              setColor(item);
                              setSelectedType("color");
                            }
                          }}
                        >
                          {item}
                          {selectedType === "size" &&
                            !availableColorsForSize.includes(item) && (
                              <>
                                <span className="absolute rotate-[30deg] bg-red-500 left-0 top-1/2 w-full h-[1px]"></span>
                                <span className="absolute rotate-[-30deg] bg-red-500 left-0 bottom-1/2 w-full h-[1px]"></span>
                              </>
                            )}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="size flex flex-wrap items-center">
                    <span className="min-w-20 sm:min-w-30 inline-block mb-2 sm:mb-0">
                      Kích thước:
                    </span>
                    <div className="flex flex-wrap">
                      {sizes.map((item) => (
                        <span
                          key={`size-${item}`}
                          className={cn(
                            "cursor-pointer text-xs text-center min-w-[60px] inline-block px-1 py-2 rounded-md border border-gray-300 mr-2 mb-2",
                            item === size ? "border-red-500" : "",
                            selectedType === "color" &&
                              !availableSizesForColor.includes(item)
                              ? "opacity-50 cursor-not-allowed relative overflow-hidden"
                              : ""
                          )}
                          onClick={() => {
                            if (
                              selectedType !== "color" ||
                              availableSizesForColor.includes(item)
                            ) {
                              setSize(item);
                              setSelectedType("size");
                            }
                          }}
                        >
                          {item}
                          {selectedType === "color" &&
                            !availableSizesForColor.includes(item) && (
                              <>
                                <span className="absolute rotate-[30deg] bg-red-500 left-0 top-1/2 w-full h-[1px]"></span>
                                <span className="absolute rotate-[-30deg] bg-red-500 left-0 bottom-1/2 w-full h-[1px]"></span>
                              </>
                            )}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="quantity flex flex-wrap items-center">
                    <span className="min-w-20 sm:min-w-30 inline-block mb-2 sm:mb-0">
                      Số lượng:
                    </span>
                    <div className="flex items-center">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 sm:h-10 sm:w-10"
                        onClick={() =>
                          setQuantity((prev) => Math.max(1, prev - 1))
                        }
                        disabled={quantity <= 1}
                      >
                        -
                      </Button>
                      <Input
                        type="number"
                        value={quantity}
                        onChange={(e) => {
                          const val = parseInt(e.target.value);
                          if (!isNaN(val) && val > 0) {
                            setQuantity(val);
                          }
                        }}
                        className="w-12 sm:w-16 mx-2 text-center h-8 sm:h-10"
                        min={1}
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 sm:h-10 sm:w-10"
                        onClick={() => setQuantity((prev) => prev + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 mb-6 sm:mb-10 relative z-0">
                  <span
                    onClick={handleAddToCart}
                    className="relative z-1 overflow-hidden rounded-md text-center border border-red-700 cursor-pointer before:content-[''] before:absolute before:inset-[-200px] before:-translate-x-[101%] before:bg-red-500 hover:before:translate-x-0 before:transition-all before:z-[-1] before:duration-700 before:rotate-45 hover:text-white text-red-700 transition-all duration-700"
                  >
                    <span className="text-sm sm:text-base font-bold p-3 sm:p-5 inline-block">
                      Thêm vào giỏ
                    </span>
                  </span>

                  <span className="relative z-1 overflow-hidden bg-red-600 text-white rounded-md text-center cursor-pointer before:content-[''] before:absolute before:inset-[-200px] before:-translate-x-[101%] before:bg-red-500 hover:before:translate-x-0 before:transition-all before:z-[-1] before:duration-700 before:rotate-45 hover:text-white transition-all duration-700">
                    <span className="text-sm sm:text-base font-bold p-3 sm:p-5 inline-block">
                      Mua ngay
                    </span>
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-xs sm:text-sm">
                  {/* 1 */}
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Truck className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
                    <p>Miễn phí giao hàng cho đơn hàng từ 500K</p>
                  </div>

                  {/* 2 */}
                  <div className="flex items-start gap-2 sm:gap-3">
                    <ShieldCheck className="text-purple-500 w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
                    <p>Hàng phân phối chính hãng 100%</p>
                  </div>

                  {/* 3 */}
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Phone className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
                    <p>TỔNG ĐÀI 24/7: 0964942121</p>
                  </div>

                  {/* 4 */}
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Repeat className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
                    <p>
                      ĐỔI SẢN PHẨM DỄ DÀNG (Trong vòng 7 ngày khi còn nguyên tem
                      mác)
                    </p>
                  </div>

                  {/* 5 */}
                  <div className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="text-purple-400 w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
                    <p>Kiểm tra, thanh toán khi nhận hàng COD</p>
                  </div>

                  {/* 6 */}
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Store className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
                    <p>Hỗ trợ bảo hành, đổi sản phẩm tại tất cả store TORANO</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
