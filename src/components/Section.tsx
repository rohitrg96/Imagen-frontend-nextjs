import TitleDescription from './TitleDescription';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  title: string;
  description: string;
}

export default function Section({ id, children, title, description }: SectionProps) {
  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center text-3xl font-bold border-b"
    >
      {children}
    </section>
  );
}
