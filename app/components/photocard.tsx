"use client";

import { useEffect, useState } from "react";

export default function PhotoCard({
  image,
  borderColor,
  width = "288px",
  height = "500px",
}: {
  image: string;
  borderColor: string;
  width?: string;
  height?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(image);
      if (!element) return;
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [image]);

  return (
    <div
      id={image}
      className={`border-8 rounded-3xl overflow-hidden shadow-lg transition-transform duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ borderColor, width, height }}
    >
      <img
        src={image}
        alt="Cumpleañera"
        className="w-full h-full object-cover"
      />
    </div>
  );
}