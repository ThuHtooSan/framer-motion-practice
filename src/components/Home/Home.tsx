import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { buttonVariants } from './Home.variants';

const Home = () => {
  return (
    <motion.div
      className='home container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to='/base'>
        <motion.button
          variants={buttonVariants}
          whileHover='hover'
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
