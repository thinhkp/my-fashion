"use client";

import { useState, ReactNode } from "react";
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
import { Button } from "@/components/ui/button";

interface AdminLayoutProps {
  children: ReactNode;
  activeMenu: string;
}

export default function AdminLayout({
  children,
  activeMenu,
}: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

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
                    onClick={() => setSidebarOpen(false)}
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
      <div className="flex-1 p-4 md:p-6 lg:p-8 pt-4 lg:ml-0">{children}</div>
    </div>
  );
}
