'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function PhotoText() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  // Framer Motion variants
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // delay between each line
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="w-full flex justify-center px-32 py-30">
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-8xl text-cyan-500 text-center opacity-100 transition-opacity duration-500"
      >
        {/* Each line wrapped in motion.p */}
        <motion.p
          variants={child}
          className="text-3xl md:text-4xl lg:text-5xl w-80 md:w-140 lg:w-190 font-light leading-tight"
        >
          Photorealistic images, sharper
        </motion.p>
        <motion.p
          variants={child}
          className="text-3xl md:text-4xl lg:text-5xl w-80 md:w-140 lg:w-190 font-light leading-tight"
        >
          clarity, improved spelling and
        </motion.p>
        <motion.p
          variants={child}
          className="text-3xl md:text-4xl lg:text-5xl w-80 md:w-140 lg:w-190 font-light leading-tight"
        >
          typography. Bring your imagination
        </motion.p>
        <motion.p
          variants={child}
          className="text-3xl md:text-4xl lg:text-5xl w-80 md:w-140 lg:w-190 font-light leading-tight"
        >
          to life faster than ever before.
        </motion.p>
      </motion.div>
    </div>
  );
}
