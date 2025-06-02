"use client";

import { useState } from "react";
import Image from "next/image";

interface DebugImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export function DebugImage({ src, alt, width, height, className }: DebugImageProps) {
  const [hasError, setHasError] = useState(false);
  const [showDebug, setShowDebug] = useState(false);

  return (
    <div className="relative">
      {hasError ? (
        <div 
          className={`flex items-center justify-center bg-gray-200 ${className}`}
          style={{ width, height }}
          onClick={() => setShowDebug(!showDebug)}
        >
          <span className="text-xs text-gray-500">{alt}</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          onError={() => setHasError(true)}
          onClick={() => setShowDebug(!showDebug)}
        />
      )}
      
      {showDebug && (
        <div className="absolute top-full left-0 mt-2 p-2 bg-black/80 text-white text-xs rounded z-50 w-64">
          <p>Path: {src}</p>
          <p>Alt: {alt}</p>
          <p>Size: {width}x{height}</p>
          <p>Status: {hasError ? "Failed to load" : "Loaded"}</p>
        </div>
      )}
    </div>
  );
}
