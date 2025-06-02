export const wordVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.1,
    },
  },
};

export const lineVariants = (lineIndex: number) => ({
  visible: {
    transition: {
      delayChildren: lineIndex * 0.8,
      staggerChildren: 0.08,
    },
  },
});
