'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PhotoSliderProps {
  images: string[];
}

export default function PhotoSlider({ images }: PhotoSliderProps) {
  const [current, setCurrent] = useState(0);

  const goPrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="w-full flex flex-col items-center py-10">
        <div className="relative w-4/5 max-w-5xl overflow-hidden rounded-2xl shadow-lg">
          <img
            src={images[current]}
            alt={`Slide ${current + 1}`}
            className="w-full h-[200px] sm:h-[400px] md:h-[500px] object-cover transition duration-500 ease-in-out"
          />
          <>
            <>
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
            </>
          </>
        </div>
      </div>
      {/* Dots BELOW the image */}
      <div className="mt-4 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? 'bg-black' : 'bg-gray-400'
            } transition-all`}
          />
        ))}
      </div>
    </>
  );
}
