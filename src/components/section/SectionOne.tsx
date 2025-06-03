import TitleDescription from '../ui/TitleDescription';
import PhotoSlider from '../ui/PhotoSlider';
import ExpandableCard from '../ui/ExpandableCard';
import CardsSection from '../layout/CardsSection';
import ImageTextOverlay from '../ui/ImageTextOverlay';
import {
  sections,
  cardSection,
  cardTitleDes,
  cards,
  sliderTitleDes,
} from '@/content/sectionOne';

export default function SectionOne() {
  return (
    <section id="Capabilities" className="scroll-mt-20">
      {sections.map((section, index) => (
        <div key={index} className="mb-16">
          <TitleDescription
            title={section.title}
            description={section.description}
          />
          <PhotoSlider images={section.images} />
        </div>
      ))}
      <TitleDescription
        title={cardSection.title}
        description={cardSection.description}
      />
      <ExpandableCard items={cardSection.items} />
      <TitleDescription
        title={cardTitleDes.title}
        description={cardTitleDes.description}
      />
      <CardsSection cards={cards} />
      <TitleDescription
        title={sliderTitleDes.title}
        description={sliderTitleDes.description}
      />
      <PhotoSlider images={sliderTitleDes.images} />
      <ImageTextOverlay
        imageSrc="/images/textImage.webp"
        line1="See what else Imagen 4 can do"
        buttonText="View Images"
        buttonLink="/images"
      />
    </section>
  );
}
