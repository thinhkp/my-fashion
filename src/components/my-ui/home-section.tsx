import React from "react";

import { cn } from "@/lib/utils";

export const HomeSection = ({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div data-slot='home-section' className={cn("py-10 px-3 md:py-[60px] lg:px-[50px] md:max-w-180 lg:max-w-full m-auto" , className)}>{children}</div>;
};

export const HomeSectionHeader = ({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div data-slot='home-section-header' className={cn("w-full mb-4 sm:mb-[30px]" , className)}>{children}</div>;
};


export const HomeSectionTitle = ({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div data-slot='home-section-title' className={cn("uppercase  lg:text-4xl font-bold md:text-2xl text-[18px]", className)}>{children}</div>;
};

export const HomeSectionContent = ({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div data-slot='home-section-content' className={cn("", className)}>{children}</div>;
};


