import Link from 'next/link';
import TitleDescription from './TitleDescription';
import { ImageTextOverlayProps } from '@/types/ImageTextOverlays';

export default function ImageTextOverlay({
  imageSrc,
  line1,
  buttonText = 'View Images',
  buttonLink = '#',
}: ImageTextOverlayProps) {
  return (
    <div className="w-full flex flex-col items-center py-10">
      <div className="relative w-4/5 max-w-5xl overflow-hidden rounded-2xl shadow-lg">
        {/* Brighten the image slightly */}
        <img
          src={imageSrc}
          alt="Overlay"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover brightness-110"
        />

        {/* Dark overlay but lighter now */}
        <div className="absolute inset-0 bg-black/20 flex flex-col justify-between text-white text-center p-7">
          {/* Title centered */}
          <div className="flex-1 flex items-center justify-center">
            <TitleDescription title={line1} />
          </div>

          {/* Button pinned near the bottom */}
          <div className="mt-4">
            <Link href={buttonLink}>
              <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
                {buttonText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
