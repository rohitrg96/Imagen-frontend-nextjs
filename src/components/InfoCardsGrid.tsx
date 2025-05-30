import InfoCard from './InfoCard';

interface CardItem {
  title: string;
  description: string;
}

interface CardsGridProps {
  cards: CardItem[];
}

export default function CardsGrid({ cards }: CardsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {cards.map((card, index) => (
        <InfoCard key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
}
