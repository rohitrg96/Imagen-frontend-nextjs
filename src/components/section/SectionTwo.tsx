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

export default function SectionTwo() {
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
