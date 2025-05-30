import TitleDescription from '../ui/TitleDescription';
import CustomButton from '../ui/CustomButton';

export default function SectionThree() {
  const safetyTitle = {
    title: 'Safety & Responsibility',
    titleSize: 'text-2xl md:text-4xl lg:text-4xl',
    descSize: 'text-lg md:text-xl lg:text-2xl',
    description: [
      'We use extensive filtering and data labeling to minimize harmful content in datasets and reduce the likelihood of harmful outputs. We also conduct red teaming and evaluations on content safety, including child safety, and representation.',
      'We are releasing Imagen 4 with our latest privacy, safety and security features. This includes SynthID, our tool that embeds an invisible digital watermark directly into an image, allowing it to be identified as AI generated.',
    ],
  };

  return (
    <>
      <div className="mt-15">
        <TitleDescription
          title={safetyTitle.title}
          description={safetyTitle.description}
          titleSize={safetyTitle.titleSize}
          descSize={safetyTitle.descSize}
          descWidth="max-w-xl"
        />
        <CustomButton width="w-auto" height="py-3">
          Learn more about SynthID
        </CustomButton>
      </div>
    </>
  );
}
