'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { siteContent } from '@/config/site-content';

export default function HomePage() {
  const { home } = siteContent;
  return (
    <main className="min-h-screen animated-gradient flex items-center justify-center px-4 sm:px-6 py-8 relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="floating-hearts"></div>

      {/* Rose Petals */}
      <div className="rose-petals">
        <div className="petal">🌸</div>
        <div className="petal">🌸</div>
        <div className="petal">🌸</div>
        <div className="petal">🌸</div>
        <div className="petal">🌸</div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center max-w-2xl w-full relative z-10 sparkle-container"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-rose-500 mb-4 sm:mb-6 px-2"
        >
          {home.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-sans text-base sm:text-lg md:text-xl text-warm-gray mb-8 sm:mb-12 px-4"
        >
          {home.subtitle}
          <br />
          {home.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="px-4"
        >
          <Link
            href="/birthday"
            className="inline-block w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-rose-500 text-white text-base sm:text-lg font-serif font-medium rounded-full hover:bg-rose-600 transition-all shadow-xl hover:shadow-2xl active:scale-95 sm:hover:scale-105"
          >
            {home.button}
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-8 sm:mt-12 font-script text-sm sm:text-base text-rose-400 px-4 heartbeat"
        >
          {home.footer}
        </motion.p>
      </motion.div>
    </main>
  );
}
