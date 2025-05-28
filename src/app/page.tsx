import Hero from '@/components/Hero';
import PhotoText from '@/components/PhotoText';
import StickyNav from '@/components/StickyNav';
import PhotoSlider from '@/components/PhotoSlider';

const images = ['/images/s1-1.webp', '/images/s1-2.webp', '/images/s1-3.webp', '/images/s1-4.webp'];

export default function Home() {
  return (
    <main>
      <Hero />
      <PhotoText />
      <div>
        <StickyNav />

        {[1, 2, 3, 4, 5].map((num) => (
          <section
            key={num}
            id={`section${num}`}
            className="min-h-screen flex items-center justify-center text-3xl font-bold  border-b "
          >
            <PhotoSlider images={images} />
          </section>
        ))}
      </div>
    </main>
  );
}
