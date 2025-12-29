'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface TimelineCardProps {
  data: {
    yearNumber: number;
    title: string;
    dateRange: string;
    coverImage: string;
    content: string;
  };
  index: number;
}

export function TimelineCard({ data, index }: TimelineCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col md:flex-row gap-6 sm:gap-8 items-center ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 relative h-64 sm:h-72 md:h-80 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
        <Image
          src={data.coverImage}
          alt={data.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 px-4 sm:px-0">
        <span className="font-script text-rose-400 text-lg sm:text-xl">
          {data.dateRange}
        </span>
        <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-dark mt-2 mb-3 sm:mb-4">
          Year {data.yearNumber}: {data.title}
        </h3>
        <div
          className="prose prose-base sm:prose-lg prose-warm-gray max-w-none"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>
    </motion.div>
  );
}
