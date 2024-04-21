import { configureStore } from '@reduxjs/toolkit';
import filterSlice from '../slices/filter-slice';
import cartSlice from '../slices/cart-slice';

export const store = configureStore({
  reducer: { filter: filterSlice, cart: cartSlice },
});
