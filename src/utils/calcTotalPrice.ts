import {MyCartItem} from 'redux/cart/types';

export const calcTotalPrice = (items: MyCartItem[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
