import { useEffect, useState } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2024-07-08T13:00:00");
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
    <div className="bg-purple-900 p-4 rounded-lg w-16 text-center">
      <p className="text-2xl font-bold">{value.toString().padStart(2, "0")}</p>
      <span className="text-xs">{label}</span>
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-purple-800 to-purple-500 text-white text-center py-8 px-4">
      <p className="text-lg mb-2">Ven a celebrar el día</p>
      <p className="text-lg">Sábado 8 de Julio del 2024</p>
      <p className="text-sm mt-2">Faltan:</p>
      <div className="flex justify-center gap-4 mt-4">
        {timeBox(timeLeft.days, "días")}
        {timeBox(timeLeft.hours, "hrs")}
        {timeBox(timeLeft.minutes, "min")}
        {timeBox(timeLeft.seconds, "seg")}
      </div>
      <p className="mt-4 text-sm">Estamos por comenzar la diversión</p>
      <p className="mt-2 text-sm">La fiesta será en:</p>
    </div>
  );
}
