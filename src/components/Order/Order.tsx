import { childVariants } from './Order.variants';
import { OrderProps } from './Order.types';
import { motion } from 'framer-motion';
import { containerVariants } from './Order.variants';

const Order = ({ pizza }: OrderProps) => {
  return (
    <motion.div
      className='container order'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
