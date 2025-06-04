'use client';

import { FaPause, FaPlay } from 'react-icons/fa';
import { useVideoPlayback } from '@/hooks/useVideoPlayback';
import { motion } from 'framer-motion';
import TitleDescription from '../ui/TitleDescription';
import CustomButton from '../ui/CustomButton';
import { ChevronRight } from 'lucide-react';
import { JSX } from 'react';

/**
 * Hero component that displays a fullscreen video background with
 * overlayed animated title, description, and buttons.
 * Includes a toggle button to play/pause the background video.
 *
 * Utilizes the `useVideoPlayback` hook to control video playback state.
 *
 * @component
 * @returns {JSX.Element} The Hero section UI with video and overlay content.
 */
export default function Hero(): JSX.Element {
  const { videoRef, isPlaying, togglePlayback } = useVideoPlayback();

  return (
    <div className="relative w-full h-[500px] md:h-[450px] lg:h-[520px] overflow-hidden">
      {/* Background Video */}
      <video
        data-testid="hero-video"
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
        {/* Title and description animation */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <TitleDescription
            title="Imagen"
            description="Our best image generation model yet, engineered for creativity"
            titleSize="text-4xl md:text-6xl lg:text-8xl"
          />
        </motion.div>

        {/* Buttons animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 items-center mt-6"
        >
          <CustomButton width="50" topMargin="mt-0">
            Try In Gemini <ChevronRight className="w-5 h-5" />
          </CustomButton>
          <CustomButton width="50" topMargin="mt-0">
            Try in Whisk <ChevronRight className="w-5 h-5" />
          </CustomButton>
        </motion.div>
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
