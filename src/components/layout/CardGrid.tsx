'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Image from 'next/image';
import { items } from '@/content/card';

export default function CardGrid() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[2.5%] gap-y-6 px-[5%] py-8 max-w-6xl mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-xl shadow-lg overflow-hidden"
          style={{ width: '100%' }}
        >
          {/* Image container with 90% width to leave 5% gap each side */}
          <div className="relative w-[90%] mx-auto h-64 rounded-xl overflow-hidden">
            <Image
              src={item.image}
              alt={`Image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>

          {/* Text and toggle button - expanded inline */}
          <div
            className="w-[90%] mx-auto mt-3 text-white flex items-start gap-3"
            style={{ color: 'white' }}
          >
            <p
              className={`flex-1 m-0 ${
                expandedIndex === index
                  ? 'whitespace-normal'
                  : 'truncate whitespace-nowrap'
              }`}
              style={{ lineHeight: '1.5' }}
            >
              {item.text}
              {expandedIndex === index && (
                <button
                  onClick={() => toggleExpand(index)}
                  className="ml-2 text-white bg-black/40 rounded-full p-1 flex items-center justify-center hover:bg-black/70 transition"
                  aria-label="Collapse text"
                  style={{ verticalAlign: 'middle' }}
                >
                  <Minus size={16} />
                </button>
              )}
            </p>

            {expandedIndex !== index && (
              <button
                onClick={() => toggleExpand(index)}
                className="text-white bg-black/20 rounded-full p-2 flex items-center justify-center hover:bg-black/40 transition"
                aria-label="Expand text"
              >
                <Plus size={20} />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
