import Card from './Card';

interface CardItem {
  imageSrc: string;
  title: string;
  description: string;
}

interface CardsSectionProps {
  cards: CardItem[];
}

export default function CardsSection({ cards }: CardsSectionProps) {
  return (
    <div className="grid gap-0 mt-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${index === 2 ? 'md:col-span-2 md:mx-auto lg:col-span-1 p-15' : ''}`}
        >
          <Card {...card} />
        </div>
      ))}
    </div>
  );
}
