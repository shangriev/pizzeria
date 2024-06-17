import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {calcTotalPrice} from 'utils/calcTotalPrice';
import {getCartFromLocalStorage} from 'utils/getCartFromLocalStorage';
import {MyCartItem, MyCartState} from './types';

const {items, totalPrice} = getCartFromLocalStorage();

const initialState: MyCartState = {
  totalPrice: totalPrice,
  items: items,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<MyCartItem>) {
      const findItems = state.items.find((obj) => obj.id === action.payload.id);
      if (findItems) {
        findItems.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem(state, action: PayloadAction<number>) {
      const itemIndex = state.items.findIndex((obj) => obj.id === action.payload);
      if (itemIndex !== -1) {
        state.items[itemIndex].count--;
        state.totalPrice -= state.items[itemIndex].price;
      }
    },

    plusItem(state, action: PayloadAction<number>) {
      const itemIndex = state.items.findIndex((obj) => obj.id === action.payload);
      if (itemIndex !== -1) {
        state.items[itemIndex].count++;
        state.totalPrice += state.items[itemIndex].price;
      }
    },

    removeItem(state, action: PayloadAction<number>) {
      const removedItemIndex = state.items.findIndex((obj) => obj.id === action.payload);
      if (removedItemIndex !== -1) {
        const removedItem = state.items[removedItemIndex];
        state.items.splice(removedItemIndex, 1);
        state.totalPrice -= removedItem.price * removedItem.count;
      }
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const {addItem, removeItem, clearItems, minusItem, plusItem} = cartSlice.actions;
export default cartSlice.reducer;
