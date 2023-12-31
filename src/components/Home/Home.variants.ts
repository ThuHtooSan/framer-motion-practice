import { Variants } from 'framer-motion';

export const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut',
    },
  },
};

export const buttonVariants: Variants = {
  hover: {
    scale: 1.1,
    boxShadow: '0 0 8px rgb(255, 255, 255)',
    textShadow: '0 0 8px rgb(255, 255, 255)',
    transition: {
      repeat: Infinity,
      duration: 0.4,
      repeatType: 'mirror',
    },
  },
};
