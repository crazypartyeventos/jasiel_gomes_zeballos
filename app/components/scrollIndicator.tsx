"use client";

import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Oculta la flecha cuando el usuario está cerca del footer
      if (scrollPosition >= documentHeight - 150) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-bounce opacity-90">
      <FaChevronDown
        className="
          text-4xl
          scale-x-300
          text-purple-100
          drop-shadow-[0_0_4px_rgba(186,72,184,0.8)]
    drop-shadow-[0_0_8px_rgba(186,72,184,0.6)]
    drop-shadow-[0_0_12px_rgba(186,72,184,0.4)]
        "
      />
    </div>
  );
}
