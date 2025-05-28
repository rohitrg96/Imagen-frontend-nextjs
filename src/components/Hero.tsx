'use client';

import { FaPause, FaPlay } from 'react-icons/fa';
import { useRef, useState } from 'react';
import TitleDescription from './TitleDescription';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full h-165 overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-14"
      >
        <source src="landing.mp4" type="video/mp4" />
      </video>

      {/* Overlay content */}
      <div className="relative z-15 flex flex-col items-center justify-center h-full text-white text-center bg-black/40 px-4 sm:px-8">
        <TitleDescription
          title="Imagen"
          description="Our best image generation model yet, engineered for creativity"
        />
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <button className="px-5 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition font-semibold w-60 md:w-auto">
            Try in Gemini &gt;
          </button>
          <button className="px-5 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition font-semibold w-60 md:w-auto">
            Try in Whisk &gt;
          </button>
        </div>
      </div>

      {/* Pause/Play Button */}
      <button
        onClick={togglePlayback}
        className="absolute bottom-6 right-6 z-30 p-3 bg-white/80 hover:bg-white text-black rounded-full shadow-lg transition"
      >
        {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
      </button>
    </div>
  );
}
