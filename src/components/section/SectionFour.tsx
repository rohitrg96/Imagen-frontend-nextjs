import TitleDescription from '../ui/TitleDescription';
import CardsSection from '../layout/CardsSection';
import { showCaseTitle } from '@/content/sectionFour';

export default function SectionFour() {
  return (
    <section id="Showcase" className="scroll-mt-20">
      <div className="mt-15">
        <TitleDescription
          title={showCaseTitle.title}
          titleSize={showCaseTitle.titleSize}
        />
        <div className="flex justify-evenly">
          <CardsSection cards={showCaseTitle.cards} />
        </div>
      </div>
    </section>
  );
}
