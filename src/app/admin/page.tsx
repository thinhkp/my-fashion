"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Settings,
  Users,
  ShoppingBag,
  Layers,
  FileText,
  Tag,
  BarChart2,
  Menu,
  X,
} from "lucide-react";
import useUserInfo from "@/hooks/use-userinfo";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminPage() {
  const { data: userData, isLoading } = useUserInfo();
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar for mobile
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Redirect if not admin
  useEffect(() => {
    if (
      !isLoading &&
      (!userData?.user || !userData?.user?.roles?.includes("Admin"))
    ) {
      router.push("/");
    }
  }, [userData, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Đang tải...
      </div>
    );
  }

  const menuItems = [
    {
      id: "dashboard",
      name: "Tổng quan",
      icon: <BarChart2 className="w-5 h-5 mr-2" />,
      href: "/admin",
    },
    {
      id: "products",
      name: "Sản phẩm",
      icon: <ShoppingBag className="w-5 h-5 mr-2" />,
      href: "/admin/products",
    },
    {
      id: "categories",
      name: "Danh mục",
      icon: <Layers className="w-5 h-5 mr-2" />,
      href: "/admin/categories",
    },
    {
      id: "orders",
      name: "Đơn hàng",
      icon: <FileText className="w-5 h-5 mr-2" />,
      href: "/admin/orders",
    },
    {
      id: "customers",
      name: "Khách hàng",
      icon: <Users className="w-5 h-5 mr-2" />,
      href: "/admin/customers",
    },
    {
      id: "promotions",
      name: "Khuyến mãi",
      icon: <Tag className="w-5 h-5 mr-2" />,
      href: "/admin/promotions",
    },
    {
      id: "settings",
      name: "Cài đặt",
      icon: <Settings className="w-5 h-5 mr-2" />,
      href: "/admin/settings",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Mobile header */}
      <div className="lg:hidden bg-white p-4 flex justify-between items-center shadow-sm">
        <h1 className="text-lg font-bold text-blue-600 flex items-center">
          <Settings className="mr-2" /> Quản trị
        </h1>
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div className="lg:block lg:w-64 hidden">
        <div className="sticky top-0 left-0 h-screen overflow-y-auto">
          <div className="w-full h-full bg-white shadow-md flex flex-col">
            <div className="p-4 border-b flex justify-between items-center">
              <h1 className="text-xl font-bold text-blue-600 flex items-center">
                <Settings className="mr-2" /> Quản trị
              </h1>
            </div>
            <nav className="p-2 overflow-y-auto flex-grow">
              <ul className="space-y-1">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className={`flex items-center p-3 rounded-lg hover:bg-blue-50 ${
                        activeMenu === item.id
                          ? "bg-blue-100 text-blue-600 font-medium"
                          : ""
                      }`}
                      onClick={() => {
                        setActiveMenu(item.id);
                        setSidebarOpen(false); // Close sidebar on mobile after navigation
                      }}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden fixed left-0 top-0 w-3/4 h-full bg-white shadow-md z-50
        transition-transform duration-300 ease-in-out`}
      >
        <div className="w-full h-full flex flex-col">
          <div className="p-4 border-b flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-600 flex items-center">
              <Settings className="mr-2" /> Quản trị
            </h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="lg:hidden"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="p-2 overflow-y-auto flex-grow">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`flex items-center p-3 rounded-lg hover:bg-blue-50 ${
                      activeMenu === item.id
                        ? "bg-blue-100 text-blue-600 font-medium"
                        : ""
                    }`}
                    onClick={() => {
                      setActiveMenu(item.id);
                      setSidebarOpen(false); // Close sidebar on mobile after navigation
                    }}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 lg:p-8 pt-4 lg:ml-0">
        <div className="mb-4 md:mb-6">
          <h1 className="text-xl md:text-2xl font-bold">Tổng quan hệ thống</h1>
          <p className="text-gray-500">
            Xin chào, {userData?.user?.name || "Admin"}!
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Doanh thu hôm nay / tháng
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl md:text-2xl font-bold">10.000.000₫</div>
              <p className="text-xs text-green-500 flex items-center mt-1">
                +12% so với tháng trước
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Số đơn hàng hôm nay
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl md:text-2xl font-bold">56 đơn</div>
              <p className="text-xs text-green-500 flex items-center mt-1">
                +8.5% so với hôm qua
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Sản phẩm sắp hết hàng
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl md:text-2xl font-bold">12 sản phẩm</div>
              <p className="text-xs text-orange-500 flex items-center mt-1">
                Cần nhập thêm hàng
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Khách hàng mới
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl md:text-2xl font-bold">24 người</div>
              <p className="text-xs text-green-500 flex items-center mt-1">
                Trong 7 ngày qua
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-6 md:mb-8">
          <Button className="bg-blue-600 hover:bg-blue-700 text-xs md:text-sm">
            <ShoppingBag className="w-4 h-4 mr-1 md:mr-2" /> Thêm sản phẩm mới
          </Button>
          <Button variant="outline" className="text-xs md:text-sm">
            <FileText className="w-4 h-4 mr-1 md:mr-2" /> Xem báo cáo
          </Button>
        </div>

        {/* Recent Orders Preview */}
        <div className="bg-white p-3 md:p-6 rounded-lg shadow-sm">
          <h2 className="text-base md:text-lg font-medium mb-3 md:mb-4">
            Đơn hàng gần đây
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mã đơn
                  </th>
                  <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Khách hàng
                  </th>
                  <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tổng tiền
                  </th>
                  <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Trạng thái
                  </th>
                  <th className="hidden sm:table-cell px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ngày
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  {
                    id: 2301,
                    customer: "Khách 1",
                    total: "1793095đ",
                    status: "Đang xử lý",
                    date: "5/21/2025",
                  },
                  {
                    id: 2302,
                    customer: "Khách 2",
                    total: "760458đ",
                    status: "Mới",
                    date: "5/21/2025",
                  },
                  {
                    id: 2303,
                    customer: "Khách 3",
                    total: "215594đ",
                    status: "Hoàn thành",
                    date: "5/21/2025",
                  },
                  {
                    id: 2304,
                    customer: "Khách 4",
                    total: "803787đ",
                    status: "Đang xử lý",
                    date: "5/21/2025",
                  },
                  {
                    id: 2305,
                    customer: "Khách 5",
                    total: "442836đ",
                    status: "Mới",
                    date: "5/21/2025",
                  },
                ].map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-3 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900">
                      #ORD-{order.id}
                    </td>
                    <td className="px-3 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-500">
                      {order.customer}
                    </td>
                    <td className="px-3 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-500">
                      {order.total}
                    </td>
                    <td className="px-3 md:px-6 py-2 md:py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          order.status === "Hoàn thành"
                            ? "bg-green-100 text-green-800"
                            : order.status === "Đang xử lý"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="hidden sm:table-cell px-3 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-500">
                      {order.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
