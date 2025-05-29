interface TitleDescriptionProps {
  title: string | string[];
  description?: string | string[];
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
      <h1 className={`${titleSize} font-bold mb-6`}>
        {Array.isArray(title) ? title.map((line, i) => <div key={i}>{line}</div>) : title}
      </h1>
      <p className={`${descSize} max-w-2xl`}>
        {Array.isArray(description)
          ? description.map((line, i) => <div key={i}>{line}</div>)
          : description}
      </p>
    </div>
  );
}
