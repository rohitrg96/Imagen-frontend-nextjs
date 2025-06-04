import TitleDescription from '../ui/TitleDescription';
import CustomButton from '../ui/CustomButton';
import { safetyTitle } from '@/content/sectionThree';
import { JSX } from 'react';

/**
 * SectionThree component renders the "Safety & Responsibility" section.
 *
 * It includes a section title and description provided via the `safetyTitle` object,
 * and a call-to-action button prompting users to learn more about SynthID.
 *
 * @component
 * @returns {JSX.Element} A section containing safety-related messaging and a CTA button.
 */
export default function SectionThree(): JSX.Element {
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
