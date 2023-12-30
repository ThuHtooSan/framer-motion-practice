import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Base from './components/Base';
import Toppings from './components/Toppings/Toppings';
import Order from './components/Order/Order';
import { Pizza } from './App.types';
import { BaseType } from './components/Base/Base.types';
import { ToppingType } from './components/Toppings/Toppings.types';

const App = () => {
  const [pizza, setPizza] = useState<Pizza>({
    base: '',
    toppings: [],
  });

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
      <Routes>
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
    </>
  );
};

export default App;
