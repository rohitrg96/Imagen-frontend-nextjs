import TitleDescription from './TitleDescription';
import CardsSection from './CardsSection';

export default function SectionFive() {
  const showCaseTitle = {
    title: 'Try Imagen',
    titleSize: 'text-2xl md:text-4xl lg:text-4xl',
    cards: [
      {
        imageSrc: '/images/sh1.svg',
        title: 'Cartwheel',
        description:
          'Cartwheels text-to-animation platform uses Imagen to create 3D character animations',
      },
      {
        imageSrc: '/images/sh2.svg',
        title: 'Viggle',
        description: 'Experimenting with Imagen 3 in its AI video creation toolset',
      },
    ],
  };

  return (
    <>
      <div className="mt-15">
        <TitleDescription title={showCaseTitle.title} titleSize={showCaseTitle.titleSize} />
        <div className="flex justify-evenly">
          <CardsSection cards={showCaseTitle.cards} />
        </div>
      </div>
    </>
  );
}
