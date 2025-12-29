'use client';

import { format } from 'date-fns';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { FadeInView } from '@/components/ui/FadeInView';

interface ClosingProps {
  data: {
    signature: string;
    date: string;
    content: string;
  };
}

export function Closing({ data }: ClosingProps) {
  return (
    <Section id="closing" className="bg-cream min-h-screen flex items-center">
      <Container>
        <FadeInView>
          <div className="max-w-3xl mx-auto text-center px-4">
            <div
              className="prose prose-base sm:prose-lg prose-rose mx-auto text-dark mb-8 sm:mb-12"
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
            <div className="border-t-2 border-rose-200 pt-6 sm:pt-8">
              <p className="font-script text-lg sm:text-xl text-rose-500 mb-2">
                {data.signature}
              </p>
              <p className="text-warm-gray text-xs sm:text-sm">
                {format(new Date(data.date), 'MMMM dd, yyyy')}
              </p>
            </div>
          </div>
        </FadeInView>
      </Container>
    </Section>
  );
}
