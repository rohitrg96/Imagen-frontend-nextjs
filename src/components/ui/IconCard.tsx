import Image from 'next/image';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  isTwoCards?: boolean;
}

export default function Card({ imageSrc, title, description, isTwoCards }: CardProps) {
  return (
    <div
      className={`w-full max-w-[300px] flex flex-col items-center text-center rounded-2xl shadow-md p-4 ${
        isTwoCards ? 'border border-gray-400' : ''
      }`}
    >
      <Image
        src={imageSrc}
        alt={title}
        width={200}
        height={150}
        className="rounded-xl object-cover"
      />
      <h2 className="text-xl font-semibold mt-4">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
