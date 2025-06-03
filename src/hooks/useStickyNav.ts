'use client';

import { useEffect, useState } from 'react';
import { sections } from '@/content/stickyNav';

export function useStickyNav() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Trigger slightly before the section top

      let current: string | null = null;
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            current = sections[i];
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { activeSection };
}
