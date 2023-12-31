import { motion, useCycle } from 'framer-motion';
import { loaderVariants } from './Loader.variants';

const Loader = () => {
  const [animation, cycleAnimation] = useCycle('animationOne', 'animationTwo');
  return (
    <>
      <motion.div
        className='loader'
        variants={loaderVariants}
        animate={animation}
      ></motion.div>
      <div onClick={() => cycleAnimation()}>Cycle Animation</div>
    </>
  );
};

export default Loader;
