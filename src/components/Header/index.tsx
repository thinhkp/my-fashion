import Link from "next/link";
import { HomeSection, HomeSectionContent } from "../my-ui/home-section";
import Image from "next/image";
import Search from "../Search";
import Cart from "../Cart";
import User from "../User";
import { getShowedCategories } from "@/services/data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Menu } from "lucide-react";
import  HeaderView from "./view";
import { Category } from "@/types/model";

const Header = async () => {
  const cates : Category[]  = await getShowedCategories();
  return (
    <HeaderView cates={cates}/>
  );
};

export default Header;
