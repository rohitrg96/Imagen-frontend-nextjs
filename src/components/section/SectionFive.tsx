import TitleDescription from '../ui/TitleDescription';
import TryImagenCardsGrid from '../layout/TryImagenCardsGrid';
import { showCaseTitle } from '@/content/sectionFive';
import { JSX } from 'react';

/**
 * SectionFive component renders a showcase section with a title and a grid of cards.
 *
 * It uses the `showCaseTitle` content for the section's title and card data,
 * and renders the title via `TitleDescription` component and the cards via
 * `TryImagenCardsGrid`.
 *
 * @component
 * @returns {JSX.Element} The section containing the showcase title and cards grid.
 */
export default function SectionFive(): JSX.Element {
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
