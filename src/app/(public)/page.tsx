
import Slider from "@/components/Slider";

import CateSection from "@/components/CateSection";
import DiscountSection from "@/components/DiscountSection";
import CateWithProducts from "@/components/CateWithProducts";
import ServiceInfo from "@/components/ServiceInfo";

export default async function Home() {
  

  return (
    <>
      <Slider className="mb-[20px]" />
      <CateSection/>
      <DiscountSection/>
      <CateWithProducts index={0} />
      <CateWithProducts index={1} />
      <ServiceInfo/>
    </>
  );
}
