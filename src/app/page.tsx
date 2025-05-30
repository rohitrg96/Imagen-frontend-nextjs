import Hero from '@/components/Hero';
import PhotoText from '@/components/PhotoText';
import StickyNav from '@/components/StickyNav';

import SectionOne from '@/components/SectionOne';
import SectionTwo from '@/components/SectionTwo';
import SectionThree from '@/components/SectionThree';
import SectionFour from '@/components/SectionFour';

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
      </div>
    </main>
  );
}
