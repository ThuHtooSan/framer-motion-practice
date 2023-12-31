import { Link } from 'react-router-dom';
import { BaseProps, BaseType } from './Base.types';
import { motion } from 'framer-motion';
import { containerVariants, nextVarients } from './Base.variants';
import { buttonVariants } from '../Home/Home.variants';

const Base = ({ addBase, pizza }: BaseProps) => {
  const bases: BaseType[] = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div
      className='base container'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className='next'
          variants={nextVarients}
        >
          <Link to='/toppings'>
            <motion.button
              variants={buttonVariants}
              whileHover='hover'
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
