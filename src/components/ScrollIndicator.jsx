import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const ScrollIndicator = () => {
  return (
    <div className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2">
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-border dark:border-gray-700 shadow-md flex items-center justify-center"
      >
        <FaChevronDown className="text-accent text-xs sm:text-sm" />
      </motion.div>
    </div>
  );
};

export default ScrollIndicator;
