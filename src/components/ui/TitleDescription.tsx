'use client';
import { TitleDescriptionProps } from '@/types/TitleDescription.types';
import { motion } from 'framer-motion';
import { fadeUp } from '@/animations/appearFromBottom';

export default function TitleDescription({
  title,
  description,
  titleSize = 'text-3xl md:text-5xl lg:text-7xl',
  descSize = 'text-lg md:text-xl',
  descWidth = 'max-w-2xl',
  align = 'center',
}: TitleDescriptionProps) {
  const alignClass =
    align === 'left'
      ? 'text-left items-start'
      : align === 'right'
        ? 'text-right items-end'
        : 'text-center items-center';

  return (
    <div className={`flex flex-col ${alignClass} justify-center p-4 m-8`}>
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`${titleSize} font-bold mb-12`}
      >
        {Array.isArray(title)
          ? title.map((line, i) => <div key={i}>{line}</div>)
          : title}
      </motion.h1>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className={`${descSize} ${descWidth} text-neutral-400`}
      >
        {Array.isArray(description)
          ? description.map((line, i) => (
              <span key={i}>
                <>{line}</>
                <br />
              </span>
            ))
          : description}
      </motion.p>
    </div>
  );
}
