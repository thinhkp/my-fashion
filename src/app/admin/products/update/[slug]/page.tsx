"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useForm, useFieldArray } from "react-hook-form";
import axios from "axios";
import Image from "next/image";

// Types based on your Prisma schema
type Category = {
  id: number;
  name: string;
  description?: string;
  categorystatus: number;
  image?: string;
  slug?: string;
  parentcategoryid?: number;
  isshow: boolean;
};

type Color = {
  id: string;
  name: string;
  code: string;
};

type Size = {
  id: string;
  name: string;
  description: string;
  index: number;
};

type ProductImage = {
  id: number;
  imageurl: string;
  displayorder: number | null;
};

type UploadedImage = {
  id?: number; // For existing images
  file: File;
  preview: string;
  displayorder: number;
  isExisting?: boolean;
};

type ProductVariant = {
  id: number;
  colorid: string;
  sizeid: string;
  sku: string;
  stockquantity: number;
  additionalprice: number | null;
  imageid: number | null;
};

type Product = {
  id: number;
  name: string;
  slug: string;
  description: string;
  sku: string;
  price: number;
  discountprice: number | null;
  status: number;
  isfeatured: boolean;
  productimage: ProductImage[];
  productvariant: ProductVariant[];
  productcategory: { categoryid: number }[];
};

type ProductFormData = {
  name: string;
  slug: string;
  description: string;
  sku: string;
  price: number;
  discountprice: number;
  status: number;
  isfeatured: boolean;
  categoryIds: string[];
  variants: {
    id?: number;
    colorid: string;
    sizeid: string;
    sku: string;
    stockquantity: number;
    additionalprice: number;
    imageid: number | null;
  }[];
};

