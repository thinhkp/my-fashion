import { Package, Repeat, Headphones, CreditCard } from "lucide-react";

export default function ServiceInfo() {
  return (
    <div className="my-container grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 p-8 max-w-screen-xl mx-auto">
      {/* Item */}
      <div className="flex flex-row items-start ">
        <Package className="mr-4 w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 flex-shrink-0" />
        <div className="text-left">
          <p className="font-semibold text-base md:text-lg xl:text-xl w-full">
            Miễn phí vận chuyển
          </p>
          <p className="text-sm md:text-base text-gray-600">
            Áp dụng cho mọi đơn hàng từ 500k
          </p>
        </div>
      </div>

      {/* Item */}
      <div className="flex flex-row items-start ">
        <Repeat className="mr-4 w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 flex-shrink-0" />
        <div className="text-left">
          <p className="font-semibold text-base md:text-lg xl:text-xl w-full">
            Đổi hàng dễ dàng
          </p>
          <p className="text-sm md:text-base text-gray-600">
            7 ngày đổi hàng vì bất kì lí do gì
          </p>
        </div>
      </div>

      {/* Item */}
      <div className="flex flex-row items-start ">
        <Headphones className="mr-4 w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 flex-shrink-0" />
        <div className="text-left">
          <p className="font-semibold text-base md:text-lg xl:text-xl w-full">
            Hỗ trợ nhanh chóng
          </p>
          <p className="text-sm md:text-base text-gray-600">
            HOTLINE 24/7 : 0964942121
          </p>
        </div>
      </div>

      {/* Item */}
      <div className="flex flex-row items-start ">
        <CreditCard className="mr-4 w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 flex-shrink-0" />
        <div className="text-left">
          <p className="font-semibold text-base md:text-lg xl:text-xl w-full">
            Thanh toán đa dạng
          </p>
          <p className="text-sm md:text-base text-gray-600">
            Thanh toán khi nhận hàng, Napas, Visa, Chuyển Khoản
          </p>
        </div>
      </div>
    </div>
  );
}
