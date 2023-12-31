import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { AnimatePresence, motion } from 'framer-motion';
import { backdropVariants, modalVariants } from './Modal.variants';
import { Link } from 'react-router-dom';

const Modal = () => {
  const { showModal, setShowModal } = useContext(ModalContext);

  return (
    <AnimatePresence mode='wait'>
      {showModal && (
        <motion.div
          className='backdrop'
          variants={backdropVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          <motion.div
            className='modal'
            variants={modalVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
          >
            <p>Want to make another pizza?</p>
            <Link to='/'>
              <button>Start again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
