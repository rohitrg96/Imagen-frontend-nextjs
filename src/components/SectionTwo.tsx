import TitleDescription from './TitleDescription';
import PhotoSlider from './PhotoSlider';

export default function SectionTwo() {
  const sliderImages = ['images/b1.svg'];
  const benchMarkTitle = {
    title: 'Benchmarks',
    titleSize: 'text-2xl md:text-5xl lg:text-4xl',
    description:
      'In tests, people prefer the latest version of Imagen to previous models — and other leading text-to-image models. Find out more about the methodology and our performance in the model card.',
  };

  return (
    <>
      <div className="mt-15">
        <TitleDescription
          title={benchMarkTitle.title}
          description={benchMarkTitle.description}
          titleSize={benchMarkTitle.titleSize}
        />

        {/* Center the button */}
        <div className="flex justify-center mt-10">
          <button className="px-5 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition font-semibold w-60 md:w-auto">
            View Model Card
          </button>
        </div>
        <PhotoSlider images={sliderImages} />
      </div>
    </>
  );
}
