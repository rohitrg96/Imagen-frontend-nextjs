import Image from 'next/image';
import { CardProps } from '@/types/Icard.type';

export default function Card({
  imageSrc,
  title,
  description,
  isTwoCards,
}: CardProps) {
  return (
    <div
      className={`w-full max-w-[300px] h-full flex flex-col items-center text-center rounded-2xl shadow-md p-4 ${
        isTwoCards ? 'border border-gray-400' : ''
      }`}
    >
      <Image
        src={imageSrc}
        alt={title}
        width={200}
        height={150}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 300px"
        className="rounded-xl object-cover"
      />
      <h2 className="text-xl font-semibold mt-4">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
