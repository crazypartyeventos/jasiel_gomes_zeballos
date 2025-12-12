"use client";

export default function Background() {
  const stars = Array.from({ length: 35 });

  return (
    <div className="absolute inset-0 -z-10 w-full overflow-hidden">
      
      {/* VIDEO MOBILE */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-auto object-cover object-top md:hidden"
      >
        <source src="/video/kpop-demon-hunters.720x1280.mp4" type="video/mp4" />
      </video>

      {/* VIDEO DESKTOP */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-auto object-cover object-top hidden md:block"
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