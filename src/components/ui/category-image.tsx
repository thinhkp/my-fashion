"use client";

import { useState } from "react";
import Image from "next/image";
import { FolderIcon } from "lucide-react";

interface CategoryImageProps {
  src: string | null;
  alt: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  fallbackClassName?: string;
}

export function CategoryImage({
  src,
  alt,
  className = "",
  size = "md",
  fallbackClassName = "",
}: CategoryImageProps) {
  const [error, setError] = useState(false);

  // Size mapping
  const sizeMap = {
    sm: { width: 40, height: 40 },
    md: { width: 64, height: 64 },
    lg: { width: 100, height: 100 },
  };

  const { width, height } = sizeMap[size];

  // Show fallback if src is null or loading fails
  if (!src || error) {
    return (
      <div
        className={`bg-gray-100 rounded-md flex items-center justify-center ${fallbackClassName}`}
        style={{ width, height }}
      >
        <FolderIcon
          className="text-gray-400"
          style={{ width: width / 2, height: height / 2 }}
        />
      </div>
    );
  }

  // Add a timestamp to prevent caching
  const imageUrl = `${src}?t=${Date.now()}`;

  return (
    <div
      className={`relative overflow-hidden rounded-md ${className}`}
      style={{ width, height }}
    >
      <Image
        src={imageUrl}
        alt={alt}
        fill
        sizes={`${Math.max(width, height)}px`}
        className="object-cover object-center"
        onError={() => setError(true)}
      />
    </div>
  );
}
