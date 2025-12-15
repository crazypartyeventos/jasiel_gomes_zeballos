"use client";

import { FaInstagram, FaFacebookF, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  const particles = Array.from({ length: 50 });
  const colors = ["#1624e6ff", "#ff0000", "#fae844ff", "#911fb4ff"];

  return (
    <footer
      className="w-full py-16 flex flex-col items-center gap-8 text-white relative overflow-hidden"
      style={{ background: "linear-gradient(to right, #ffeb3b, #1a0ec7)" }}
    >
      {/* Puntitos animados de fiesta con colores */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((_, i) => (
          <span
            key={i}
            className="block w-2 h-2 rounded-full absolute animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: colors[Math.floor(Math.random() * colors.length)],
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: 0.9,
            }}
          ></span>
        ))}
      </div>
        <br />
      {/* Título tipo sticker/pop semitransparente */}
      <div className="z-10 mt-4 transform hover:scale-105 transition-transform duration-300">
        <div className="bg-white/20 backdrop-blur-md rounded-2xl px-[2em] py-[1em] shadow-md inline-block">
          <p
            className="text-2xl md:text-3xl font-black text-center tracking-wide"
            style={{
              color: "#ffeb3b",
              textShadow: "2px 2px 0px #363afaff",
            }}
          >
            CRAZY PARTY EVENTOS
          </p>
        </div>
      </div>


      {/* Redes sociales */}
      <div className="flex flex-wrap justify-center gap-4 z-10 px-4">
        <SocialButton href="https://www.tiktok.com/@crazyparty_evento" color="text-black group-hover:text-pink-500">
          <SiTiktok className="w-6 h-6" />
        </SocialButton>

        <SocialButton href="https://www.facebook.com/profile.php?id=61572201140747" color="text-blue-600 group-hover:text-blue-400">
          <FaFacebookF className="w-6 h-6" />
        </SocialButton>

        <SocialButton href="https://www.instagram.com/crazyparty.lp" color="text-pink-600 group-hover:text-purple-500">
          <FaInstagram className="w-7 h-7" />
        </SocialButton>

        <SocialButton href="https://api.whatsapp.com/send/?phone=59162807695" color="text-green-500 group-hover:text-green-400">
          <FaWhatsapp className="w-7 h-7" />
        </SocialButton>

        <SocialButton href="mailto:crazypartyeventos.lp@gmail.com" color="text-yellow-500 group-hover:text-yellow-400">
          <FaEnvelope className="w-6 h-6" />
        </SocialButton>
      </div>

      {/* Derechos */}
      <p className="text-sm md:text-base font-semibold drop-shadow-md bg-black/10 px-4 py-1 rounded-full z-10">
        &copy; 2025, TsukiNekoDev. Todos los derechos reservados.
      </p>
      <p>.</p>
    </footer>
  );
}

// Componente auxiliar de botones
function SocialButton({ href, children, color }: { href: string; children: React.ReactNode; color: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out border-2 border-transparent hover:border-white/50"
    >
      <div className={`${color} transition-colors duration-300`}>{children}</div>
    </a>
  );
}
