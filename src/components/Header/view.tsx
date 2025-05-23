"use client";

import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Menu, Settings } from "lucide-react"; // Thêm icon Settings
import User from "../User";
import Search from "../Search";
import { useEffect, useRef, useState } from "react";
import { Drawer } from "@/components/ui/drawer";
import Cart from "../Cart";
import { HomeSection, HomeSectionContent } from "../my-ui/home-section";
import { Button } from "../ui/button";
import { DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "../ui/drawer";
import { Category } from "@/types/model";
import Image from "next/image";
import Link from "next/link";
import useUserInfo from "@/hooks/use-userinfo"; // Thêm hook để lấy thông tin user

interface ScrollHeaderProps {
  cates: Category[];
}

const ScrollHeader: React.FC<ScrollHeaderProps> = ({  cates }) => {
  const [allowOpen, setAllowOpen] = useState(true)
  const { data: userData } = useUserInfo(); // Lấy thông tin user
  const isAdmin = userData?.user?.roles?.includes('Admin'); // Kiểm tra quyền admin

  const lastPosition = useRef(0);
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {

      const currentPosition = window.scrollY;

      const isDown = currentPosition > lastPosition.current;

      if (isDown) {
        // Scrolling down
        if (element.current) {
          element.current.style.transform = "translateY(-100%)";
          element.current.style.opacity = "0";
           setAllowOpen(false)
        }
      } else {
        // Scrolling up
        if (element.current) {
          element.current.style.transform = "translateY(0)";
          element.current.style.opacity = "1";
          setAllowOpen(true)
         
        }
      }
      lastPosition.current = currentPosition;

    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={element}
      className={`bg-white sticky z-1 top-0 w-full transition-all duration-500`}
    >
      <div className="z-1 w-full">
        <HomeSection className="py-0 md:py-0">
          <HomeSectionContent>
            <div className="flex justify-between items-center">
              {/* Hamburger menu button */}
              <div className="max-lg:block hidden">
                <Drawer direction="left">
                  <DrawerTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Menu className="" />
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent className="">
                    <DrawerHeader>
                      <DrawerTitle>Menu</DrawerTitle>
                      <DrawerDescription>Danh mục sản phẩm</DrawerDescription>
                    </DrawerHeader>
                    <div className="px-4">
                      <ul className="space-y-4">
                        {cates.map((item) => (
                          <li key={item.id} className="block">
                            <Link
                              href={`/collections/${item.slug}`}
                              className="text-lg font-bold"
                            >
                              {item.name}
                            </Link>

                            {item.childcategory.length > 0 && (
                              <ul className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
                                {item.childcategory.map((child) => (
                                  <li key={child.id} className="block">
                                    <Link
                                      href={`/collections/${child.slug}`}
                                      className="text-sm"
                                    >
                                      {child.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                        
                        {/* Thêm liên kết admin trong drawer nếu người dùng có quyền admin */}
                        {isAdmin && (
                          <li className="block">
                            <Link
                              href="/admin"
                              className="text-lg font-bold text-blue-600 flex items-center"
                            >
                              <Settings className="mr-1 h-4 w-4" /> Quản trị
                            </Link>
                          </li>
                        )}
                      </ul>
                    </div>
                    <DrawerFooter>
                      <DrawerClose asChild>
                        <Button variant="outline">Đóng</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </div>

              {/* logo */}
              <Link href={"/"} className="block">
                <Image
                  height={50}
                  width={220}
                  alt="logo"
                  src={"/image/logo.webp"}
                  style={{ width: "100%", height: "auto" }}
                />
              </Link>
              {/* nav */}
              <div className="lg:block hidden">
                <TooltipProvider>
                  <ul className="flex">
                    {cates.map((item) => (
                      <Tooltip key={item.id}>
                        <li className="block relative mx-4">
                          <TooltipTrigger asChild>
                            <Link
                              href={`/collections/${item.slug}`}
                              className="py-8 text-[16px] inline-block font-bold"
                            >
                              {item.name}
                            </Link>
                          </TooltipTrigger>
                        </li>
                        {item.childcategory.length > 0 && (
                          <TooltipContent
                            sideOffset={5}
                            align="start"
                            className="bg-white text-current [&>span:has(svg)]:hidden "
                          >
                            <ul>
                              {item.childcategory.map((item) => {
                                return (
                                  <li key={item.id} className="block relative">
                                    <Link
                                      href={`/collections/${item.slug}`}
                                      className="py-2 mx-1 text-sm inline-block font-bold"
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </TooltipContent>
                        )}
                      </Tooltip>
                    ))}
                    
                    {/* Thêm nav link quản trị nếu user có quyền admin */}
                    {isAdmin && (
                      <li className="block relative mx-4">
                        <Link
                          href="/admin"
                          className="py-8 text-[16px]  font-bold text-blue-600 flex items-center"
                        >
                          <Settings className="mr-1 h-4 w-4" /> Quản trị
                        </Link>
                      </li>
                    )}
                  </ul>
                </TooltipProvider>
              </div>

              {/* action */}
              <div className="action flex">
                <span className="p-2 cursor-pointer">
                  <Search />
                </span>
                <span className="p-2 cursor-pointer">
                  <User allowOpen={allowOpen} />
                </span>
                <span className="p-2 cursor-pointer">
                  <Cart />
                </span>
              </div>
            </div>
          </HomeSectionContent>
        </HomeSection>
      </div>
    </div>
  );
};

export default ScrollHeader;