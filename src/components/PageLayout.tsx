import { motion } from 'motion/react';
import { ReactNode } from 'react';
import FloatingLogo from './FloatingLogo';
import WavePattern from './WavePattern';
import StripedBorder from './StripedBorder';

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
}

export default function PageLayout({ children, title }: PageLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-16 relative"
    >
      <StripedBorder />
      <WavePattern />
      <FloatingLogo />
      
      <div className="container mx-auto px-8 md:px-16 relative z-10">
        {title && (
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
            className="text-4xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-500 via-green-600 to-yellow-500 bg-clip-text text-transparent"
          >
            {title}
          </motion.h1>
        )}
        {children}
      </div>
    </motion.div>
  );
}
