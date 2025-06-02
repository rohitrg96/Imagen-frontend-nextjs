'use client';

import { sections } from '@/content/stickyNav';
import { useStickyNav } from '@/hooks/useStickyNav';

export default function StickyNav() {
  const { activeSection } = useStickyNav();

  return (
    <div className="sticky top-0 z-50 shadow-md bg-black">
      <div className="p-4 flex justify-center">
        <div className="h-12 rounded-full overflow-x-auto whitespace-nowrap no-scrollbar w-full max-w-[835px]">
          <div className="flex items-center space-x-4 px-4">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`px-6 py-2 rounded-full whitespace-nowrap flex justify-center transition
                ${
                  activeSection === id
                    ? 'bg-cyan-500 text-black'
                    : 'text-neutral-200 hover:border-1 '
                }`}
              >
                {id}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
