import { useContext, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Pizza } from './App.types';
import { BaseType } from './components/Base/Base.types';
import { ToppingType } from './components/Toppings/Toppings.types';
import { AnimatePresence } from 'framer-motion';
import { ModalContext } from './contexts/ModalContext';
import { Header, Home, Base, Toppings, Order, Modal } from './components';

const App = () => {
  const [pizza, setPizza] = useState<Pizza>({
    base: '' as BaseType,
    toppings: [],
  });
  const location = useLocation();
  const { setShowModal } = useContext(ModalContext);

  const addBase = (base: BaseType) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping: ToppingType) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <>
      <Header />
      <Modal />
      <AnimatePresence
        mode='wait'
        onExitComplete={() => setShowModal(false)}
      >
        <Routes
          location={location}
          key={location.key}
        >
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/base'
            element={
              <Base
                addBase={addBase}
                pizza={pizza}
              />
            }
          />
          <Route
            path='/toppings'
            element={
              <Toppings
                addTopping={addTopping}
                pizza={pizza}
              />
            }
          />
          <Route
            path='/order'
            element={<Order pizza={pizza} />}
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
