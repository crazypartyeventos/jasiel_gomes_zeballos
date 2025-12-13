"use client";

import { useState } from "react";
import Image from "next/image";
import BackgroundVideo from "./components/backgroundVideo";
import HeroTitle from "./components/heroTitle";
import Countdown from "./components/countdown";
import EventDetails from "./components/eventDetails";
import PhotoCard from "./components/photocard";
import MusicPlayer from "./components/musicPlayer";
import FinalMessage from "./components/finalMessage";
import Footer from "./components/footer";

import sobreImage from "../public/images/sobre.png";

export default function Home() {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className={`w-screen ${abierto ? "bg-transparent" : "bg-purple-100"}`}>
      {!abierto ? (
      <div
        className="h-screen flex items-center justify-center cursor-pointer transform hover:scale-105 transition-transform"
        onClick={() => setAbierto(true)}
      >
        <Image
          src={sobreImage}
          alt="Abrir Invitación"
          width={200}
          height={200}
          className="animate-shake"
        />
      </div>
      ) : (
        <>
          {/* Música activada al abrir el sobre */}
          <MusicPlayer playOnStart={true} />

          {/* Sección de video */}
          <section className="relative w-full h-screen">
            <BackgroundVideo />
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <HeroTitle />
            </div>
          </section>

          {/* Sección de fotos */}
          <section className="w-full flex flex-col md:flex-row items-center justify-center gap-4 py-12 px-8 md:px-16 bg-purple-200/40">
            <PhotoCard image="./images/jasiel1.jpeg" borderColor="#aa48b8" />
            <div className="flex-1 text-center px-4 max-w-lg mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold text-purple-800">
                ¡Prepárate para la diversión!
              </h2>
              <p className="text-lg opacity-90 leading-loose">
                Se ha detectado una alta concentración de ritmo y diversión.
              </p>
              <p> ¡Tenemos una nueva misión clasificada!</p>
              <p className="leading-loose">¡Prepárate para una fiesta llena de magia, música y estrellas!</p>
              <p className="text-lg opacity-90 leading-loose">
                La animación y el show estarán oficialmente a cargo de: 
                ✨ <span className="font-semibold">CRAZY PARTY</span> ✨ 
              </p>
              <p>(¡Así que la diversión extrema está garantizada! 😉)</p>
            </div>
            <PhotoCard image="./images/jasiel2.jpeg" borderColor="#7f53b3" />
          </section>

          {/* Sección Countdown */}
          <section className="w-full bg-white">
            <Countdown />
          </section>

          {/* Sección EventDetails */}
          <section className="w-full bg-purple-200/40">
            <EventDetails />
          </section>

          {/* Sección FinalMessage debajo de EventDetails */}
          <section className="w-full h-screen">
            <FinalMessage />
          </section>

           {/* Footer al final */}
          <Footer />
        </>
      )}
    </div>
  );
}
