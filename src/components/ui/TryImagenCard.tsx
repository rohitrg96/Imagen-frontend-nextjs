'use client';

import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface TryImagenCardProps {
  imageSrc: string;
  title: string;
  onClick?: () => void;
}

export default function TryImagenCard({
  imageSrc,
  title,
  onClick,
}: TryImagenCardProps) {
  return (
    <div
      className="relative rounded-2xl shadow-md flex flex-col justify-center sm:h-72 w-full cursor-pointer hover:shadow-lg transition border-1"
      onClick={onClick}
    >
      {/* Redirect icon */}
      <div className="absolute bottom-4 right-4 z-10 text-white">
        <ExternalLink className="w-5 h-5" />
      </div>

      <div className="relative w-full h-40 sm:h-48 rounded-2xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          width={120}
          height={160}
          className="object-cover rounded-2xl  m-5"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      {/* Title */}
      <h2 className=" px-5 font-semibold text-white text-sm sm:text-base">
        {title}
      </h2>
    </div>
  );
}
