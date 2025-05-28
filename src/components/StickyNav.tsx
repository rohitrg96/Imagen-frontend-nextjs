const sections = [
  'Capabilities',
  'Benchmarks',
  'Safety & Responsibility',
  'Showcase',
  'Try Imagen',
];

export default function StickyNav() {
  return (
    <div className="sticky top-0 z-50 shadow-md">
      <div className="p-4 flex justify-center">
        <div className=" h-12 rounded-full overflow-x-auto whitespace-nowrap no-scrollbar w-full max-w-[800px]">
          <div className="flex items-center space-x-4 px-4">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="px-6 py-2 text-neutral-200 rounded-full hover:border-neutral-100 hover:bg-neutral-500
                 transition whitespace-nowrap flex justify-center"
              >
                {id}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
