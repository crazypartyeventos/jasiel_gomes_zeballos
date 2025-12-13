"use client";
import { useRef, useState, useEffect } from "react";

interface MusicPlayerProps {
  playOnStart?: boolean;
}

export default function MusicPlayer({ playOnStart = false }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(playOnStart);

  useEffect(() => {
    if (playOnStart && audioRef.current) {
      audioRef.current.play().catch(() => {
        // algunos navegadores bloquean autoplay sin interacción
      });
    }
  }, [playOnStart]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[1000]">
      <button
        onClick={togglePlay}
        className="
          w-20 h-20
          bg-[#c9b6e7]/70
          hover:bg-[#c9b6e7]/100
          rounded-full
          flex items-center justify-center
          shadow-lg hover:shadow-xl
          transition-all duration-300
        "
      >
        {playing ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5 3.868v16.264L19 12 5 3.868z" />
          </svg>
        )}
      </button>

      <audio ref={audioRef} src="./music/dorada.mp3" loop />
    </div>
  );
}
