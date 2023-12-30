import { Variants } from 'framer-motion';

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
