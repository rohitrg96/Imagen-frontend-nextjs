export const getActiveDotAnimation = (direction: 'next' | 'prev') => ({
  initial: {
    width: 0,
    height: 12,
    x: '-50%',
    y: '-50%',
    opacity: 1,
  },
  animate: {
    width: 50,
    height: 12,
    x: '-50%',
    y: '-50%',
    opacity: 1,
  },
  exit: {
    width: 0,
    opacity: 0,
  },
  transition: { duration: 0.4, ease: 'easeOut' },
});

export const getPrevDotAnimation = () => ({
  initial: {
    width: 50,
    height: 12,
    x: '-50%',
    y: '-50%',
    opacity: 1,
  },
  animate: {
    width: 0,
    height: 12,
    x: '-50%',
    y: '-50%',
    opacity: 0,
  },
  exit: {
    opacity: 0,
  },
  transition: { duration: 0.4, ease: 'easeOut' },
});
