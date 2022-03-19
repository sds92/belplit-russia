import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    update: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { update } = productsSlice.actions;

export const selectProducts = (state) => {
  return state.products;
};
export default productsSlice.reducer;
