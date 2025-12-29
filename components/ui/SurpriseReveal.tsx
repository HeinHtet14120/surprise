'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ContentData, SurpriseFrontmatter } from '@/types/content';

interface SurpriseRevealProps {
  data: ContentData<SurpriseFrontmatter>;
}

export function SurpriseReveal({ data }: SurpriseRevealProps) {
  const { frontmatter, htmlContent } = data;
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  // Countdown timer
  useEffect(() => {
    if (frontmatter.unlockType === 'countdown') {
      const targetDate = new Date(frontmatter.unlockValue as string);
      const interval = setInterval(() => {
        if (new Date() >= targetDate) {
          setIsUnlocked(true);
          clearInterval(interval);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [frontmatter.unlockType, frontmatter.unlockValue]);

  const handleUnlock = () => {
    if (frontmatter.unlockType === 'click') {
      setIsUnlocked(true);
    } else if (frontmatter.unlockType === 'password') {
      if (input.toLowerCase() === String(frontmatter.unlockValue).toLowerCase()) {
        setIsUnlocked(true);
        setError('');
      } else {
        setError('Incorrect password. Try again!');
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleUnlock();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <motion.div
            key="locked"
            exit={{ scale: 0, opacity: 0 }}
            className="text-center"
          >
            {frontmatter.unlockType === 'password' && (
              <div>
                <h2 className="font-serif text-3xl text-dark mb-6">
                  Unlock Your Surprise
                </h2>
                <p className="text-warm-gray mb-8">
                  Enter the secret word to reveal your special message
                </p>
                <div className="flex flex-col items-center gap-4">
                  <input
                    type="password"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="border-2 border-rose-300 rounded-lg px-6 py-3 text-center text-lg focus:outline-none focus:border-rose-500 transition-colors"
                    placeholder="Enter password..."
                  />
                  {error && (
                    <p className="text-rose-500 text-sm">{error}</p>
                  )}
                  <button
                    onClick={handleUnlock}
                    className="px-8 py-3 bg-rose-500 text-white text-lg rounded-lg hover:bg-rose-600 transition-colors shadow-lg"
                  >
                    Unlock
                  </button>
                </div>
              </div>
            )}
            {frontmatter.unlockType === 'click' && (
              <button
                onClick={handleUnlock}
                className="px-12 py-6 bg-rose-500 text-white text-2xl font-serif rounded-full hover:bg-rose-600 transition-all shadow-xl hover:scale-105"
              >
                Click to Reveal Your Surprise
              </button>
            )}
            {frontmatter.unlockType === 'countdown' && (
              <div>
                <h2 className="font-serif text-3xl text-dark mb-4">
                  Almost there...
                </h2>
                <p className="text-warm-gray">
                  Your surprise will be revealed soon!
                </p>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="unlocked"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="max-w-3xl mx-auto px-6"
          >
            <div
              className="prose prose-lg prose-rose max-w-none"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
