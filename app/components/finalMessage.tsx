"use client";

export default function FinalMessage() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Video para móviles */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover block md:hidden"
      >
        <source src="video/kpop-demon-hunters-720.mp4" type="video/mp4" />
      </video>

      {/* Video para escritorio */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      >
        <source src="video/kpop-demon-hunters-squad.1920x1080.mp4" type="video/mp4" />
      </video>

      {/* Texto dentro de cuadro semi-transparente */}
      <div className="absolute z-10 text-center px-6 py-4 bg-white/30 backdrop-blur-md rounded-2xl">
        <p className="final-message-text">
          JASIEL
        </p>
        <p className="text-2xl md:text-4xl font-semibold text-white leading-loose">
          TE ESPERA, NO FALTES
        </p>
      </div>
    </div>
  );
}
