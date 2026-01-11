'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeroProps {
  data: {
    title: string;
    subtitle: string;
    heroImage: string;
    content: string;
  };
}

export function Hero({ data }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient">
      {/* Floating Hearts */}
      <div className="floating-hearts"></div>

      {/* Rose Petals */}
      <div className="rose-petals">
        <div className="petal">🌸</div>
        <div className="petal">🌸</div>
        <div className="petal">🌸</div>
        <div className="petal">🌸</div>
        <div className="petal">🌸</div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.heroImage}
          alt={data.title}
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="opacity-20"
          priority
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-4xl"
      >
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-rose-500 mb-3 sm:mb-4 md:mb-6">
          {data.title}
        </h1>
        <p className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl text-warm-gray mb-6 sm:mb-8">
          {data.subtitle}
        </p>

        <div
          className="prose prose-base sm:prose-lg prose-rose mx-auto text-dark"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </motion.div>
    </section>
  );
}
