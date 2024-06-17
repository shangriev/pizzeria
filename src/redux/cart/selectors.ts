import {RootState} from 'redux/store';

export const selectCart = (state: RootState) => state.cart;
export const selectCartItemId = (id: number) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id);
