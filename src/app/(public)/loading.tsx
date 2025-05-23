"use client";

import React, { useEffect, useRef } from "react";
import { Loader2 } from "lucide-react";
import gsap from "gsap";

const Loading = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Fade in animation for the container
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    );

    // Pulsing animation for the heading
    gsap
      .timeline({ repeat: -1, yoyo: true })
      .fromTo(
        headingRef.current,
        { scale: 0.8 },
        { scale: 1, duration: 1.2, ease: "power1.inOut" }
      );
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <div
        ref={containerRef}
        className="flex flex-col items-center justify-center gap-6"
      >
        <h1
          ref={headingRef}
          className="text-3xl md:text-4xl font-bold text-red-500"
        >
          My Fashion
        </h1>

        <div className="flex items-center gap-4">
          <Loader2 className="h-8 w-8 text-red-500 animate-spin" />
          <p className="text-lg text-gray-700">Đang tải...</p>
        </div>

        <div className="mt-4 text-sm text-gray-500">
          Vui lòng đợi trong giây lát
        </div>
      </div>
    </div>
  );
};

export default Loading;
