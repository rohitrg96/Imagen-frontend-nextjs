import Card from '../ui/IconCard';
import { CardsSectionProps } from '@/types/Card.types';

export default function CardsSection({ cards }: CardsSectionProps) {
  const isTwoCards = cards.length === 2;

  return (
    <div
      className={`grid mt-10 gap-6 ${
        isTwoCards
          ? 'grid-cols-1 md:grid-cols-2 justify-center max-w-5xl mx-auto '
          : 'grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center'
      }`}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${index === 2 ? 'md:col-span-2 md:mx-auto lg:col-span-1 p-15' : ''}`}
        >
          <Card {...card} isTwoCards={isTwoCards} />
        </div>
      ))}
    </div>
  );
}
