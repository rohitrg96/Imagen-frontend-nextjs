import TitleDescription from '../ui/TitleDescription';
import CardsSection from '../layout/CardsSection';
import { showCaseTitle } from '@/content/sectionFour';
import { JSX } from 'react';

/**
 * SectionFour component renders the Showcase section with a title and a card layout.
 *
 * It displays a title using the `TitleDescription` component and
 * renders a collection of cards inside the `CardsSection` component.
 *
 * The content for the title and cards is sourced from the `showCaseTitle` object.
 *
 * @component
 * @returns {JSX.Element} The showcase section containing a title and cards.
 */
export default function SectionFour(): JSX.Element {
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
