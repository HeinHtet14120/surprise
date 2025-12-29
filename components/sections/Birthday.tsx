'use client';

import { format } from 'date-fns';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { FadeInView } from '@/components/ui/FadeInView';
import type { ContentData, BirthdayFrontmatter } from '@/types/content';

interface BirthdayProps {
  data: ContentData<BirthdayFrontmatter>;
}

export function Birthday({ data }: BirthdayProps) {
  const { frontmatter, htmlContent } = data;

  return (
    <Section id="birthday" className="bg-rose-100">
      <Container>
        <FadeInView>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-5xl md:text-6xl text-rose-500 mb-6">
              {frontmatter.title}
            </h2>
            <p className="font-script text-2xl text-warm-gray mb-12">
              {format(new Date(frontmatter.birthdayDate), 'MMMM dd, yyyy')}
            </p>
            <div
              className="prose prose-lg prose-rose mx-auto text-dark"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>
        </FadeInView>
      </Container>
    </Section>
  );
}
