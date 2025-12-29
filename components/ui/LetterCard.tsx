'use client';

import { motion } from 'framer-motion';
import { format } from 'date-fns';

interface LetterCardProps {
  data: {
    title: string;
    date: string;
    mood: string;
    content: string;
  };
}

export function LetterCard({ data }: LetterCardProps) {
  // Mood-based styling
  const moodStyles = {
    romantic: 'bg-rose-50 border-rose-200',
    emotional: 'bg-purple-50 border-purple-200',
    playful: 'bg-yellow-50 border-yellow-200',
  };

  const moodStyle = moodStyles[data.mood as keyof typeof moodStyles] || moodStyles.emotional;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`p-6 sm:p-8 md:p-12 rounded-xl border-2 shadow-lg ${moodStyle}`}
    >
      <div className="text-right text-warm-gray mb-3 sm:mb-4 text-sm sm:text-base">
        {format(new Date(data.date), 'MMMM dd, yyyy')}
      </div>

      <h3 className="font-script text-xl sm:text-2xl text-rose-500 mb-4 sm:mb-6">
        {data.title}
      </h3>

      <div
        className="font-script text-base sm:text-lg leading-relaxed prose prose-base sm:prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </motion.div>
  );
}
