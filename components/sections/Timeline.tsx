import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { TimelineCard } from '@/components/ui/TimelineCard';

interface TimelineYear {
  yearNumber: number;
  title: string;
  dateRange: string;
  coverImage: string;
  content: string;
}

interface TimelineProps {
  data: {
    title: string;
    years: TimelineYear[];
  };
}

export function Timeline({ data }: TimelineProps) {
  return (
    <Section id="timeline" className="bg-cream">
      <Container>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-center text-dark mb-12 sm:mb-16 px-4">
          {data.title}
        </h2>
        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {data.years.map((year, index) => (
            <TimelineCard key={year.yearNumber} data={year} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
