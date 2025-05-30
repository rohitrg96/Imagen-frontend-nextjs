import { ArrowUpRight } from 'lucide-react';

interface TryImagenCardProps {
  imageSrc: string;
  title: string;
  onClick?: () => void;
}

export default function TryImagenCard({ imageSrc, title, onClick }: TryImagenCardProps) {
  return (
    <div
      className="relative rounded-2xl shadow-md flex flex-col justify-center h-50 w-full  cursor-pointer hover:shadow-lg transition border-2 m-1"
      onClick={onClick}
    >
      {/* Redirect icon */}
      <div className="absolute bottom-4 right-4">
        <div className="w-8 h-8 flex items-center justify-center rounded-md border-0 border-gray-300 text-gray-500 hover:text-black hover:border-black transition">
          <ArrowUpRight size={16} />
        </div>
      </div>

      {/* Image */}
      <img src={imageSrc} alt={title} className="h-1/2  w-1/3 object-cover rounded-md" />

      {/* Title */}
      <h2 className="mt-4 p-2  font-semibold text-white pb-10">{title}</h2>
    </div>
  );
}
