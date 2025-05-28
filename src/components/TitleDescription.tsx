interface TitleDescriptionProps {
  title: string;
  description: string;
  titleSize?: string; // Tailwind class for title size
  descSize?: string; // Tailwind class for description size
  align?: 'left' | 'center' | 'right';
}

export default function TitleDescription({
  title,
  description,
  titleSize = 'text-5xl md:text-6xl lg:text-7xl',
  descSize = 'text-lg md:text-xl',
  align = 'center',
}: TitleDescriptionProps) {
  const alignClass =
    align === 'left'
      ? 'text-left items-start'
      : align === 'right'
        ? 'text-right items-end'
        : 'text-center items-center';

  return (
    <div className={`flex flex-col ${alignClass} justify-center p-4`}>
      <h1 className={`${titleSize} font-bold mb-4`}>{title}</h1>
      <p className={`${descSize} max-w-2xl`}>{description}</p>
    </div>
  );
}
