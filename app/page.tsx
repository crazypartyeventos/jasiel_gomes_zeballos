"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollIndicator from "./components/scrollIndicator";
import BackgroundVideo from "./components/backgroundVideo";
import HeroTitle from "./components/heroTitle";
import Countdown from "./components/countdown";
import EventDetails from "./components/eventDetails";
import PhotoSection from "./components/photoSection";
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
          <section className="relative w-full min-h-screen overflow-hidden">
  <BackgroundVideo />
  <div className="absolute inset-0 z-10 flex items-center justify-center">
    <HeroTitle />
  </div>
</section>


          {/* Flecha de scroll */}
          <ScrollIndicator />

          {/* Sección de fotos */}
          <PhotoSection />

          {/* Sección Countdown */}
          <section className="w-full bg-white">
            <Countdown />
          </section>

          {/* Sección EventDetails */}
          <section className="w-full bg-[#e536bf]/60">
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
