import TryImagenCard from './TryImagenCard';

interface CardItem {
  imageSrc: string;
  title: string;
  onClick?: () => void;
}

interface TryImagenCardsGridProps {
  cards: CardItem[];
}

export default function TryImagenCardsGrid({ cards }: TryImagenCardsGridProps) {
  return (
    <div className="px-[5%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, idx) => (
        <TryImagenCard key={idx} {...card} />
      ))}
    </div>
  );
}
