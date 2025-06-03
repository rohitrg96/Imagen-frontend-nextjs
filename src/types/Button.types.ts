export interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  width?: string; // Tailwind width class (e.g., "w-60", "w-auto")
  height?: string; // Tailwind height class (e.g., "h-12", "py-3")
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  topMargin?: string;
}
