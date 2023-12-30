import { Pizza } from '../../App.types';

export type BaseType = 'Classic' | 'Thin & Crispy' | 'Thick Crust';

export type BaseProps = {
  addBase: (a: BaseType) => void;
  pizza: Pizza;
};