export default function UpdateProduct() {
  const router = useRouter();
  const params = useParams();
  const productSlug = params.slug;

  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [colors, setColors] = useState<Color[]>([]);
  const [sizes, setSizes] = useState<Size[]>([]);
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [deletedImageIds, setDeletedImageIds] = useState<number[]>([]);
  const [deletedVariantIds, setDeletedVariantIds] = useState<number[]>([]);
  const [product, setProduct] = useState<Product | null>(null);

  // Initialize form
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<ProductFormData>({
    defaultValues: {
      name: "",
      slug: "",
      description: "",
      sku: "",
      price: 0,
      discountprice: 0,
      status: 1,
      isfeatured: false,
      categoryIds: [],
      variants: [],
    },
  });

  const {
    fields: variantFields,
    append: appendVariant,
    remove: removeVariant,
  } = useFieldArray({
    control,
    name: "variants",
  });

  // Fetch product data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      if (!productSlug) {
        alert("No product slug provided");
        router.push("/admin/products");
        return;
      }

      setLoading(true);
      try {
        // Fetch product data by slug
        const response = await axios.get(`/api/products/${productSlug}`);
        const productData = response.data.data;
        setProduct(productData);

        // Fetch categories, colors and sizes
        const [categoriesResponse, colorsResponse, sizesResponse] =
          await Promise.all([
            axios.get("/api/categories"),
            axios.get("/api/colors"),
            axios.get("/api/sizes"),
          ]);

        setCategories(categoriesResponse.data);
        setColors(colorsResponse.data);
        setSizes(sizesResponse.data);

        // Transform existing images to uploadedImages format
        const existingImages = productData.productimage.map(
          (img: ProductImage) => {
            // Ensure image URL has the correct format for existing product images
            const imageUrl = img.imageurl.startsWith("/")
              ? img.imageurl
              : `/image/products/${img.imageurl}`; // Changed from product to products

            return {
              id: img.id,
              file: new File([], "existing_image", { type: "image/jpeg" }),
              preview: imageUrl,
              displayorder: img.displayorder || 0,
              isExisting: true,
            };
          }
        );

        // Sort images by display order
        existingImages.sort(
          (a: UploadedImage, b: UploadedImage) =>
            (a.displayorder || 0) - (b.displayorder || 0)
        );

        setUploadedImages(existingImages);

        // Prepare form data
        reset({
          name: productData.name,
          slug: productData.slug,
          description: productData.description,
          sku: productData.sku,
          price: productData.price,
          discountprice: productData.discountprice || 0,
          status: productData.status,
          isfeatured: productData.isfeatured,
          categoryIds: productData.productcategory.map(
            (pc: { categoryid: number }) => pc.categoryid.toString()
          ),
          variants: productData.productvariant.map(
            (variant: ProductVariant) => ({
              id: variant.id,
              colorid: variant.colorid,
              sizeid: variant.sizeid,
              sku: variant.sku,
              stockquantity: variant.stockquantity,
              additionalprice: variant.additionalprice || 0,
              imageid: variant.imageid,
            })
          ),
        });
      } catch (error) {
        console.error("Error fetching product data:", error);
        alert("Failed to load product data");
        router.push("/admin/products");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productSlug, router, reset]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;

    const files = Array.from(e.target.files);

    // Create URLs for preview
    const newImages = files.map((file, idx) => ({
      file,
      preview: URL.createObjectURL(file),
      displayorder: uploadedImages.length + idx,
    }));

    setUploadedImages([...uploadedImages, ...newImages]);
  };

  const removeImage = (index: number) => {
    const updatedImages = [...uploadedImages];
    const imageToRemove = updatedImages[index];

    // If this is an existing image, add its ID to deletedImageIds
    if (imageToRemove.id) {
      setDeletedImageIds([...deletedImageIds, imageToRemove.id]);
    }

    // Revoke object URL to avoid memory leaks if it's a new image
    if (!imageToRemove.isExisting) {
      URL.revokeObjectURL(imageToRemove.preview);
    }

    // Remove from local state
    updatedImages.splice(index, 1);

    // Reorder remaining images
    updatedImages.forEach((img, idx) => {
      img.displayorder = idx;
    });

    setUploadedImages(updatedImages);
  };

  const addVariant = () => {
    appendVariant({
      colorid: "",
      sizeid: "",
      sku: "",
      stockquantity: 0,
      additionalprice: 0,
      imageid: null,
    });
  };

  // Function to generate variant SKU
  const generateVariantSku = (
    mainSku: string,
    colorId: string,
    sizeId: string
  ): string => {
    if (!mainSku || !colorId || !sizeId) return "";
    return `${mainSku}_${colorId}-${sizeId}`;
  };

  const generateSlug = (name: string): string => {
    return name
      .toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");
  };

  const onSubmit = async (data: ProductFormData) => {
    if (!product?.id) {
      alert("No product ID available");
      return;
    }

    setSubmitLoading(true);

    try {
      // Check if there are any images
      if (uploadedImages.length === 0) {
        throw new Error("At least one product image is required");
      }

      // Create FormData for file uploads
      const formData = new FormData();

      // Add existing images info to formData
      uploadedImages.forEach((img) => {
        if (img.isExisting) {
          // For existing images, just update the displayorder
          formData.append(`existingImageIds`, img.id!.toString());
          formData.append(`existingDisplayorders`, img.displayorder.toString());
        } else {
          // For new images
          formData.append(`newImages`, img.file);
          formData.append(`newDisplayorders`, img.displayorder.toString());
        }
      });

      // Add deleted image IDs
      deletedImageIds.forEach((id) => {
        formData.append("deletedImageIds", id.toString());
      });

      // Add deleted variant IDs
      deletedVariantIds.forEach((id) => {
        formData.append("deletedVariantIds", id.toString());
      });

      // Add the product data
      formData.append(
        "productData",
        JSON.stringify({
          ...data,
          id: product.id,
          slug: data.slug || generateSlug(data.name),
        })
      );

      // Submit to API using axios
      await axios.put(`/api/products/${product.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Product updated successfully");
      router.push("/admin/products");
    } catch (error) {
      console.error("Error updating product:", error);

      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || error.message;
        alert(`Failed to update product: ${errorMessage}`);
      } else {
        alert(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
      }
    } finally {
      setSubmitLoading(false);
    }
  };

  // Watch for SKU changes to update variant SKUs
  const mainSku = watch("sku");
  const watchVariants = watch("variants");

  // Update variant SKUs when main SKU, color, or size changes
  useEffect(() => {
    if (!mainSku) return;

    if (watchVariants) {
      watchVariants.forEach((variant, index) => {
        if (variant.colorid && variant.sizeid && !variant.id) {
          // Only auto-update SKUs for new variants
          const newSku = generateVariantSku(
            mainSku,
            variant.colorid,
            variant.sizeid
          );
          setValue(`variants.${index}.sku`, newSku);
        }
      });
    }
  }, [mainSku, watchVariants, setValue]);

  // Register field change handlers for color and size selects
  const handleColorChange = (index: number, colorId: string) => {
    const variant = watchVariants[index];
    // Only auto-generate SKU if this is a new variant (no ID)
    if (colorId && variant.sizeid && mainSku && !variant.id) {
      const newSku = generateVariantSku(mainSku, colorId, variant.sizeid);
      setValue(`variants.${index}.sku`, newSku);
    }
  };

  const handleSizeChange = (index: number, sizeId: string) => {
    const variant = watchVariants[index];
    // Only auto-generate SKU if this is a new variant (no ID)
    if (variant.colorid && sizeId && mainSku && !variant.id) {
      const newSku = generateVariantSku(mainSku, variant.colorid, sizeId);
      setValue(`variants.${index}.sku`, newSku);
    }
  };

  const handleRemoveVariant = (index: number) => {
    const variant = watchVariants[index];
    if (variant.id) {
      // If this is an existing variant, add its ID to deletedVariantIds
      setDeletedVariantIds([...deletedVariantIds, variant.id]);
    }
    removeVariant(index);
  };

  // Add state to track drag operation
  const [draggedImage, setDraggedImage] = useState<number | null>(null);
  const [dragOverImage, setDragOverImage] = useState<number | null>(null);

  // Handle drag operations
  const handleDragStart = (index: number) => {
    setDraggedImage(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDragOverImage(index);
  };

  const handleDrop = (e: React.DragEvent, index: number) => {
    e.preventDefault();

    if (draggedImage === null || draggedImage === index) return;

    const newImages = [...uploadedImages];
    const draggedItem = newImages[draggedImage];

    // Remove the dragged item
    newImages.splice(draggedImage, 1);

    // Insert it at the new position
    newImages.splice(index, 0, draggedItem);

    // Reset display orders
    newImages.forEach((img, i) => {
      img.displayorder = i;
    });

    setUploadedImages(newImages);
    setDraggedImage(null);
    setDragOverImage(null);
  };

  const handleDragEnd = () => {
    setDraggedImage(null);
    setDragOverImage(null);
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6 flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-lg">Loading product data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        Cập nhật sản phẩm: {product?.name}
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Product Info */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Tên sản phẩm
              </label>
              <input
                type="text"
                {...register("name", { required: "Tên sản phẩm là bắt buộc" })}
                className="w-full border rounded-md p-2"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Đường dẫn (Slug)
              </label>
              <input
                type="text"
                {...register("slug")}
                className="w-full border rounded-md p-2"
                placeholder="tự động tạo nếu để trống"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Mã sản phẩm (SKU)
              </label>
              <input
                type="text"
                {...register("sku", { required: "Mã sản phẩm là bắt buộc" })}
                className="w-full border rounded-md p-2"
              />
              {errors.sku && (
                <p className="text-red-500 text-sm">{errors.sku.message}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Giá</label>
                <input
                  type="number"
                  {...register("price", {
                    required: "Giá là bắt buộc",
                    min: { value: 0, message: "Giá phải lớn hơn 0" },
                    valueAsNumber: true,
                  })}
                  className="w-full border rounded-md p-2"
                />
                {errors.price && (
                  <p className="text-red-500 text-sm">{errors.price.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Giá khuyến mãi
                </label>
                <input
                  type="number"
                  {...register("discountprice", {
                    min: {
                      value: 0,
                      message: "Giá khuyến mãi phải lớn hơn 0",
                    },
                    valueAsNumber: true,
                  })}
                  className="w-full border rounded-md p-2"
                />
                {errors.discountprice && (
                  <p className="text-red-500 text-sm">
                    {errors.discountprice.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Trạng thái
                </label>
                <select
                  {...register("status", {
                    required: "Trạng thái là bắt buộc",
                    valueAsNumber: true,
                  })}
                  className="w-full border rounded-md p-2"
                >
                  <option value={1}>Kích hoạt</option>
                  <option value={0}>Không kích hoạt</option>
                  <option value={2}>Nháp</option>
                </select>
                {errors.status && (
                  <p className="text-red-500 text-sm">
                    {errors.status.message}
                  </p>
                )}
              </div>

              <div className="flex items-center pt-6">
                <input
                  type="checkbox"
                  id="isfeatured"
                  {...register("isfeatured")}
                  className="mr-2"
                />
                <label htmlFor="isfeatured" className="text-sm font-medium">
                  Sản phẩm nổi bật
                </label>
              </div>
            </div>
          </div>

          {/* Categories and Description */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Mô tả sản phẩm
              </label>
              <textarea
                {...register("description", {
                  required: "Mô tả sản phẩm là bắt buộc",
                })}
                rows={5}
                className="w-full border rounded-md p-2"
              />
              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Danh mục</label>
              {categories.length > 0 ? (
                <div className="max-h-60 overflow-y-auto border rounded-md p-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center mb-1">
                      <input
                        type="checkbox"
                        id={`category-${category.id}`}
                        value={category.id}
                        {...register("categoryIds", {
                          required: "Ít nhất một danh mục là bắt buộc",
                        })}
                        className="mr-2"
                      />
                      <label htmlFor={`category-${category.id}`}>
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">Đang tải danh mục...</p>
              )}
              {errors.categoryIds && (
                <p className="text-red-500 text-sm">
                  {errors.categoryIds.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Product Images */}
        <div className="mt-6">
          <h2 className="text-xl font-medium mb-4">Hình ảnh sản phẩm</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Tải lên hình ảnh mới
            </label>
            <input
              type="file"
              onChange={handleImageUpload}
              multiple
              accept="image/*"
              className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            {uploadedImages.length === 0 && (
              <p className="text-red-500 text-sm mt-1">
                Ít nhất một hình ảnh sản phẩm là bắt buộc
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {uploadedImages.map((image, index) => (
              <div
                key={index}
                className={`relative border rounded-md p-2 cursor-move ${
                  draggedImage === index ? "opacity-50 border-dashed" : ""
                } ${dragOverImage === index ? "border-blue-500 border-2" : ""}`}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDrop={(e) => handleDrop(e, index)}
                onDragEnd={handleDragEnd}
              >
                <Image
                  src={image.preview}
                  alt={`Preview ${index}`}
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover rounded-md"
                />
                <div className="absolute top-1 right-1 flex">
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>

                <div className="mt-2 flex justify-between items-center">
                  <div className="text-sm font-medium">
                    {index === 0 ? (
                      <span className="text-green-600">Hình ảnh chính</span>
                    ) : index === 1 ? (
                      <span className="text-blue-600">Hình ảnh phụ</span>
                    ) : (
                      <span className="text-gray-600">
                        Hình ảnh biến thể #{index - 1}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-gray-500 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      />
                    </svg>
                    <span className="text-xs text-gray-500">
                      Kéo để thay đổi thứ tự
                    </span>
                  </div>
                </div>

                <div className="mt-2 text-xs text-gray-500">
                  Thứ tự: {image.displayorder + 1}
                  {image.isExisting ? " (Có sẵn)" : " (Mới)"}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Variants */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium">Biến thể sản phẩm</h2>
            <button
              type="button"
              onClick={addVariant}
              className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm"
            >
              Thêm biến thể
            </button>
          </div>

          {variantFields.length === 0 && (
            <p className="text-gray-500 mb-4">
              Chưa có biến thể nào được thêm. &quot;Nhấn Thêm biến thể&quot; để
              tạo các biến thể cho sản phẩm này.
            </p>
          )}

          {variantFields.map((field, index) => (
            <div key={field.id} className="border rounded-md p-4 mb-4">
              <div className="flex justify-between mb-4">
                <h3 className="font-medium">
                  Biến thể #{index + 1}
                  {field.id && (
                    <span className="text-sm text-gray-500 ml-2">(Có sẵn)</span>
                  )}
                </h3>
                <button
                  type="button"
                  onClick={() => handleRemoveVariant(index)}
                  className="text-red-500"
                >
                  Xóa
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Màu sắc
                  </label>
                  <select
                    {...register(`variants.${index}.colorid`, {
                      required: "Màu sắc là bắt buộc",
                      onChange: (e) => handleColorChange(index, e.target.value),
                    })}
                    className="w-full border rounded-md p-2"
                  >
                    <option value="">Chọn màu sắc</option>
                    {colors.map((color) => (
                      <option key={color.id} value={color.id}>
                        {color.name}
                      </option>
                    ))}
                  </select>
                  {errors.variants?.[index]?.colorid && (
                    <p className="text-red-500 text-sm">
                      {errors.variants[index]?.colorid?.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Kích thước
                  </label>
                  <select
                    {...register(`variants.${index}.sizeid`, {
                      required: "Kích thước là bắt buộc",
                      onChange: (e) => handleSizeChange(index, e.target.value),
                    })}
                    className="w-full border rounded-md p-2"
                  >
                    <option value="">Chọn kích thước</option>
                    {sizes.map((size) => (
                      <option key={size.id} value={size.id}>
                        {size.name}
                      </option>
                    ))}
                  </select>
                  {errors.variants?.[index]?.sizeid && (
                    <p className="text-red-500 text-sm">
                      {errors.variants[index]?.sizeid?.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    SKU biến thể
                  </label>
                  <input
                    type="text"
                    {...register(`variants.${index}.sku`, {
                      required: "Mã sản phẩm là bắt buộc",
                    })}
                    className={`w-full border rounded-md p-2 ${
                      field.id ? "" : "bg-gray-100"
                    }`}
                    readOnly={!field.id} // Only auto-generated for new variants
                  />
                  {errors.variants?.[index]?.sku && (
                    <p className="text-red-500 text-sm">
                      {errors.variants[index]?.sku?.message}
                    </p>
                  )}
                  {!field.id && (
                    <p className="text-xs text-gray-500 mt-1">
                      Tự động tạo: [Mã chính]_[Màu sắc ID]-[Kích thước ID]
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Số lượng tồn kho
                  </label>
                  <input
                    type="number"
                    {...register(`variants.${index}.stockquantity`, {
                      required: "Số lượng tồn kho là bắt buộc",
                      min: { value: 0, message: "Phải lớn hơn hoặc bằng 0" },
                      valueAsNumber: true,
                    })}
                    className="w-full border rounded-md p-2"
                  />
                  {errors.variants?.[index]?.stockquantity && (
                    <p className="text-red-500 text-sm">
                      {errors.variants[index]?.stockquantity?.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Giá thêm
                  </label>
                  <input
                    type="number"
                    {...register(`variants.${index}.additionalprice`, {
                      valueAsNumber: true,
                    })}
                    className="w-full border rounded-md p-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Hình ảnh biến thể
                  </label>
                  <select
                    {...register(`variants.${index}.imageid`, {
                      setValueAs: (value) =>
                        value === "" ? null : Number(value),
                    })}
                    className="w-full border rounded-md p-2"
                  >
                    <option value="">Không có hình ảnh cụ thể</option>
                    {uploadedImages.map((img, imgIndex) => (
                      <option key={imgIndex} value={img.id || imgIndex}>
                        {imgIndex === 0
                          ? "Hình ảnh chính"
                          : imgIndex === 1
                          ? "Hình ảnh phụ"
                          : `Hình ảnh biến thể #${imgIndex - 1}`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => router.push("/admin/products")}
            className="px-6 py-2 border rounded-md"
          >
            Hủy
          </button>

          <button
            type="submit"
            disabled={submitLoading}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300"
          >
            {submitLoading ? "Đang cập nhật..." : "Cập nhật sản phẩm"}
          </button>
        </div>
      </form>
    </div>
  );
}
