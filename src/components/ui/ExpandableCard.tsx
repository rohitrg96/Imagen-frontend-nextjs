'use client';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';
import { ExpandableCardProps } from '@/types/Ecard.types';
import { useExpandableStates } from '@/hooks/useExpandableStates';

export default function ExpandableCard({ items }: ExpandableCardProps) {
  const { expandedStates, toggleExpand } = useExpandableStates(items.length);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[2.5%] gap-y-6 px-[5%] py-8 max-w-6xl mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-xl shadow-lg overflow-hidden w-full"
        >
          {/* Image */}
          <div className="relative w-[90%] mx-auto h-64 rounded-xl overflow-hidden">
            <Image
              src={item.image}
              alt={`Image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>

          {/* Text and button */}
          <div className="w-[90%] mx-auto mt-3 text-white text-sm leading-[1.5]">
            {expandedStates[index] ? (
              <span>
                {item.text}
                <button
                  onClick={() => toggleExpand(index)}
                  className="ml-2 inline-flex items-center justify-center text-white bg-black/30 rounded-full p-0.5 hover:bg-black/70 transition align-middle"
                  aria-label="Collapse text"
                >
                  <Minus size={14} />
                </button>
              </span>
            ) : (
              <div className="flex items-start gap-2">
                <span className="flex-1 truncate block">{item.text}</span>
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-white bg-black/30 rounded-full p-1 flex-shrink-0 flex items-center justify-center hover:bg-black/70 transition"
                  aria-label="Expand text"
                >
                  <Plus size={14} />
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
