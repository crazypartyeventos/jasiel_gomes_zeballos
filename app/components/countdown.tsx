import { useEffect, useState } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // 19 diciembre 2025 a las 15:00 local
    const targetDate = new Date(2025, 11, 19, 15, 0, 0);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBox = (value: number, label: string) => (
    <div className="bg-purple-900/80 backdrop-blur-md p-6 rounded-xl w-20 md:w-24 text-center shadow-lg border border-purple-500">
      <p className="text-3xl md:text-4xl font-bold">{value.toString().padStart(2, "0")}</p>
      <span className="text-sm md:text-base">{label}</span>
    </div>
  );

  return (
    <section className="bg-gradient-to-b from-purple-800 to-purple-500 text-white text-center py-12 px-4">
      {/* Contenedor con espacio entre párrafos y mayor interlineado */}
      <br/>
      <div className="flex justify-center mt-4">
        <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl text-center w-fit">
          <p className="leading-relaxed mb-4"><strong>📅 Fecha:</strong> 19 de Diciembre, 2025</p>
          <p className="leading-relaxed"><strong>⏰ Hora:</strong> 3:00 pm</p>
        </div>
      </div>
      <br/>
      <p className="text-sm md:text-base mt-6 mb-4 leading-loose">Faltan:</p>

      <div className="flex justify-center gap-4 flex-wrap">
        {timeBox(timeLeft.days, "días")}
        {timeBox(timeLeft.hours, "hrs")}
        {timeBox(timeLeft.minutes, "min")}
        {timeBox(timeLeft.seconds, "seg")}
      </div>

<br />
      <div className="flex flex-col items-center space-y-4 mt-8">
        <p className="text-sm md:text-base leading-loose">Estamos por comenzar la diversión</p>
        <img 
          src="./images/kpop1.gif" 
          alt="Celebración" 
          className="w-40 md:w-60 rounded-xl shadow-lg"
        />
      </div>
      <br />
      <br />
    </section>
  );
}
