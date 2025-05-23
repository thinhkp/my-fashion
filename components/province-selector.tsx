"use client"

import { useState } from "react"
import { Combobox } from "@/components/ui/combobox"

// Danh sách các tỉnh thành Việt Nam
const provinces = [
  { value: "hanoi", label: "Hà Nội" },
  { value: "hochiminh", label: "Hồ Chí Minh" },
  { value: "danang", label: "Đà Nẵng" },
  { value: "haiphong", label: "Hải Phòng" },
  { value: "cantho", label: "Cần Thơ" },
  { value: "angiang", label: "An Giang" },
  { value: "baria-vungtau", label: "Bà Rịa - Vũng Tàu" },
  { value: "bacgiang", label: "Bắc Giang" },
  { value: "backan", label: "Bắc Kạn" },
  { value: "baclieu", label: "Bạc Liêu" },
  { value: "bacninh", label: "Bắc Ninh" },
  { value: "bentre", label: "Bến Tre" },
  { value: "binhdinh", label: "Bình Định" },
  { value: "binhduong", label: "Bình Dương" },
  { value: "binhphuoc", label: "Bình Phước" },
  { value: "binhthuan", label: "Bình Thuận" },
  { value: "camau", label: "Cà Mau" },
  { value: "caobang", label: "Cao Bằng" },
  { value: "daklak", label: "Đắk Lắk" },
  { value: "daknong", label: "Đắk Nông" },
  { value: "dienbien", label: "Điện Biên" },
  { value: "dongnai", label: "Đồng Nai" },
  { value: "dongthap", label: "Đồng Tháp" },
  { value: "gialai", label: "Gia Lai" },
  { value: "hagiang", label: "Hà Giang" },
  { value: "hanam", label: "Hà Nam" },
  { value: "hatinh", label: "Hà Tĩnh" },
  { value: "haiduong", label: "Hải Dương" },
  { value: "haugiang", label: "Hậu Giang" },
  { value: "hoabinh", label: "Hòa Bình" },
  { value: "hungyen", label: "Hưng Yên" },
  { value: "khanhhoa", label: "Khánh Hòa" },
  { value: "kiengiang", label: "Kiên Giang" },
  { value: "kontum", label: "Kon Tum" },
  { value: "laichau", label: "Lai Châu" },
  { value: "lamdong", label: "Lâm Đồng" },
  { value: "langson", label: "Lạng Sơn" },
  { value: "laocai", label: "Lào Cai" },
  { value: "longan", label: "Long An" },
  { value: "namdinh", label: "Nam Định" },
  { value: "nghean", label: "Nghệ An" },
  { value: "ninhbinh", label: "Ninh Bình" },
  { value: "ninhthuan", label: "Ninh Thuận" },
  { value: "phutho", label: "Phú Thọ" },
  { value: "phuyen", label: "Phú Yên" },
  { value: "quangbinh", label: "Quảng Bình" },
  { value: "quangnam", label: "Quảng Nam" },
  { value: "quangngai", label: "Quảng Ngãi" },
  { value: "quangninh", label: "Quảng Ninh" },
  { value: "quangtri", label: "Quảng Trị" },
  { value: "soctrang", label: "Sóc Trăng" },
  { value: "sonla", label: "Sơn La" },
  { value: "tayninh", label: "Tây Ninh" },
  { value: "thaibinh", label: "Thái Bình" },
  { value: "thainguyen", label: "Thái Nguyên" },
  { value: "thanhhoa", label: "Thanh Hóa" },
  { value: "thuathienhue", label: "Thừa Thiên Huế" },
  { value: "tiengiang", label: "Tiền Giang" },
  { value: "travinh", label: "Trà Vinh" },
  { value: "tuyenquang", label: "Tuyên Quang" },
  { value: "vinhlong", label: "Vĩnh Long" },
  { value: "vinhphuc", label: "Vĩnh Phúc" },
  { value: "yenbai", label: "Yên Bái" }
]

interface ProvinceSelectorProps {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function ProvinceSelector({ value, onChange, className }: ProvinceSelectorProps) {
  const [selectedProvince, setSelectedProvince] = useState(value || "");

  const handleProvinceChange = (provinceValue: string) => {
    setSelectedProvince(provinceValue);
    if (onChange) {
      onChange(provinceValue);
    }
  };

  return (
    <div className={className}>
      <Combobox
        options={provinces}
        value={selectedProvince}
        onValueChange={handleProvinceChange}
        placeholder="Chọn tỉnh/thành phố"
        emptyMessage="Không tìm thấy tỉnh/thành phố nào."
      />
    </div>
  );
}
