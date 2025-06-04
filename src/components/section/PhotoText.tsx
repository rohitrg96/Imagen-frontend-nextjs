'use client';

import { motion } from 'framer-motion';
import { usePhotoText } from '../../hooks/usePhotoText';
import {
  wordVariants,
  lineVariants,
} from '../../animations/wordStaggerVariants';
import { photoTextLines } from '../../content/photoTextLines';
import { JSX } from 'react';

/**
 * PhotoText component displays animated lines of text with staggered word animations.
 * It uses the `usePhotoText` hook to detect when the text is in the viewport
 * and triggers the animation accordingly.
 *
 * @component
 * @returns {JSX.Element} Animated photo text section
 */
export default function PhotoText(): JSX.Element {
  const { ref, isInView } = usePhotoText({ once: false });

  return (
    <div ref={ref} className="w-full flex justify-center px-6 md:px-16 py-20">
      <div className="max-w-5xl text-cyan-500 text-center">
        {photoTextLines.map((line, lineIndex) => {
          const words = line.split(' ');
          return (
            <motion.div
              key={lineIndex}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={lineVariants(lineIndex)}
              className="flex justify-center flex-wrap mb-2"
            >
              {words.map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  variants={wordVariants}
                  className="text-2xl md:text-4xl lg:text-5xl font-light mx-1"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
