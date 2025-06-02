import { useState } from 'react';

export function usePhotoSlider(length: number) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const goNext = () => {
    setDirection('next');
    setCurrent((prev) => (prev + 1 < length ? prev + 1 : prev));
  };

  const goPrev = () => {
    setDirection('prev');
    setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return { current, setCurrent, direction, goNext, goPrev };
}
