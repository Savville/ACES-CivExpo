import { motion } from 'motion/react';
import logo from 'figma:asset/1fa51700170362a802877d387e9efd586bb1a631.png';

export default function FloatingLogo() {
  return (
    <motion.div
      className="fixed top-20 right-8 md:right-16 z-40"
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <motion.img
        src={logo}
        alt="ACES KU Logo"
        className="w-24 h-24 md:w-32 md:h-32 drop-shadow-2xl"
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  );
}
