import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { LetterCard } from '@/components/ui/LetterCard';

interface LettersProps {
  data: {
    title: string;
    letter: {
      title: string;
      date: string;
      mood: string;
      content: string;
    };
  };
}

export function Letters({ data }: LettersProps) {
  return (
    <Section id="letters" className="animated-gradient relative overflow-hidden">
      {/* Floating Hearts */}
      <div className="floating-hearts"></div>

      <Container>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-center text-dark mb-12 sm:mb-16 px-4 relative z-10">
          {data.title}
        </h2>
        <div className="grid gap-8 sm:gap-12 md:gap-16 relative z-10">
          <LetterCard data={data.letter} />
        </div>
      </Container>
    </Section>
  );
}
