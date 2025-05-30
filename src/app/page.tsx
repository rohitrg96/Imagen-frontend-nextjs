import Hero from '@/components/section/Hero';
import PhotoText from '@/components/section/PhotoText';
import StickyNav from '@/components/ui/StickyNav';

import SectionOne from '@/components/section/SectionOne';
import SectionTwo from '@/components/section/SectionTwo';
import SectionThree from '@/components/section/SectionThree';
import SectionFour from '@/components/section/SectionFour';
import SectionSix from '@/components/section/SectionSix';
import Acknowledgements from '@/components/section/Acknowledgements';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <PhotoText />
      <StickyNav />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionSix />
      <Acknowledgements />
    </main>
  );
}
