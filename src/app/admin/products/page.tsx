"use client";

import {useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingBag,
  Edit,
  Trash2,
  Search,
  Eye,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  RefreshCcw,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ProductStatus } from "@/constants/product-status";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface Product {
  id: number;
  name: string;
  slug: string;
  sku: string;
  price: number;
  discountprice: number | null;
  status: number; // Changed from string to number to match ProductStatus enum
  isfeatured: boolean;
  productimage: Array<{ id: number; imageurl: string }>;
  productcategory: Array<{
    id: number;
    category: { id: number; name: string; slug: string };
  }>;
}

// Helper function to convert status number to text
const getStatusText = (status: number): string => {
  switch (status) {
    case ProductStatus.Active:
      return "Đang bán";
    case ProductStatus.OutOfStock:
      return "Hết hàng";
    case ProductStatus.ComingSoon:
      return "Đang nhập hàng";
    case ProductStatus.Discontinued:
      return "Ngừng kinh doanh";
    case ProductStatus.Hidden:
      return "Đã ẩn";
    default:
      return "Không xác định";
  }
};

// Helper function to get status badge color
const getStatusBadgeClass = (status: number): string => {
  switch (status) {
    case ProductStatus.Active:
      return "bg-green-100 text-green-800 hover:bg-green-100";
    case ProductStatus.OutOfStock:
      return "bg-red-100 text-red-800 hover:bg-red-100";
    case ProductStatus.ComingSoon:
      return "bg-blue-100 text-blue-800 hover:bg-blue-100";
    case ProductStatus.Discontinued:
      return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    case ProductStatus.Hidden:
      return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

// API functions
const fetchProducts = async () => {
  const { data } = await axios.get("/api/products");
  return data as Product[];
};

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const router = useRouter();

  // States for delete dialog
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Use React Query to fetch products
  const {
    data: products = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });

  // Handle delete button click
  const handleDeleteClick = (product: Product) => {
    setProductToDelete(product);
    setIsDeleteDialogOpen(true);
  };

  // Handle product deletion
  const handleDeleteProduct = async () => {
    if (!productToDelete) return;

    setIsDeleting(true);
    try {
      // Call the existing DELETE API endpoint
      await axios.delete(`/api/products/${productToDelete.slug}`);
 
      // Show success notification
      toast.success("Xóa sản phẩm thành công", {
        description: `Sản phẩm "${productToDelete.name}" đã được xóa khỏi hệ thống.`,
      });

      // Refresh the product list
      refetch();
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error);

      // Show error notification
      toast.error("Xóa sản phẩm thất bại", {
        description: axios.isAxiosError(error)
          ? error.response?.data.error || "Không thể xóa sản phẩm"
          : "Đã xảy ra lỗi khi xóa sản phẩm",
      });
    } finally {
      setIsDeleting(false);
      setIsDeleteDialogOpen(false);
      setProductToDelete(null);
    }
  };

  // Handle search - with improved error handling
  const filteredProducts = products
    ? products.filter((product) => {
        const searchLower = searchTerm.toLowerCase().trim();
        return (
          (product.name && product.name.toLowerCase().includes(searchLower)) ||
          (product.sku && product.sku.toLowerCase().includes(searchLower))
        );
      })
    : [];

  // Handle sorting - with improved error handling
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (!sortField) return 0;
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    let aValue: any = null;
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    let bValue: any = null;
      

    if (sortField === "price") {
      aValue = a.price || 0;
      bValue = b.price || 0;
    } else if (sortField === "name") {
      aValue = a.name || "";
      bValue = b.name || "";
    } else if (sortField === "status") {
      // Sort by status text for better UX
      aValue = getStatusText(a.status || 0);
      bValue = getStatusText(b.status || 0);
    } else if (
      a[sortField as keyof Product] !== undefined &&
      b[sortField as keyof Product] !== undefined
    ) {
      aValue = a[sortField as keyof Product];
      bValue = b[sortField as keyof Product];
    }

    // Handle different data types for sorting
    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortDirection === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    } else {
      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
      return 0;
    }
  });

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  // Format currency
  const formatCurrency = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Quản lý sản phẩm
          </h2>
          <p className="text-muted-foreground">
            Quản lý danh sách sản phẩm của cửa hàng
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => refetch()}
            disabled={isLoading}
            title="Làm mới"
          >
            <RefreshCcw
              className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`}
            />
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Link href={"/admin/products/create"} className="flex items-center">
              Thêm sản phẩm
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex items-center py-4">
        <div className="relative max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Tìm theo tên hoặc SKU..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8 w-[300px]"
          />
        </div>
        <div className="ml-auto flex gap-2">
          <Badge variant="outline" className="ml-auto">
            Tổng: {filteredProducts.length} sản phẩm
          </Badge>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          {isLoading ? (
            <div className="p-8 space-y-4">
              {/* Add unique keys to mapped skeleton items */}
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={`skeleton-${i}`}
                  className="flex items-center space-x-4"
                >
                  <Skeleton className="h-12 w-12 rounded-md" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center p-8">
              <p className="text-red-500 mb-4">
                Lỗi khi tải dữ liệu: {(error as Error).message}
              </p>
              <Button variant="outline" onClick={() => refetch()}>
                <RefreshCcw className="mr-2 h-4 w-4" /> Thử lại
              </Button>
            </div>
          ) : !products || products.length === 0 ? (
            <div className="text-center p-8">
              <p className="text-gray-500 mb-4">
                Không có sản phẩm nào trong hệ thống
              </p>
              <Button variant="outline" onClick={() => refetch()}>
                <RefreshCcw className="mr-2 h-4 w-4" /> Làm mới dữ liệu
              </Button>
            </div>
          ) : (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">ID</TableHead>
                    <TableHead className="w-[80px]">Ảnh</TableHead>
                    <TableHead
                      className="min-w-[150px]"
                      onClick={() => handleSort("name")}
                    >
                      <div className="flex items-center cursor-pointer">
                        Tên sản phẩm
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead onClick={() => handleSort("price")}>
                      <div className="flex items-center cursor-pointer">
                        Giá
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead onClick={() => handleSort("status")}>
                      <div className="flex items-center cursor-pointer">
                        Trạng thái
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead>Danh mục</TableHead>
                    <TableHead className="text-right">Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentProducts.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={8} className="text-center py-8">
                        Không tìm thấy sản phẩm nào
                      </TableCell>
                    </TableRow>
                  ) : (
                    currentProducts.map((product) => (
                      <TableRow key={`product-${product.id}`}>
                        <TableCell className="font-medium">
                          {product.id}
                        </TableCell>
                        <TableCell>
                          {product.productimage &&
                          product.productimage.length > 0 ? (
                            <div className="relative h-10 w-10 overflow-hidden rounded-md">
                              <Image
                                src={`/image/products/${product.productimage[0].imageurl}`}
                                alt={product.name}
                                fill
                                sizes="40px"
                                className="object-cover"
                              />
                            </div>
                          ) : (
                            <div className="h-10 w-10 rounded-md bg-gray-200 flex items-center justify-center">
                              <ShoppingBag className="h-5 w-5 text-gray-400" />
                            </div>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{product.name}</div>
                          {product.isfeatured && (
                            <Badge variant="secondary" className="mt-1">
                              Nổi bật
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>{product.sku}</TableCell>
                        <TableCell>
                          <div className="font-medium">
                            {formatCurrency(product.price)}
                          </div>
                          {product.discountprice && (
                            <div className="text-sm line-through text-muted-foreground">
                              {formatCurrency(product.discountprice)}
                            </div>
                          )}
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={getStatusBadgeClass(product.status)}
                          >
                            {getStatusText(product.status)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {product.productcategory &&
                              product.productcategory.map((cat) => (
                                <Badge
                                  key={`cat-${product.id}-${cat.id}`}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {cat.category.name}
                                </Badge>
                              ))}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              size="icon"
                              variant="ghost"
                              title="Xem chi tiết"
                              onClick={() => {
                                router.push(
                                  `/admin/products/detail/${product.slug}`
                                );
                              }}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              title="Chỉnh sửa"
                              onClick={() => {
                                router.push(
                                  `/admin/products/edit/${product.slug}`
                                );
                              }}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="text-red-500"
                              title="Xóa"
                              onClick={() => handleDeleteClick(product)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center space-x-2 py-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <div className="text-sm font-medium">
                    Trang {currentPage} / {totalPages}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setCurrentPage(Math.min(totalPages, currentPage + 1))
                    }
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </>
          )}
        </CardContent>
      </Card>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Xác nhận xóa sản phẩm</AlertDialogTitle>
            <AlertDialogDescription>
              Bạn có chắc chắn muốn xóa sản phẩm &quot;{productToDelete?.name}&quot;?
              <br />
              Hành động này không thể hoàn tác và sẽ xóa tất cả hình ảnh và biến thể của sản phẩm.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Hủy bỏ</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteProduct}
              disabled={isDeleting}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              {isDeleting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Đang xóa...
                </>
              ) : (
                "Xác nhận xóa"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
