'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { siteContent } from '@/config/site-content';

export function InfinityCounter() {
  const { infinityCounter } = siteContent.anniversary;
  const [timeElapsed, setTimeElapsed] = useState<{
    years: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  // Start date from config
  const startDate = new Date(siteContent.dates.relationshipStart);

  useEffect(() => {
    const calculateTimeElapsed = () => {
      const now = new Date();
      const difference = now.getTime() - startDate.getTime();

      const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
      const remainingAfterYears = difference % (1000 * 60 * 60 * 24 * 365.25);
      const days = Math.floor(remainingAfterYears / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return { years, days, hours, minutes, seconds };
    };

    // Initial calculation
    setTimeElapsed(calculateTimeElapsed());

    // Update every second
    const timer = setInterval(() => {
      setTimeElapsed(calculateTimeElapsed());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeElapsed) {
    return null;
  }

  return (
    <Section id="infinity-counter" className="animated-gradient relative overflow-hidden">
      {/* Floating Hearts */}
      <div className="floating-hearts"></div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-rose-500 mb-3 sm:mb-4 px-4 relative z-10">
            {infinityCounter.title}
          </h2>
          <p className="font-script text-base sm:text-lg text-warm-gray mb-6 sm:mb-8 px-4 relative z-10">
            {infinityCounter.subtitle}
          </p>
          <p className="font-sans text-sm sm:text-base text-warm-gray px-4 relative z-10">
            {infinityCounter.dateRange}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl mb-6 sm:mb-8 relative z-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-rose-500 to-rose-600 text-white rounded-xl md:rounded-2xl p-4 sm:p-6 mb-2 sparkle-container">
                <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">
                  {timeElapsed.years}
                </div>
              </div>
              <div className="font-sans text-warm-gray text-sm sm:text-base">{infinityCounter.labels.years}</div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-rose-400 to-rose-500 text-white rounded-xl md:rounded-2xl p-4 sm:p-6 mb-2 sparkle-container">
                <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">
                  {timeElapsed.days}
                </div>
              </div>
              <div className="font-sans text-warm-gray text-sm sm:text-base">{infinityCounter.labels.days}</div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-rose-300 to-rose-400 text-white rounded-xl md:rounded-2xl p-4 sm:p-6 mb-2">
                <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">
                  {timeElapsed.hours}
                </div>
              </div>
              <div className="font-sans text-warm-gray text-sm sm:text-base">{infinityCounter.labels.hours}</div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-rose-200 to-rose-300 text-white rounded-xl md:rounded-2xl p-4 sm:p-6 mb-2">
                <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">
                  {timeElapsed.minutes}
                </div>
              </div>
              <div className="font-sans text-warm-gray text-sm sm:text-base">{infinityCounter.labels.minutes}</div>
            </div>

            <div className="text-center col-span-2 md:col-span-1">
              <div className="bg-gradient-to-br from-rose-100 to-rose-200 text-dark rounded-xl md:rounded-2xl p-4 sm:p-6 mb-2">
                <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">
                  {timeElapsed.seconds}
                </div>
              </div>
              <div className="font-sans text-warm-gray text-sm sm:text-base">{infinityCounter.labels.seconds}</div>
            </div>
          </div>

          <div className="text-center space-y-3 sm:space-y-4">
            <p className="font-script text-base sm:text-lg md:text-xl text-rose-500 px-4">
              {infinityCounter.quote}
            </p>
            <p className="font-sans text-sm sm:text-base text-warm-gray px-4">
              {infinityCounter.footer}
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
