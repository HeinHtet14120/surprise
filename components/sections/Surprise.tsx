import { Section } from '@/components/layout/Section';
import { SurpriseReveal } from '@/components/ui/SurpriseReveal';
import type { ContentData, SurpriseFrontmatter } from '@/types/content';

interface SurpriseProps {
  data: ContentData<SurpriseFrontmatter>;
}

export function Surprise({ data }: SurpriseProps) {
  return (
    <Section id="surprise" className="bg-gradient-to-b from-rose-50 to-cream">
      <SurpriseReveal data={data} />
    </Section>
  );
}
