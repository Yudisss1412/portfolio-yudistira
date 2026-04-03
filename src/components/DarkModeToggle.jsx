import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const [buttonPos, setButtonPos] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const handleClick = (e) => {
    if (isAnimating) return;

    const rect = e.currentTarget.getBoundingClientRect();
    setButtonPos({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });

    setIsAnimating(true);
    setIsDark(!isDark);

    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <>
      {/* Circular Reveal - Background Layer (behind content) */}
      <AnimatePresence>
        <motion.div
          key={isDark ? 'dark' : 'light'}
          className="fixed inset-0 pointer-events-none z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={`w-full h-full ${isDark ? 'bg-[#0a0a0a]' : 'bg-[#f8f8f8]'}`}
            initial={{
              clipPath: `circle(0% at ${buttonPos.x}px ${buttonPos.y}px)`,
            }}
            animate={{
              clipPath: `circle(150% at ${buttonPos.x}px ${buttonPos.y}px)`,
            }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={handleClick}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-border dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        aria-label="Toggle dark mode"
      >
        <motion.div
          className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center"
          animate={{ rotate: isDark ? 360 : 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {isDark ? (
              <FaMoon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300" />
            ) : (
              <FaSun className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
            )}
          </motion.div>
        </motion.div>
      </button>
    </>
  );
};

export default DarkModeToggle;
