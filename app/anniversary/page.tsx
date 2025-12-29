import { Hero } from '@/components/sections/Hero';
import { Timeline } from '@/components/sections/Timeline';
import { Letters } from '@/components/sections/Letters';
import { Gallery } from '@/components/sections/Gallery';
import { InfinityCounter } from '@/components/sections/InfinityCounter';
import { Closing } from '@/components/sections/Closing';
import { siteContent } from '@/config/site-content';

export default async function AnniversaryPage() {
  const { anniversary } = siteContent;

  return (
    <main className="overflow-x-hidden">
      <Hero data={anniversary.hero} />
      <Timeline data={anniversary.timeline} />
      <Letters data={anniversary.letters} />
      <Gallery data={anniversary.gallery} />
      <InfinityCounter />
      <Closing data={anniversary.closing} />
    </main>
  );
}
