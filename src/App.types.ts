import { BaseType } from './components/Base/Base.types';
import { ToppingType } from './components/Toppings/Toppings.types';

export type Pizza = {
  base: BaseType | '';
  toppings: ToppingType[];
};
