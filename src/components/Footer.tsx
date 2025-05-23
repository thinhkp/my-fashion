import { Facebook, Twitter, Instagram, Youtube, Music } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "./ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Footer() {
  return (
    <footer className="m-container text-gray-700">
      {/* Mobile View with Accordions */}
      <div className="lg:hidden  bg-white border-y">
        <Accordion type="single" defaultValue="section-4" collapsible className="w-full grid grid-cols-1">
          {/* Section 1 */}
          <AccordionItem value="section-1">
            <AccordionTrigger className="px-6 py-3 font-bold text-red-600">
              Thời trang nam TORANO
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <p className="text-sm mb-6">
                Hệ thống thời trang cho phái mạnh hàng đầu Việt Nam, hướng tới
                phong cách nam tính, lịch lãm và trẻ trung.
              </p>
              <div className="flex space-x-3 mb-6">
                {[Facebook, Twitter, Instagram, Music, Youtube].map(
                  (Icon, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 flex items-center justify-center border rounded-md hover:bg-red-100 cursor-pointer"
                    >
                      <Icon size={20} />
                    </div>
                  )
                )}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Section 2 */}
          <AccordionItem value="section-2">
            <AccordionTrigger className="px-6 py-3 font-bold text-red-600">
              Thông tin liên hệ
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <p className="text-sm mb-2">
                <span className="font-semibold">Địa chỉ:</span> Tầng 8, tòa nhà
                Ford, số 313 Trường Chinh, quận Thanh Xuân, Hà Nội
              </p>
              <p className="text-sm mb-2">
                <span className="font-semibold">Điện thoại:</span> 0964942121
              </p>
              <p className="text-sm mb-2">
                <span className="font-semibold">Fax:</span> 0904636356
              </p>
              <p className="text-sm mb-6">
                <span className="font-semibold">Email:</span> cskh@torano.vn
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Section 3 */}
          <AccordionItem value="section-3">
            <AccordionTrigger className="px-6 py-3 font-bold text-red-600">
              Nhóm liên kết
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <ul className="space-y-2 text-sm">
                {[
                  "Tìm kiếm",
                  "Giới thiệu",
                  "Chính sách đổi trả",
                  "Chính sách bảo mật",
                  "Tuyển dụng",
                  "Liên hệ",
                ].map((item, index) => (
                  <li key={index} className="hover:text-red-500 cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Section 4 */}
          <AccordionItem value="section-4" className="row-start-1">
            <AccordionTrigger className="px-6 py-3 font-bold text-red-600">
              Đăng ký nhận tin
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <p className="text-sm mb-6">
                Để cập nhật những sản phẩm mới, nhận thông tin ưu đãi đặc biệt
                và thông tin giảm giá khác.
              </p>
              <div className="flex mb-6">
                <Input
                  placeholder="Nhập email của bạn"
                  className="rounded-none rounded-l-md"
                />
                <Button className="bg-red-600 hover:bg-red-700 rounded-none rounded-r-md">
                  ĐĂNG KÝ
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Desktop View (unchanged) */}
      <div className="hidden lg:grid lg:grid-cols-4 bg-white border-y">
        {/* Cột 1 */}
        <div className=" relative p-8">
          <h2 className="text-lg font-bold text-red-600 mb-4">
            Thời trang nam TORANO
          </h2>
          <p className="text-sm mb-6">
            Hệ thống thời trang cho phái mạnh hàng đầu Việt Nam, hướng tới phong
            cách nam tính, lịch lãm và trẻ trung.
          </p>
          <div className="flex space-x-3 mb-6">
            {[Facebook, Twitter, Instagram, Music, Youtube].map(
              (Icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 flex items-center justify-center border rounded-md hover:bg-red-100 cursor-pointer"
                >
                  <Icon size={20} />
                </div>
              )
            )}
          </div>

          <Separator
            orientation="vertical"
            className="absolute right-0 top-0"
          />
        </div>

        {/* Cột 2 */}
        <div className=" relative p-8">
          <h2 className="text-lg font-bold text-red-600 mb-4">
            Thông tin liên hệ
          </h2>
          <p className="text-sm mb-2">
            <span className="font-semibold">Địa chỉ:</span> Tầng 8, tòa nhà
            Ford, số 313 Trường Chinh, quận Thanh Xuân, Hà Nội
          </p>
          <p className="text-sm mb-2">
            <span className="font-semibold">Điện thoại:</span> 0964942121
          </p>
          <p className="text-sm mb-2">
            <span className="font-semibold">Fax:</span> 0904636356
          </p>
          <p className="text-sm mb-6">
            <span className="font-semibold">Email:</span> cskh@torano.vn
          </p>

          <Separator
            orientation="vertical"
            className="absolute right-0 top-0"
          />
        </div>

        {/* Cột 3 */}
        <div className=" relative p-8">
          <h2 className="text-lg font-bold text-red-600 mb-4">Nhóm liên kết</h2>
          <ul className="space-y-2 text-sm">
            {[
              "Tìm kiếm",
              "Giới thiệu",
              "Chính sách đổi trả",
              "Chính sách bảo mật",
              "Tuyển dụng",
              "Liên hệ",
            ].map((item, index) => (
              <li key={index} className="hover:text-red-500 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
          <Separator
            orientation="vertical"
            className="absolute right-0 top-0"
          />
        </div>

        {/* Cột 4 */}
        <div className="relative p-8">
          <h2 className="text-lg font-bold text-red-600 mb-4">
            Đăng ký nhận tin
          </h2>
          <p className="text-sm mb-6">
            Để cập nhật những sản phẩm mới, nhận thông tin ưu đãi đặc biệt và
            thông tin giảm giá khác.
          </p>
          <div className="flex mb-6">
            <Input
              placeholder="Nhập email của bạn"
              className="rounded-none rounded-l-md"
            />
            <Button className="bg-red-600 hover:bg-red-700 rounded-none rounded-r-md">
              ĐĂNG KÝ
            </Button>
          </div>
        </div>
      </div>
      <h1 className="text-center text-xl py-4">
        Design Torano. Develop by Thịnh
      </h1>
    </footer>
  );
}
