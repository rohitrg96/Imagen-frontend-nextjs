import TitleDescription from '../ui/TitleDescription';
import TryImagenCardsGrid from '../layout/TryImagenCardsGrid';

export default function SectionSix() {
  const showCaseTitle = {
    title: 'Try Imagen',
    titleSize: 'text-2xl md:text-4xl lg:text-4xl',
    cards: [
      { imageSrc: '/images/T1.svg', title: 'Gemini' },
      { imageSrc: '/images/T2.svg', title: 'Whisk' },
      { imageSrc: '/images/T3.svg', title: 'Google AI Studio' },
      { imageSrc: '/images/T4.svg', title: 'Vertex AI Studio' },
    ],
  };

  return (
    <>
      <div className="mt-15   ">
        <TitleDescription title={showCaseTitle.title} titleSize={showCaseTitle.titleSize} />
        <TryImagenCardsGrid cards={showCaseTitle.cards} />
      </div>
    </>
  );
}
