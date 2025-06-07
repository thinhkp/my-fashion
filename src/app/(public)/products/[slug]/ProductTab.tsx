"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import React, { useMemo, useState } from "react";

const ProductTab = () => {
  const [tab, setTab] = useState(0);

  const tabList = useMemo(() => {
    return [
      {
        value: (
          <>
            {/* Tiêu đề chính */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 sm:mb-8 md:mb-10">
              CHÍNH SÁCH ĐỔI SẢN PHẨM TORANO
            </h2>

            {/* 1. Chính sách áp dụng */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-6 sm:mt-8 md:mt-12 mb-3 sm:mb-4 md:mb-6">
              1. CHÍNH SÁCH ÁP DỤNG
            </h3>
            <p className="mb-3 sm:mb-4">
              Chính sách có hiệu lực từ ngày 01/09/2018.
            </p>
            <p className="mb-3 sm:mb-4">
              Áp dụng trong vòng 30 ngày kể từ ngày mua sản phẩm với các sản
              phẩm TORANO.
            </p>
            <p className="mb-3 sm:mb-4">
              Áp dụng đối với sản phẩm nguyên giá và sản phẩm giảm giá ít hơn
              50%.
            </p>
            <p className="mb-3 sm:mb-4">
              Sản phẩm nguyên giá chỉ được đổi 01 lần duy nhất sang sản phẩm
              nguyên giá khác và không thấp hơn giá trị sản phẩm đã mua.
            </p>
            <p className="mb-3 sm:mb-4">
              Sản phẩm giảm giá/khuyến mại ít hơn 50% được đổi 01 lần sang màu
              khác hoặc size khác trên cùng 1 mã trong điều kiện còn sản phẩm
              hoặc theo quy chế chương trình (nếu có). Nếu sản phẩm đổi đã hết
              hàng khi đó KH sẽ được đổi sang sản phẩm khác có giá trị ngang
              bằng hoặc cao hơn. Khách hàng sẽ thanh toán phần tiền chênh lệch
              nếu sản phẩm đổi có giá trị cao hơn sản phẩm đã mua.
            </p>
            <p className="mb-3 sm:mb-4">
              Chính sách chỉ áp dụng khi sản phẩm còn hóa đơn mua hàng, còn
              nguyên nhãn mác, thẻ bài đính kèm sản phẩm và sản phẩm không bị dơ
              bẩn, hư hỏng bởi những tác nhân bên ngoài cửa hàng sau khi mua sản
              phẩm.
            </p>
            <p className="mb-3 sm:mb-4">
              Sản phẩm đồ lót và phụ kiện không được đổi trả.
            </p>

            {/* 2. Điều kiện đổi sản phẩm */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-6 sm:mt-8 md:mt-12 mb-3 sm:mb-4 md:mb-6">
              2. ĐIỀU KIỆN ĐỔI SẢN PHẨM
            </h3>
            <p className="mb-3 sm:mb-4">
              Đổi hàng trong vòng 07 ngày kể từ ngày khách hàng nhận được sản
              phẩm.
            </p>
            <p className="mb-3 sm:mb-4">
              Sản phẩm còn nguyên tem, mác và chưa qua sử dụng.
            </p>

            {/* 3. Thực hiện đổi sản phẩm */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-6 sm:mt-8 md:mt-12 mb-3 sm:mb-4 md:mb-6">
              3. THỰC HIỆN ĐỔI SẢN PHẨM
            </h3>
            <p className="mb-3 sm:mb-4">
              Quý khách có thể đổi hàng Online tại hệ thống cửa hàng và đại lý
              TORANO trên toàn quốc.
              <span className="font-semibold"> Lưu ý:</span> vui lòng mang theo
              sản phẩm và phiếu giao hàng.
            </p>
            <p className="mb-3 sm:mb-4">
              Nếu tại khu vực bạn không có cửa hàng TORANO hoặc sản phẩm bạn
              muốn đổi thì vui lòng làm theo các bước sau:
            </p>

            {/* Danh sách các bước */}
            <ul className="list-decimal list-inside mb-3 sm:mb-4 space-y-1 sm:space-y-2 pl-2">
              <li>
                Gọi đến Tổng đài: 0964942121 các ngày trong tuần (trừ ngày lễ),
                cung cấp mã đơn hàng và mã sản phẩm cần đổi.
              </li>
              <li>
                Gửi hàng đổi về địa chỉ: Kho Online TORANO - 1165 Giải Phóng,
                Thịnh Liệt, Q. Hoàng Mai, Hà Nội.
              </li>
              <li>
                TORANO gửi đổi sản phẩm mới khi nhận được hàng. Trong trường hợp
                hết hàng, TORANO sẽ liên hệ xác nhận.
              </li>
            </ul>
          </>
        ),
        label: "Chính sách đổi trả",
      },
      {
        value: (
          <>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 sm:mb-8 md:mb-10">
              BẢO MẬT THÔNG TIN KHÁCH HÀNG TORANO
            </h2>

            {/* 1. Thu thập và sử dụng */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-6 sm:mt-8 md:mt-12 mb-3 sm:mb-4 md:mb-6">
              1. Thu thập và sử dụng thông tin của TORANO
            </h3>
            <p className="mb-3 sm:mb-4">
              TORANO chỉ thu thập các loại thông tin cơ bản liên quan đến đơn
              đặt hàng gồm:…
            </p>
            <p className="mb-3 sm:mb-4">
              Các thông tin này được sử dụng nhằm mục đích xử lý đơn hàng, nâng
              cao chất lượng dịch vụ, nghiên cứu thị trường, các hoạt động
              marketing, chăm sóc khách hàng, quản lý nội bộ hoặc theo yêu cầu
              của pháp luật. Khách hàng tùy từng thời điểm có thể chỉnh sửa lại
              các thông tin đã cung cấp để đảm bảo được hưởng đầy đủ các quyền
              mà TORANO dành cho Khách hàng của mình.
            </p>
            <p className="mb-3 sm:mb-4">
              <strong>TORANO cam kết:</strong>
            </p>
            <ul className="list-disc list-inside mb-4 sm:mb-8 space-y-1 sm:space-y-2 pl-2">
              <li>
                Thông tin cá nhân của khách hàng được sử dụng đúng vào mục đích
                của việc thu thập và cung cấp;
              </li>
              <li>
                Mọi việc thu thập và sử dụng thông tin đã thu thập được của
                Khách hàng đều được thông qua ý kiến của Khách hàng;
              </li>
              <li>
                Chỉ sử dụng các thông tin được Khách hàng đã cung cấp cho
                TORANO, không sử dụng các thông tin của Khách hàng được biết đến
                theo các phương thức khác;
              </li>
            </ul>

            <p className="mb-4">
              <strong>Thời gian lưu trữ và bảo mật thông tin:</strong>
            </p>
            <p className="mb-3 sm:mb-4">
              Chỉ cho phép các đối tượng sau được tiếp cận với thông tin của
              Khách hàng:
            </p>
            <ul className="list-disc list-inside mb-4 sm:mb-8 space-y-1 sm:space-y-2 pl-2">
              <li>
                Người thực hiện việc cung cấp hàng hóa, dịch vụ từ TORANO theo
                yêu cầu của Khách hàng;
              </li>
              <li>
                Người thực hiện việc chăm sóc Khách hàng đã sử dụng hàng hóa,
                dịch vụ của TORANO;
              </li>
              <li>
                Người tiếp nhận và xử lý các thắc mắc của Khách hàng trong quá
                trình sử dụng hàng hóa, dịch vụ của TORANO;
              </li>
              <li>Cơ quan Nhà nước có thẩm quyền.</li>
            </ul>

            <p className="mb-3 sm:mb-4">
              Trong quá trình chào hàng, quảng cáo và chăm sóc Khách hàng, Khách
              hàng hoàn toàn có thể gửi yêu cầu dừng việc sử dụng thông tin theo
              cách thức tương ứng mà hoạt động chào hàng, quảng cáo và chăm sóc
              khách hàng gửi tới Khách hàng.
            </p>

            {/* 2. Cách thức bảo mật */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-6 sm:mt-8 md:mt-12 mb-3 sm:mb-4 md:mb-6">
              2. Cách thức bảo mật thông tin khách hàng
            </h3>
            <p className="mb-3 sm:mb-4">
              Việc bảo mật các thông tin do Khách hàng cung cấp được dựa trên sự
              đảm bảo việc tuân thủ của từng cán bộ, nhân viên TORANO, đối tác
              và hệ thống lưu trữ dữ liệu. Trong trường hợp máy chủ lưu trữ
              thông tin bị hacker tấn công dẫn đến mất mát dữ liệu cá nhân Khách
              hàng, TORANO sẽ có trách nhiệm thông báo vụ việc cho cơ quan chức
              năng điều tra xử lý kịp thời và thông báo cho Khách hàng được
              biết.
            </p>
            <p className="mb-3 sm:mb-4">
              Tuy nhiên, do đặc điểm của môi trường internet, không một dữ liệu
              nào trên môi trường mạng cũng có thể được bảo mật 100%. Vì vậy,
              TORANO không cam kết chắc chắn rằng các thông tin tiếp nhận từ
              Khách hàng được bảo mật tuyệt đối.
            </p>

            {/* 3. Trách nhiệm bảo mật */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-6 sm:mt-8 md:mt-12 mb-3 sm:mb-4 md:mb-6">
              3. Trách nhiệm bảo mật thông tin Khách hàng
            </h3>
            <p className="mb-3 sm:mb-4">
              Khách hàng vui lòng chỉ cung cấp đúng và đủ các thông tin theo yêu
              cầu của TORANO đặc biệt tránh cung cấp các thông tin liên quan đến
              tài khoản ngân hàng khi chưa được mã hóa thông tin trong các giao
              dịch thanh toán trực tuyến hoặc các thông tin nhạy cảm khác.
            </p>
            <p className="mb-3 sm:mb-4">
              Khách hàng hoàn toàn chịu trách nhiệm về tính trung thực và chính
              xác đối với các thông tin đã cung cấp cũng như tự chịu trách nhiệm
              nếu cung cấp các thông tin ngoài yêu cầu.
            </p>
            <p className="mb-3 sm:mb-4">
              Trong trường hợp Khách hàng cung cấp thông tin cá nhân của mình
              cho nhiều tổ chức, cá nhân khác nhau, Khách hàng phải yêu cầu các
              bên liên quan cùng bảo mật. Mọi thông tin cá nhân của Khách hàng
              khi bị tiết lộ gây thiệt hại, Khách hàng phải tự xác định được
              nguồn tiết lộ thông tin. TORANO không chịu trách nhiệm nếu không
              có căn cứ rõ ràng cho thấy TORANO là bên tiết lộ thông tin.
            </p>
            <p className="mb-3 sm:mb-4">
              TORANO không chịu trách nhiệm về việc tiết lộ thông tin của Khách
              hàng nếu Khách hàng không tuân thủ các yêu cầu trên.
            </p>

            {/* 4. Luật áp dụng */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-6 sm:mt-8 md:mt-12 mb-3 sm:mb-4 md:mb-6">
              4. Luật áp dụng khi xảy ra tranh chấp
            </h3>
            <p className="mb-3 sm:mb-4">
              Mọi tranh chấp xảy ra giữa Khách hàng và TORANO sẽ được hòa giải.
              Nếu hòa giải không thành, tranh chấp sẽ được giải quyết tại Tòa án
              có thẩm quyền và tuân theo pháp luật Việt Nam.
            </p>
          </>
        ),
        label: "Chính sách bảo mật",
      },
      {
        value: (
          <div className="mt-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 sm:mb-8 md:mb-10">
              CÂU HỎI THƯỜNG GẶP
            </h2>
            <p className="text-center text-gray-500 italic">
              Nội dung đang được cập nhật...
            </p>
          </div>
        ),
        label: "Câu hỏi thường gặp",
      },
    ];
  }, []);

  return (
    <div className="m-container my-5 sm:my-8 md:my-10 px-3 sm:px-4">
      <Tabs defaultValue={tabList[tab].label} className="">
        <TabsList className="w-full mb-5 sm:mb-8 md:mb-10 h-auto flex flex-col sm:flex-row overflow-x-auto gap-2 sm:gap-0">
          {tabList.map((item, index) => (
            <div className="w-full sm:w-auto" key={index}>
              <TabsTrigger
                className="text-base sm:text-lg md:text-2xl font-semibold sm:font-bold text-gray-400 p-3 sm:p-5 md:p-8 w-full sm:w-auto"
                value={item.label}
                onClick={() => {
                  setTab(index);
                }}
              >
                {item.label}
              </TabsTrigger>
            </div>
          ))}
        </TabsList>
        <div className="border-t border-gray-200 pt-4 sm:pt-6">
          {tabList.map((item, index) => (
            <TabsContent
              key={index}
              value={item.label}
              className="text-sm sm:text-base"
            >
              {item.value}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default ProductTab;
