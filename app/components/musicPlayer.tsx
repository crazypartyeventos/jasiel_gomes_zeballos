"use client";
import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

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
    <div className="fixed bottom-4 right-4">
      <button
        onClick={togglePlay}
        className="p-3 bg-lilac-600 text-white rounded-full shadow-lg hover:bg-lilac-700 transition"
      >
        {playing ? "⏸️" : "▶️"}
      </button>

      <audio ref={audioRef} src="/music/dorada.mp3" loop />
    </div>
  );
}
