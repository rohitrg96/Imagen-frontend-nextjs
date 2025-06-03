import { CardItem } from '@/types/Icard.type';

export default function InfoCard({ title, description }: CardItem) {
  return (
    <div className="bg-black p-6 rounded-2xl shadow-md text-left">
      <h2 className="text-white  font-semibold mb-2">{title}</h2>
      <p className="text-neutral-400 ">{description}</p>
    </div>
  );
}
