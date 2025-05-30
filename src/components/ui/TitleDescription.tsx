interface TitleDescriptionProps {
  title: string | string[];
  description?: string | string[];
  titleSize?: string; // Tailwind class for title size
  descSize?: string; // Tailwind class for description size
  descWidth?: string; // Tailwind class for description width
  align?: 'left' | 'center' | 'right';
}

export default function TitleDescription({
  title,
  description,
  titleSize = 'text-6xl md:text-6xl lg:text-7xl',
  descSize = 'text-lg md:text-xl',
  descWidth = 'max-w-2xl',
  align = 'center',
}: TitleDescriptionProps) {
  const alignClass =
    align === 'left'
      ? 'text-left items-start'
      : align === 'right'
        ? 'text-right items-end'
        : 'text-center items-center';

  return (
    <div className={`flex flex-col ${alignClass} justify-center p-4 m-8`}>
      <h1 className={`${titleSize} font-bold mb-12 `}>
        {Array.isArray(title) ? title.map((line, i) => <div key={i}>{line}</div>) : title}
      </h1>
      <p className={`${descSize} ${descWidth} text-neutral-400`}>
        {Array.isArray(description)
          ? description.map((line, i) => (
              <span key={i}>
                <>{line}</>
                <br />
              </span>
            ))
          : description}
      </p>
    </div>
  );
}
