"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {  useState } from "react";
import {
  ShoppingBag,
  FileText,
  BarChart2,
  Layers,
  Menu,
  Settings,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AdminPage({ children }: { children: React.ReactNode }) {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Toggle sidebar for mobile
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Helper function to determine if a menu item is active
  const isActive = (href: string) => {
    if (href === "/admin" && pathname === "/admin") {
      return true;
    }
    if (href !== "/admin" && pathname.startsWith(href)) {
      return true;
    }
    return false;
  };

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
        <div className="flex items-center">
          <Link href="/" className="flex items-center mr-2">
            <Image src="/logo.png" alt="Logo" width={32} height={32} />
          </Link>
          <span className="text-lg font-bold text-blue-600">Quản trị</span>
        </div>
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
            <div className="p-4 border-b flex flex-col gap-5 items-center">
              <Link href="/" className=" flex items-center mr-2 w-40">
                <Image
                  src="/image/logo.webp"
                  alt="Logo"
                  width={1000}
                  height={600}
                  className="w-full h-auto"
                />
              </Link>
              <span className="text-xl font-bold text-blue-600">Quản trị</span>
            </div>
            <nav className="p-2 overflow-y-auto flex-grow">
              <ul className="space-y-1">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className={`flex items-center p-3 rounded-lg hover:bg-blue-50 ${
                        isActive(item.href)
                          ? "bg-blue-100 text-blue-600 font-medium"
                          : ""
                      }`}
                      onClick={() => {
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
            <div className="flex items-center">
              <Link href="/" className="flex items-center mr-2">
                <Image src="/logo.png" alt="Logo" width={32} height={32} />
              </Link>
              <span className="text-xl font-bold text-blue-600">Quản trị</span>
            </div>
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
                      isActive(item.href)
                        ? "bg-blue-100 text-blue-600 font-medium"
                        : ""
                    }`}
                    onClick={() => {
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
      <div className="flex-1 p-3 sm:p-4 md:p-6 lg:p-8 overflow-x-auto">
        <div className="max-w-full mx-auto">{children}</div>
      </div>
    </div>
  );
}
