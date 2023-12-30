import { Pizza } from '../../App.types';

export type ToppingType =
  | 'mushrooms'
  | 'peppers'
  | 'onions'
  | 'olives'
  | 'extra cheese'
  | 'tomatoes';

export type ToppingProps = {
  addTopping: (a: ToppingType) => void;
  pizza: Pizza;
};
