import { Link } from 'react-router-dom';
import { ToppingProps, ToppingType } from './Toppings.types';
import { motion } from 'framer-motion';
import { containerVariants } from '../Base/Base.variants';
import { buttonVariants } from '../Home/Home.variants';

const Toppings = ({ addTopping, pizza }: ToppingProps) => {
  let toppings: ToppingType[] = [
    'mushrooms',
    'peppers',
    'onions',
    'olives',
    'extra cheese',
    'tomatoes',
  ];

  return (
    <motion.div
      className='toppings container'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to='/order'>
        <motion.button
          variants={buttonVariants}
          whileHover='hover'
        >
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
