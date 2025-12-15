"use client";

import { useEffect } from "react";
import PhotoCard from "./photocard";

export default function PhotoSection() {
  useEffect(() => {
    const container = document.querySelector(".confetti-container");
    if (!container) return;

    const colors = ["#ff3f3f", "#ff9f3f", "#3fff7f", "#3f7fff", "#ff3fff"];
    for (let i = 0; i < 40; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + "vw";
      const size = 8 + Math.random() * 12;
      confetti.style.width = confetti.style.height = size + "px";
      confetti.style.animationDuration = 3 + Math.random() * 5 + "s";
      confetti.style.animationDelay = Math.random() * 5 + "s";
      container.appendChild(confetti);
    }
  }, []);

  return (
    <section className="photoSection relative overflow-hidden">
      {/* Contenedor de globitos */}
      <div className="confetti-container absolute inset-0 pointer-events-none z-0"></div>

      {/* Contenido principal */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 flex flex-col md:flex-row items-center gap-12 relative z-10">
        <PhotoCard image="./images/jasiel1.jpeg" borderColor="#ba70ffff" />
        <div className="flex-1 text-center px-6">
            <div className="flex-1 text-center px-6">
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 md:p-10 shadow-lg">
                <h2 className="text-2xl md:text-4xl font-extrabold text-purple-800">
                  ¡Prepárate para la diversión!
                </h2>
                <p className="text-lg opacity-90 leading-loose text-white mt-4">
                  Se ha detectado una alta concentración de ritmo y diversión.
                </p>
                <p className="text-lg opacity-90 leading-loose text-white">
                  ¡Tenemos una nueva misión clasificada!
                </p>
                <p className="text-lg opacity-90 leading-loose text-white">
                  ¡Prepárate para una fiesta llena de magia, música y estrellas!
                </p>
                <p className="text-lg opacity-90 leading-loose text-white">
                  La animación y el show estarán oficialmente a cargo de:
                  <span className="font-extrabold text-blue-800"> CRAZY PARTY </span>
                </p>
                <p className="text-white opacity-80 mt-4">
                  (¡Así que la diversión extrema está garantizada!)
                </p>
              </div>
            </div>
        </div>
        <PhotoCard image="./images/jasiel2.jpeg" borderColor="#7f53b3" />
      </div>
    </section>
  );
}
