"use client";

export default function Background() {
  const stars = Array.from({ length: 35 });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* VIDEO MOBILE */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover block md:hidden"
      >
        <source src="/video/kpop-demon-hunters.720x1280.mp4" type="video/mp4" />
      </video>

      {/* VIDEO DESKTOP */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover hidden md:block"
      >
        <source src="/video/kpop-demon-hunters.mp4" type="video/mp4" />
      </video>

      {/* ✨ Estrellas animadas */}
      {stars.map((_, i) => (
        <span
          key={i}
          className="sparkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
}