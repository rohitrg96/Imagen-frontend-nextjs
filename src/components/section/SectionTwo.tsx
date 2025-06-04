import TitleDescription from '../ui/TitleDescription';
import PhotoSlider from '../ui/PhotoSlider';
import InfoCardGrid from '../layout/InfoCardsGrid';
import CustomButton from '../ui/CustomButton';
import {
  benchMarkTitle,
  sliderImages,
  creativeTitle,
  infoCards,
} from '@/content/sectionTwo';
import { JSX } from 'react';

/**
 * SectionTwo component renders the "Benchmarks" section of the page.
 *
 * It displays a section title with a call-to-action button, a photo slider showcasing benchmark results,
 * and another subsection that highlights creative capabilities using cards.
 *
 * All content (titles, descriptions, images, and cards) is sourced from the `sectionTwo` content module.
 *
 * @component
 * @returns {JSX.Element} The complete "Benchmarks" section including slider and info cards.
 */
export default function SectionTwo(): JSX.Element {
  return (
    <section id="Benchmarks" className="scroll-mt-20">
      <div>
        <TitleDescription
          title={benchMarkTitle.title}
          description={benchMarkTitle.description}
          titleSize={benchMarkTitle.titleSize}
          descWidth="max-w-xl"
        />

        {/* Center the button */}
        <CustomButton width="w-auto" height="py-3">
          View Model Card
        </CustomButton>

        <PhotoSlider images={sliderImages} />

        <div className="mt-10 mb-10">
          <TitleDescription
            title={creativeTitle.title}
            description={creativeTitle.description}
            titleSize={creativeTitle.titleSize}
            descWidth="max-w-xl"
          />
          <InfoCardGrid cards={infoCards} />
        </div>
      </div>
    </section>
  );
}
