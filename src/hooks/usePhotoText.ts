'use client';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export function usePhotoText({
  once = false,
  margin = '0px 0px -150px 0px' as any,
  amount = 0.3,
} = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin,
    amount,
  });

  return { ref, isInView };
}
