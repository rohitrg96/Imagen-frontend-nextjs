export interface TitleDescriptionProps {
  title: string | string[];
  description?: string | string[];
  titleSize?: string; // Tailwind class for title size
  descSize?: string; // Tailwind class for description size
  descWidth?: string; // Tailwind class for description width
  align?: 'left' | 'center' | 'right';
}
