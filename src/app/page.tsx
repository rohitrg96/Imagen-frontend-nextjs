import Hero from '@/components/Hero';
import PhotoText from '@/components/PhotoText';
import StickyNav from '@/components/StickyNav';

import SectionOne from '@/components/SectionOne';
import SectionTwo from '@/components/SectionTwo';
import SectionThree from '@/components/SectionThree';
import SectionFour from '@/components/SectionFour';
import SectionSix from '@/components/SectionSix';
import Acknowledgements from '@/components/Acknowledgements';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <PhotoText />
      <div>
        <StickyNav />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionSix />
        <Acknowledgements />
        <Footer />
      </div>
    </main>
  );
}
