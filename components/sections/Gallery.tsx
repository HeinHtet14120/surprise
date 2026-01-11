'use client';

import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { FadeInView } from '@/components/ui/FadeInView';

interface GalleryProps {
  data: {
    title: string;
    subtitle: string;
    footer: string;
    images: Array<{
      path: string;
      caption: string;
    }>;
  };
}

export function Gallery({ data }: GalleryProps) {
  return (
    <Section id="gallery" className="bg-cream">
      <Container>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-center text-dark mb-3 sm:mb-4 px-4">
          {data.title}
        </h2>
        <p className="text-center text-warm-gray text-base sm:text-lg mb-12 sm:mb-16 font-script px-4">
          {data.subtitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {data.images.map((item, index) => (
            <FadeInView key={index} delay={index * 0.1}>
              <div className="group relative aspect-square rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <Image
                  src={item.path}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  className="group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <p className="text-white text-xs sm:text-sm font-sans">{item.caption}</p>
                  </div>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </Container>
    </Section>
  );
}
