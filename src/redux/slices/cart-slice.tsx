import { createSlice } from '@reduxjs/toolkit';

export interface CartState {
  totalPrice: number;
  items: [];
}

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems: (state, action) => {
      const findItems = state.items.find((obj) => obj.id === action.payload.id);

      if (findItems) {
        findItems.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.items.reduce((amount, obj) => {
        return obj.price[0] * obj.count + amount;
      }, 0);
    },
    minusItems: (state, action) => {
      const findItems = state.items.find((obj) => obj.id === action.payload);
      if (findItems) {
        findItems.count--;
      }
      // state.totalPrice = state.items.reduce((amount, obj) => {
      //   return obj.price[0] * obj.count - amount;
      // }, 0);
    },
    removeItems: (state, action) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItems, minusItems, removeItems, clearItems } =
  cartSlice.actions;

export default cartSlice.reducer;
