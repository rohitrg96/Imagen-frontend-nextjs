import { useState } from 'react';

export function useExpandableStates(length: number) {
  const [expandedStates, setExpandedStates] = useState<boolean[]>(() =>
    new Array(length).fill(false)
  );

  const toggleExpand = (index: number) => {
    setExpandedStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return { expandedStates, toggleExpand };
}

export function useExpandableCard() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return {
    expandedIndex,
    toggleExpand,
  };
}
