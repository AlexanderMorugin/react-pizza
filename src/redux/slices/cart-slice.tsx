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
        return amount + obj.price[0] * obj.count;
      }, 0);
    },
    removeItems: (state, action) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems: (state) => {
      state.items = [];
    },
  },
});

export const { addItems, removeItems, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
