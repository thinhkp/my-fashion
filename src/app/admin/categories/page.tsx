"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Edit,
  Trash2,
  Plus,
  Search,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  RefreshCcw,
  Loader2,
  FolderIcon,
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

// Category interface
interface Category {
  id: number;
  name: string;
  description: string | null;
  categorystatus: number;
  image: string | null;
  slug: string | null;
  parentcategoryid: number | null;
  isshow: boolean;
}

// API function to fetch categories
const fetchCategories = async () => {
  const { data } = await axios.get("/api/admin/categories");
  return data as Category[];
};

// Helper function to get status text
const getCategoryStatusText = (status: number): string => {
  switch (status) {
    case 1:
      return "Hoạt động";
    case 0:
      return "Không hoạt động";
    default:
      return "Không xác định";
  }
};

// Helper function for status badge color
const getStatusBadgeClass = (status: number): string => {
  switch (status) {
    case 1:
      return "bg-green-100 text-green-800 hover:bg-green-100";
    case 0:
      return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const categoriesPerPage = 10;
  const router = useRouter();

  // States for delete dialog
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState<Category | null>(
    null
  );
  const [isDeleting, setIsDeleting] = useState(false);

  // Use React Query to fetch categories
  const {
    data: categories = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["admin-categories"],
    queryFn: fetchCategories,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });

  // Handle delete button click
  const handleDeleteClick = (category: Category) => {
    setCategoryToDelete(category);
    setIsDeleteDialogOpen(true);
  };

  // Handle category deletion
  const handleDeleteCategory = async () => {
    if (!categoryToDelete) return;

    setIsDeleting(true);
    try {
      // Call the DELETE API endpoint
      await axios.delete(`/api/admin/categories/${categoryToDelete.id}`);

      // Show success notification
      toast.success("Xóa danh mục thành công", {
        description: `Danh mục "${categoryToDelete.name}" đã được xóa khỏi hệ thống.`,
      });

      // Refresh the category list
      refetch();
    } catch (error) {
      console.error("Lỗi khi xóa danh mục:", error);

      // Show error notification
      toast.error("Xóa danh mục thất bại", {
        description: axios.isAxiosError(error)
          ? error.response?.data.error || "Không thể xóa danh mục"
          : "Đã xảy ra lỗi khi xóa danh mục",
      });
    } finally {
      setIsDeleting(false);
      setIsDeleteDialogOpen(false);
      setCategoryToDelete(null);
    }
  };

  // Handle search
  const filteredCategories = categories
    ? categories.filter((category) => {
        const searchLower = searchTerm.toLowerCase().trim();
        return (
          (category.name &&
            category.name.toLowerCase().includes(searchLower)) ||
          (category.description &&
            category.description.toLowerCase().includes(searchLower))
        );
      })
    : [];

  // Handle sorting
  const sortedCategories = [...filteredCategories].sort((a, b) => {
    if (!sortField) return 0;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let aValue: any = null,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    bValue: any = null;

    if (sortField === "name") {
      aValue = a.name || "";
      bValue = b.name || "";
    } else if (sortField === "status") {
      aValue = a.categorystatus || 0;
      bValue = b.categorystatus || 0;
    } else if (
      a[sortField as keyof Category] !== undefined &&
      b[sortField as keyof Category] !== undefined
    ) {
      aValue = a[sortField as keyof Category];
      bValue = b[sortField as keyof Category];
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
  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = sortedCategories.slice(
    indexOfFirstCategory,
    indexOfLastCategory
  );
  const totalPages = Math.ceil(sortedCategories.length / categoriesPerPage);

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  // Find parent category name
  const getParentCategoryName = (parentId: number | null): string => {
    if (!parentId) return "Không có";
    const parent = categories.find((cat) => cat.id === parentId);
    return parent ? parent.name : "Không tìm thấy";
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Quản lý danh mục
          </h2>
          <p className="text-muted-foreground">
            Quản lý danh mục sản phẩm của cửa hàng
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
            <Link
              href={"/admin/categories/create"}
              className="flex items-center"
            >
              <Plus className="mr-2 h-4 w-4" /> Thêm danh mục
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex items-center py-4">
        <div className="relative max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Tìm theo tên danh mục..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8 w-[300px]"
          />
        </div>
        <div className="ml-auto flex gap-2">
          <Badge variant="outline" className="ml-auto">
            Tổng: {filteredCategories.length} danh mục
          </Badge>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          {isLoading ? (
            <div className="p-8 space-y-4">
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
          ) : !categories || categories.length === 0 ? (
            <div className="text-center p-8">
              <p className="text-gray-500 mb-4">
                Không có danh mục nào trong hệ thống
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
                      className="min-w-[200px]"
                      onClick={() => handleSort("name")}
                    >
                      <div className="flex items-center cursor-pointer">
                        Tên danh mục
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead className="min-w-[200px]">Mô tả</TableHead>
                    <TableHead>Danh mục cha</TableHead>
                    <TableHead>Hiển thị</TableHead>
                    <TableHead
                      onClick={() => handleSort("categorystatus")}
                      className="min-w-[100px]"
                    >
                      <div className="flex items-center cursor-pointer">
                        Trạng thái
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead className="text-right">Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentCategories.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={8} className="text-center py-8">
                        Không tìm thấy danh mục nào
                      </TableCell>
                    </TableRow>
                  ) : (
                    currentCategories.map((category) => (
                      <TableRow key={`category-${category.id}`}>
                        <TableCell className="font-medium">
                          {category.id}
                        </TableCell>
                        <TableCell>
                          {category.image ? (
                            <div className="relative h-16 w-16 overflow-hidden rounded-md">
                              <div
                                className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                                style={{
                                  backgroundImage: `url(/image/categories/${
                                    category.image
                                  }?t=${Date.now()})`,
                                  backgroundSize: "cover",
                                }}
                              />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/30">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    window.open(
                                      `/image/categories/${category.image}`,
                                      "_blank"
                                    );
                                  }}
                                  className="text-white text-xs p-1 hover:bg-white/20 rounded"
                                  title="Xem ảnh đầy đủ"
                                >
                                  Xem
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div className="h-16 w-16 rounded-md bg-gray-200 flex items-center justify-center">
                              <FolderIcon className="h-8 w-8 text-gray-400" />
                            </div>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{category.name}</div>
                          {category.slug && (
                            <div className="text-xs text-gray-500">
                              {category.slug}
                            </div>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            {category.description || "Không có mô tả"}
                          </div>
                        </TableCell>
                        <TableCell>
                          {getParentCategoryName(category.parentcategoryid)}
                        </TableCell>
                        <TableCell>
                          {category.isshow ? (
                            <Badge
                              variant="default"
                              className="bg-blue-100 text-blue-800 hover:bg-blue-100"
                            >
                              Hiển thị
                            </Badge>
                          ) : (
                            <Badge variant="outline">Ẩn</Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={getStatusBadgeClass(
                              category.categorystatus
                            )}
                          >
                            {getCategoryStatusText(category.categorystatus)}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              size="icon"
                              variant="ghost"
                              title="Chỉnh sửa"
                              onClick={() => {
                                router.push(
                                  `/admin/categories/edit/${category.id}`
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
                              onClick={() => handleDeleteClick(category)}
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
      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Xác nhận xóa danh mục</AlertDialogTitle>
            <AlertDialogDescription>
              Bạn có chắc chắn muốn xóa danh mục &quot;{categoryToDelete?.name}&quot;?
              <br />
              Việc này có thể ảnh hưởng đến các sản phẩm thuộc danh mục này.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Hủy bỏ</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteCategory}
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
