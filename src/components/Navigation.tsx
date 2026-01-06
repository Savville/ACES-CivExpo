import { motion } from 'motion/react';

interface NavigationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const pages = ['Home', 'Programs', 'Categories', 'Partners', 'Sponsorship', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-2 md:gap-6 flex-wrap">
          {pages.map((page, index) => (
            <motion.button
              key={page}
              onClick={() => setCurrentPage(index)}
              className={`px-3 md:px-6 py-2 rounded-full transition-all ${
                currentPage === index
                  ? 'bg-gradient-to-r from-yellow-400 via-green-500 to-yellow-400 text-black font-bold'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {page}
            </motion.button>
          ))}
        </div>
      </div>
    </nav>
  );
}
