import { childVariants } from './Order.variants';
import { OrderProps } from './Order.types';
import { motion } from 'framer-motion';
import { containerVariants } from './Order.variants';
import { useContext, useEffect } from 'react';
import { ModalContext } from '../../contexts/ModalContext';

const Order = ({ pizza }: OrderProps) => {
  const { setShowModal } = useContext(ModalContext);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, []);

  return (
    <motion.div
      className='container order'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
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
