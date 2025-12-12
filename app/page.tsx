"use client";
import { useState } from "react";
import Image from "next/image";
import Background from "./components/background";
import PhotoCard from "./components/photocard";
import InviteText from "./components/inviteText";
import MusicPlayer from "./components/musicPlayer";
import Footer from "./components/footer";

// Define aquí la imagen de la carta (puedes cambiar la ruta)
import sobreImage from "../public/images/sobre.png";

export default function Home() {
  const [abierto, setAbierto] = useState(false);

 return (
    <div className={`w-screen h-screen flex items-center justify-center ${
      abierto ? "bg-transparent" : "bg-purple-100"
    }`}>
      {!abierto ? (
        // Pantalla inicial con la carta
        <div
          className="cursor-pointer transform hover:scale-105 transition-transform"
          onClick={() => setAbierto(true)}
        >
          <Image src={sobreImage} alt="Abrir Invitación" width={200} height={200} className="animate-shake"/>
        </div>
      ) : (
        <div className="relative flex flex-col min-h-screen w-full">
          {/* Fondo fijo detrás de todo */}
          <Background />

          {/* CONTENIDO */}
          <div className="relative z-10 flex flex-col items-center w-full">
            <section className="flex flex-col items-center justify-center h-screen px-4 text-center">
              <InviteText />
              <MusicPlayer />
            </section>

            <section className="flex flex-col md:flex-row items-center justify-center gap-8 py-20 px-4">
              <PhotoCard image="/images/jasiel1.jpeg" borderColor="#aa48b8" />
              <PhotoCard image="/images/jasiel2.jpeg" borderColor="#7f53b3" />
            </section>

            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}