import TryImagenCard from '../ui/TryImagenCard';
import { CardsSectionProps } from '@/types/Card.types';

export default function TryImagenCardsGrid({ cards }: CardsSectionProps) {
  return (
    <div className="px-[8%] grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, idx) => (
        <TryImagenCard key={idx} {...card} />
      ))}
    </div>
  );
}
