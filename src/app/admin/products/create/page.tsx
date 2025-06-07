"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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

type UploadedImage = {
  file: File;
  preview: string;
  displayorder: number;
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
    colorid: string;
    sizeid: string;
    sku: string;
    stockquantity: number;
    additionalprice: number;
    imageid: number | null;
  }[];
};

export default function CreateProduct() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [colors, setColors] = useState<Color[]>([]);
  const [sizes, setSizes] = useState<Size[]>([]);
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);

  // Update main form instance to properly watch sku field
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
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

  // Fetch categories, colors and sizes on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Using axios for API calls
        const [categoriesResponse, colorsResponse, sizesResponse] =
          await Promise.all([
            axios.get("/api/categories"),
            axios.get("/api/colors"),
            axios.get("/api/sizes"),
          ]);

        setCategories(categoriesResponse.data);
        setColors(colorsResponse.data);
        setSizes(sizesResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        if (axios.isAxiosError(error)) {
          alert(`Error fetching data: ${error.message}`);
        }
      }
    };

    fetchData();
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;

    const files = Array.from(e.target.files);

    // Create URLs for preview
    const newImages = files.map((file, idx) => ({
      file,
      preview: URL.createObjectURL(file),
      displayorder: uploadedImages.length + idx, // Assign sequential orders
    }));

    setUploadedImages([...uploadedImages, ...newImages]);
  };

  const removeImage = async (index: number) => {
    const updatedImages = [...uploadedImages];

    // Revoke object URL to avoid memory leaks
    URL.revokeObjectURL(updatedImages[index].preview);

    // Only attempt to delete from server if this was an already uploaded file
    if (updatedImages[index].file.name.startsWith("uploaded_")) {
      try {
        // Extract the filename from the file object
        const filename = updatedImages[index].file.name.replace(
          "uploaded_",
          ""
        );

        // Call API to delete the file
        await axios.delete(
          `/api/upload/image?filename=${encodeURIComponent(filename)}`
        );
      } catch (error) {
        console.error("Failed to delete image from server:", error);
        // Continue with UI removal even if server deletion fails
      }
    }

    // Remove from local state
    updatedImages.splice(index, 1);

    // Reorder remaining images to ensure continuous sequence
    updatedImages.forEach((img, idx) => {
      img.displayorder = idx;
    });

    setUploadedImages(updatedImages);
  };

  const addVariant = () => {
    appendVariant({
      colorid: "",
      sizeid: "",
      sku: "", // Will be auto-generated when color and size are selected
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
      .toLowerCase() // Chuyển thành chữ thường
      .normalize("NFD") // Tách các dấu ra khỏi chữ cái
      .replace(/[\u0300-\u036f]/g, "") // Loại bỏ các dấu
      .replace(/[^\w ]+/g, "") // Loại bỏ các ký tự đặc biệt
      .replace(/ +/g, "-") // Thay thế dấu cách bằng dấu gạch ngang
      .replace(/^-+|-+$/g, ""); // Loại bỏ dấu gạch ngang ở đầu và cuối
  };

  const onSubmit = async (data: ProductFormData) => {
    setLoading(true);

    try {
      // Check if there are any images to upload
      if (uploadedImages.length === 0) {
        throw new Error("At least one product image is required");
      }

      // Create FormData for file uploads
      const formData = new FormData();

      // Add all images to formData
      uploadedImages.forEach((img) => {
        formData.append(`images`, img.file);
        formData.append(`displayorders`, img.displayorder.toString());
      });

      // Add the rest of the form data
      formData.append(
        "productData",
        JSON.stringify({
          ...data,
          slug: data.slug || generateSlug(data.name),
        })
      );

      // Submit to API using axios
      await axios.post("/api/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error("Error creating product:", error);

      if (axios.isAxiosError(error)) {
        // Handle Axios specific errors
        const errorMessage = error.response?.data?.message || error.message;
        alert(`Failed to create product: ${errorMessage}`);
      } else {
        // Handle generic errors
        alert(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
      }
    } finally {
      setLoading(false);
    }
  };

  // Watch for SKU changes to update variant SKUs
  const mainSku = watch("sku");
  const watchVariants = watch("variants");

  // Update variant SKUs when main SKU, color, or size changes
  useEffect(() => {
    if (!mainSku) return;

    // Update all existing variants
    if (watchVariants) {
      watchVariants.forEach((variant, index) => {
        if (variant.colorid && variant.sizeid) {
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
    if (colorId && variant.sizeid && mainSku) {
      const newSku = generateVariantSku(mainSku, colorId, variant.sizeid);
      setValue(`variants.${index}.sku`, newSku);
    }
  };

  const handleSizeChange = (index: number, sizeId: string) => {
    const variant = watchVariants[index];
    if (variant.colorid && sizeId && mainSku) {
      const newSku = generateVariantSku(mainSku, variant.colorid, sizeId);
      setValue(`variants.${index}.sku`, newSku);
    }
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

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create New Product</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Product Info */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Product Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Product name is required" })}
                className="w-full border rounded-md p-2"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Slug (optional)
              </label>
              <input
                type="text"
                {...register("slug")}
                className="w-full border rounded-md p-2"
                placeholder="tự động tạo nếu để trống"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">SKU</label>
              <input
                type="text"
                {...register("sku", { required: "SKU is required" })}
                className="w-full border rounded-md p-2"
              />
              {errors.sku && (
                <p className="text-red-500 text-sm">{errors.sku.message}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Price</label>
                <input
                  type="number"
                  {...register("price", {
                    required: "Price is required",
                    min: { value: 0, message: "Price must be positive" },
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
                  Discount Price
                </label>
                <input
                  type="number"
                  {...register("discountprice", {
                    min: {
                      value: 0,
                      message: "Discount price must be positive",
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
                <label className="block text-sm font-medium mb-1">Status</label>
                <select
                  {...register("status", {
                    required: "Status is required",
                    valueAsNumber: true,
                  })}
                  className="w-full border rounded-md p-2"
                >
                  <option value={1}>Active</option>
                  <option value={0}>Inactive</option>
                  <option value={2}>Draft</option>
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
                  Featured Product
                </label>
              </div>
            </div>
          </div>

          {/* Categories and Description */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                {...register("description", {
                  required: "Description is required",
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
              <label className="block text-sm font-medium mb-1">
                Categories
              </label>
              {categories.length > 0 ? (
                <div className="max-h-60 overflow-y-auto border rounded-md p-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center mb-1">
                      <input
                        type="checkbox"
                        id={`category-${category.id}`}
                        value={category.id}
                        {...register("categoryIds", {
                          required: "At least one category is required",
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
                <p className="text-gray-500">Loading categories...</p>
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
          <h2 className="text-xl font-medium mb-4">Product Images</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Upload Images
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
                At least one product image is required
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
                {/*  */}
                <Image
                  src={image.preview}
                  alt={`Preview ${index}`}
                  width={300} // Kích thước cố định
                  height={200}
                  className="object-cover w-75 h-50  rounded-md"
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
                      <span className="text-green-600">Main Image</span>
                    ) : index === 1 ? (
                      <span className="text-blue-600">Sub Image</span>
                    ) : (
                      <span className="text-gray-600">
                        Variant Image #{index - 1}
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
                      Drag to reorder
                    </span>
                  </div>
                </div>

                <div className="mt-2 text-xs text-gray-500">
                  Order: {image.displayorder + 1} {/* Display 1-based index */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Variants */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium">Product Variants</h2>
            <button
              type="button"
              onClick={addVariant}
              className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm"
            >
              Add Variant
            </button>
          </div>

          {variantFields.length === 0 && (
            <p className="text-gray-500 mb-4">
              No variants added yet. Click &quot;Add Variant&quot; to create
              variations of this product.
            </p>
          )}

          {variantFields.map((field, index) => (
            <div key={field.id} className="border rounded-md p-4 mb-4">
              <div className="flex justify-between mb-4">
                <h3 className="font-medium">Variant #{index + 1}</h3>
                <button
                  type="button"
                  onClick={() => removeVariant(index)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Color
                  </label>
                  <select
                    {...register(`variants.${index}.colorid`, {
                      required: "Color is required",
                      onChange: (e) => handleColorChange(index, e.target.value),
                    })}
                    className="w-full border rounded-md p-2"
                  >
                    <option value="">Select Color</option>
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
                  <label className="block text-sm font-medium mb-1">Size</label>
                  <select
                    {...register(`variants.${index}.sizeid`, {
                      required: "Size is required",
                      onChange: (e) => handleSizeChange(index, e.target.value),
                    })}
                    className="w-full border rounded-md p-2"
                  >
                    <option value="">Select Size</option>
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
                    Variant SKU
                  </label>
                  <input
                    type="text"
                    {...register(`variants.${index}.sku`)}
                    className="w-full border rounded-md p-2 bg-gray-100"
                    readOnly
                    placeholder="Auto-generated from main SKU"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Auto-generated: [Main SKU]_[Color ID]-[Size ID]
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Stock Quantity
                  </label>
                  <input
                    type="number"
                    {...register(`variants.${index}.stockquantity`, {
                      required: "Stock quantity is required",
                      min: { value: 0, message: "Must be 0 or greater" },
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
                    Additional Price
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
                    Variant Image
                  </label>
                  <select
                    {...register(`variants.${index}.imageid`, {
                      setValueAs: (value) =>
                        value === "" ? null : Number(value),
                    })}
                    className="w-full border rounded-md p-2"
                  >
                    {uploadedImages.map((img, imgIndex) => (
                      <option key={imgIndex} value={imgIndex}>
                        {imgIndex === 0
                          ? "Main Image"
                          : imgIndex === 1
                          ? "Sub Image"
                          : `Variant Image #${imgIndex - 1}`}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-gray-500 mt-1">
                    Main image is the default product image
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-2 border rounded-md"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300"
          >
            {loading ? "Creating..." : "Create Product"}
          </button>
        </div>
      </form>
    </div>
  );
}
