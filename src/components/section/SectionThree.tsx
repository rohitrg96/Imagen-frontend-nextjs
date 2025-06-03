import TitleDescription from '../ui/TitleDescription';
import CustomButton from '../ui/CustomButton';
import { safetyTitle } from '@/content/sectionThree';

export default function SectionThree() {
  return (
    <section id="Safety & Responsibility" className="scroll-mt-20">
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
    </section>
  );
}
