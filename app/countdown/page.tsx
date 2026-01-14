'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { siteContent } from '@/config/site-content';

export default function CountdownPage() {
  const router = useRouter();
  const { countdown, dates } = siteContent;
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  // Target date from config (in MMT - Myanmar Time, UTC+6:30)
  const targetDate = new Date(dates.anniversaryCountdown + '+06:30');

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Compare directly - both dates use UTC internally
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        // Date has arrived, redirect to anniversary
        router.push('/anniversary');
        return null;
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === countdown.passwordSection.password) {
      router.push('/anniversary');
    } else {
      setError(countdown.passwordSection.error);
      setPassword('');
    }
  };

  if (!timeLeft) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <p className="text-warm-gray">Redirecting...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-100 via-cream to-rose-50 flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-rose-500 mb-3 sm:mb-4 px-2">
            {countdown.title}
          </h1>
          <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl text-warm-gray px-4">
            {countdown.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl mb-6 sm:mb-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
            <div className="text-center">
              <div className="bg-rose-500 text-white rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 mb-1 sm:mb-2">
                <div className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                  {timeLeft.days}
                </div>
              </div>
              <div className="font-sans text-warm-gray text-sm sm:text-base md:text-lg">Days</div>
            </div>

            <div className="text-center">
              <div className="bg-rose-400 text-white rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 mb-1 sm:mb-2">
                <div className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                  {timeLeft.hours}
                </div>
              </div>
              <div className="font-sans text-warm-gray text-sm sm:text-base md:text-lg">Hours</div>
            </div>

            <div className="text-center">
              <div className="bg-rose-300 text-white rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 mb-1 sm:mb-2">
                <div className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                  {timeLeft.minutes}
                </div>
              </div>
              <div className="font-sans text-warm-gray text-sm sm:text-base md:text-lg">Minutes</div>
            </div>

            <div className="text-center">
              <div className="bg-rose-200 text-dark rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 mb-1 sm:mb-2">
                <div className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                  {timeLeft.seconds}
                </div>
              </div>
              <div className="font-sans text-warm-gray text-sm sm:text-base md:text-lg">Seconds</div>
            </div>
          </div>

          <p className="text-center font-script text-base sm:text-lg md:text-xl text-rose-500 mb-6 sm:mb-8 px-4">
            {countdown.quote}
          </p>

          <div className="text-center px-4">
            <button
              onClick={() => setShowPasswordInput(!showPasswordInput)}
              className="text-warm-gray hover:text-rose-500 transition-colors text-xs sm:text-sm underline"
            >
              {showPasswordInput ? countdown.toggleButton.hide : countdown.toggleButton.show}
            </button>
          </div>
        </motion.div>

        <AnimatePresence>
          {showPasswordInput && (
            <motion.div
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: 20, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl">
                <h3 className="font-serif text-lg sm:text-xl text-dark text-center mb-4 sm:mb-6">
                  {countdown.passwordSection.title}
                </h3>
                <form onSubmit={handlePasswordSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder={countdown.passwordSection.placeholder}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 text-center text-base sm:text-lg border-2 border-rose-300 rounded-lg sm:rounded-xl focus:outline-none focus:border-rose-500 transition-colors"
                    />
                    {error && (
                      <p className="text-rose-500 text-center text-xs sm:text-sm">{error}</p>
                    )}
                    <button
                      type="submit"
                      className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-rose-500 text-white text-base sm:text-lg font-serif font-medium rounded-lg sm:rounded-xl hover:bg-rose-600 active:scale-95 transition-all shadow-lg hover:shadow-xl"
                    >
                      {countdown.passwordSection.button}
                    </button>
                  </div>
                </form>
                <p className="text-center text-warm-gray text-xs sm:text-sm mt-3 sm:mt-4">
                  {countdown.passwordSection.hint}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
