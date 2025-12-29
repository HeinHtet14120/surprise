import { notFound } from 'next/navigation';
import Link from 'next/link';
import { LetterCard } from '@/components/ui/LetterCard';
import { Container } from '@/components/layout/Container';
import { siteContent } from '@/config/site-content';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  // Return just one letter slug based on config
  return [{ slug: 'letter-1' }];
}

export default async function LetterPage({ params }: PageProps) {
  const { slug } = await params;

  // Only letter-1 exists now
  if (slug !== 'letter-1') {
    notFound();
  }

  const letter = siteContent.anniversary.letters.letter;

  return (
    <main className="min-h-screen bg-cream py-20">
      <Container>
        <div className="mb-8">
          <Link
            href="/#letters"
            className="text-rose-500 hover:text-rose-600 transition-colors font-sans"
          >
            ← Back to all letters
          </Link>
        </div>
        <div className="max-w-3xl mx-auto">
          <LetterCard data={letter} />
        </div>
      </Container>
    </main>
  );
}
