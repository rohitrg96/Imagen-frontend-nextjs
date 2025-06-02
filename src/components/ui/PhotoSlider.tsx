'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhotoSliderProps } from '@/types/PhotoSliderProps.types';
import { usePhotoSlider } from '@/hooks/usePhotoSlider';
import {
  getActiveDotAnimation,
  getPrevDotAnimation,
} from '@/animations/sliderAnimations';
import { useState, useEffect } from 'react';

export default function PhotoSlider({ images }: PhotoSliderProps) {
  const { current, goPrev, goNext, setCurrent, direction } = usePhotoSlider(
    images.length
  );
  const [prevIndex, setPrevIndex] = useState<number | null>(null);

  useEffect(() => {
    setPrevIndex(current);
  }, [current]);

  return (
    <>
      <div className="w-full flex flex-col items-center py-10">
        <div className="relative w-4/5 max-w-5xl overflow-hidden rounded-2xl shadow-lg">
          <img
            src={images[current]}
            alt={`Slide ${current + 1}`}
            className="w-full h-[200px] sm:h-[400px] md:h-[500px] object-cover transition duration-500 ease-in-out"
          />
          {current !== 0 && (
            <button
              onClick={goPrev}
              className="absolute top-1/2 left-0 -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-100 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          {current !== images.length - 1 && (
            <button
              onClick={goNext}
              className="absolute top-1/2 right-0 -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-100 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>

      {/* Scrollable Dot Navigation */}
      <div className="mt-6 w-full overflow-x-auto px-4">
        <div className="flex justify-center min-w-max space-x-4">
          {images.map((_, index) => {
            const isActive = index === current;
            const isPrev = index === prevIndex && index !== current;

            return (
              <div key={index} className="relative w-8 h-5">
                {/* Gray base dot */}
                <div
                  onClick={() => setCurrent(index)}
                  className="w-3 h-3 rounded-full cursor-pointer bg-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                <AnimatePresence initial={false}>
                  {isPrev && (
                    <motion.div
                      key={`prev-${index}`}
                      className="absolute top-1/2 left-1/2 bg-gray-300 rounded-full z-10"
                      {...getPrevDotAnimation()}
                    />
                  )}
                  {isActive && (
                    <motion.div
                      key={`active-${index}`}
                      className="absolute top-1/2 left-1/2 bg-cyan-500 rounded-full z-10"
                      {...getActiveDotAnimation(direction)}
                    />
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
