export interface CardItem {
  title: string;
  description: string;
}

export interface CardsGridProps {
  cards: CardItem[];
}

export interface CardProps {
  imageSrc: string;
  title: string;
  description?: string;
  isTwoCards?: boolean;
}

export interface TryImagenCardProps {
  imageSrc: string;
  title: string;
  onClick?: () => void;
}
