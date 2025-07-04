import InfoCard from '../ui/InfoCard';
import { CardsGridProps } from '@/types/Icard.type';

export default function CardsGrid({ cards }: CardsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {cards.map((card, index) => (
        <InfoCard
          key={index}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}
