import { notFound } from 'next/navigation';
import Link from 'next/link';
import { TimelineCard } from '@/components/ui/TimelineCard';
import { Container } from '@/components/layout/Container';
import { siteContent } from '@/config/site-content';

interface PageProps {
  params: Promise<{ year: string }>;
}

export async function generateStaticParams() {
  return [
    { year: '1' },
    { year: '2' },
    { year: '3' },
    { year: '4' },
    { year: '5' },
  ];
}

export default async function TimelineYearPage({ params }: PageProps) {
  const { year } = await params;
  const yearNum = parseInt(year, 10);

  if (isNaN(yearNum) || yearNum < 1 || yearNum > 5) {
    notFound();
  }

  const yearData = siteContent.anniversary.timeline.years.find(
    y => y.yearNumber === yearNum
  );

  if (!yearData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-cream py-20">
      <Container>
        <div className="mb-8">
          <Link
            href="/#timeline"
            className="text-rose-500 hover:text-rose-600 transition-colors font-sans"
          >
            ← Back to timeline
          </Link>
        </div>
        <div className="max-w-5xl mx-auto">
          <TimelineCard data={yearData} index={0} />
        </div>
      </Container>
    </main>
  );
}
