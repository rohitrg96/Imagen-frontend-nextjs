import TitleDescription from '../ui/TitleDescription';
import TryImagenCardsGrid from '../layout/TryImagenCardsGrid';
import { showCaseTitle } from '@/content/sectionFive';

export default function SectionFive() {
  return (
    <section id="Try Imagen" className="scroll-mt-20">
      <div className="mt-15">
        <TitleDescription
          title={showCaseTitle.title}
          titleSize={showCaseTitle.titleSize}
        />
        <TryImagenCardsGrid cards={showCaseTitle.cards} />
      </div>
    </section>
  );
}
