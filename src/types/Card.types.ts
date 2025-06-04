export interface CardItem {
  imageSrc: string;
  title: string;
  description?: string; // Optional: if not all components need it
  onClick?: () => void; // Optional: for interactive cards
}

export interface CardsSectionProps {
  cards: CardItem[];
}
