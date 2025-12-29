'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { siteContent } from '@/config/site-content';

export default function BirthdayPage() {
  const [mounted, setMounted] = useState(false);
  const { birthday, dates } = siteContent;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen animated-gradient flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 relative overflow-hidden">
      {/* Floating Hearts */}
      <div className="floating-hearts"></div>

      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-rose-500 mb-4 sm:mb-6 px-2 heartbeat">
            {birthday.title}
          </h1>
          <p className="font-script text-lg sm:text-xl md:text-2xl text-warm-gray mb-6 sm:mb-8">
            {dates.birthday}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl mb-6 sm:mb-8"
        >
          <div className="prose prose-base sm:prose-lg prose-rose max-w-none">
            <h2 className="font-serif text-xl sm:text-2xl text-rose-500 mb-4 sm:mb-6">
              {birthday.subtitle}
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-dark mb-4">
              {birthday.paragraph1}
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-dark mb-4">
              {birthday.paragraph2}
            </p>

            <div className="bg-rose-50 rounded-xl p-4 sm:p-6 my-6 sm:my-8 sparkle-container">
              <h3 className="font-serif text-lg sm:text-xl text-rose-500 mb-3 sm:mb-4">
                {birthday.wishesTitle}
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-dark">
                {birthday.wishes.map((wish, index) => (
                  <li key={index}>{wish}</li>
                ))}
              </ul>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-dark mb-4">
              {birthday.paragraph3}
            </p>

            <p className="font-serif text-base sm:text-lg md:text-xl text-rose-500 text-center mt-6 sm:mt-8">
              {birthday.closingMessage}
              <br/>
              {birthday.closingQuote}
            </p>

            <p
              className="font-script text-base sm:text-lg text-warm-gray text-center mt-4 sm:mt-6"
              dangerouslySetInnerHTML={{ __html: birthday.signature }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center px-4"
        >
          <Link
            href="/countdown"
            className="inline-block w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-rose-500 text-white text-base sm:text-lg font-serif font-medium rounded-full hover:bg-rose-600 transition-all shadow-xl hover:shadow-2xl active:scale-95 sm:hover:scale-105"
          >
            {birthday.button}
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
