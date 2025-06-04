import { fallbackMessages } from '@/content/errorFallbacks';
import Hero from '@/components/section/Hero';
import PhotoText from '@/components/section/PhotoText';
import StickyNav from '@/components/ui/StickyNav';
import SectionOne from '@/components/section/SectionOne';
import SectionTwo from '@/components/section/SectionTwo';
import SectionThree from '@/components/section/SectionThree';
import SectionFour from '@/components/section/SectionFour';
import SectionFive from '@/components/section/SectionFive';
import Acknowledgements from '@/components/section/Acknowledgements';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';

export default function Home() {
  return (
    <main>
      <ErrorBoundary fallback={<div>{fallbackMessages.hero}</div>}>
        <Hero />
      </ErrorBoundary>

      <ErrorBoundary fallback={<div>{fallbackMessages.photoText}</div>}>
        <PhotoText />
      </ErrorBoundary>

      <ErrorBoundary fallback={<div>{fallbackMessages.stickyNav}</div>}>
        <StickyNav />
      </ErrorBoundary>

      <ErrorBoundary fallback={<div>{fallbackMessages.sectionOne}</div>}>
        <SectionOne />
      </ErrorBoundary>

      <ErrorBoundary fallback={<div>{fallbackMessages.sectionTwo}</div>}>
        <SectionTwo />
      </ErrorBoundary>

      <ErrorBoundary fallback={<div>{fallbackMessages.sectionThree}</div>}>
        <SectionThree />
      </ErrorBoundary>

      <ErrorBoundary fallback={<div>{fallbackMessages.sectionFour}</div>}>
        <SectionFour />
      </ErrorBoundary>

      <ErrorBoundary fallback={<div>{fallbackMessages.sectionFive}</div>}>
        <SectionFive />
      </ErrorBoundary>

      <ErrorBoundary fallback={<div>{fallbackMessages.acknowledgements}</div>}>
        <Acknowledgements />
      </ErrorBoundary>
    </main>
  );
}
