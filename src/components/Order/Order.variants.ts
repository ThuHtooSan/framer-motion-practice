import { Variants } from 'framer-motion';

export const containerVariants: Variants = {
  hidden: {
    x: '100vw',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      when: 'beforeChildren',
      staggerChildren: 0.4,
    },
  },
};

export const childVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
