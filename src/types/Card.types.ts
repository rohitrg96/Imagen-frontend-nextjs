export interface CardItem {
  imageSrc: string;
  title: string;
  description: string;
}

export interface CardsSectionProps {
  cards: CardItem[];
}
