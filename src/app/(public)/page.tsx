import {
  HomeSection,
  HomeSectionHeader,
} from "@/components/my-ui/home-section";
import Slider from "@/components/Slider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import {prisma} from "@/services/prisma";
import { ArrowRight } from "lucide-react";
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
