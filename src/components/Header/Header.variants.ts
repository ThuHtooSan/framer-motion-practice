import { Variants } from 'framer-motion';

export const svgVariants: Variants = {
  hidden: {
    rotate: -180,
  },
  visible: {
    rotate: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

export const pathVariants: Variants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};
