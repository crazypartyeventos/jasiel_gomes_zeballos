"use client";

import { FaInstagram, FaFacebookF, FaWhatsapp , FaEnvelope  } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";


export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r  text-white py-16 flex flex-col items-center gap-6" style={{ 
        background: "linear-gradient(to right, #ffeb3b, #1a0ec7ff)" // Amarillo a azul
      }}>
      
      {/* Nombre de la empresa en un cuadro redondeado */}
      <div className="bg-white/20 backdrop-blur-md rounded-xl px-6 py-3">
        <p className="font-[var(--font-michroma)] text-lg md:text-2xl">
          Crazy Party Eventos
        </p>
      </div>

      {/* Redes sociales como iconos */}
      <div className="flex gap-6">
        <a
          href="https://www.tiktok.com/@crazyparty_evento"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition"
        >
          <SiTiktok className="w-5 h-5 text-white" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61572201140747"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition"
        >
          <FaFacebookF className="w-5 h-5 text-white" />
        </a>
        <a
          href="https://www.instagram.com/crazyparty.lp"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition"
        >
          <FaInstagram className="w-5 h-5 text-white" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=59162807695"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition"
        >
          <FaWhatsapp  className="w-5 h-5 text-white" />
        </a>
        <a href="mailto:crazypartyeventos.lp@gmail.com">
          <FaEnvelope className="text-2xl text-black hover:text-blue-500" />
        </a>
      </div>

      {/* Mensaje opcional */}
      <p className="text-sm md:text-base opacity-80">
        &copy; 2025, TsukiNekoDev. Todos los derechos reservados.
      </p>
    </footer>
  );
}

