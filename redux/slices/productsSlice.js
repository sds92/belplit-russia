import { createSlice } from '@reduxjs/toolkit';
import ProductList from 'models/ProductList';

const initialState = {
  productsInit: [],
  products: [],
  changes: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    update: (state, action) => {
      state.products = action.payload;
    },
    importInitProducts: (state, action) => {
      state.productsInit = action.payload;
      state.products = action.payload;
    },
    setOption: (state, action) => {
      const { product_id, option_position, option_name, option_value } = action.payload;
      state.products.find((item) => item.id === product_id).options[option_position][option_name] =
        option_value;

      // state.changes.push()
    },
    addOption: (state, action) => {
      const {product_id, a, b, h, show, coef, connectionType, density, prices} = action.payload
      state.products
        .find((item) => item.id === product_id)
        .options.push({
          a: a,
          b: b,
          h: h,
          show: show,
          coef: coef,
          connectionType: connectionType,
          density: density,
          prices: config.cities.map((item) => ({ city: item, value: null })),
        });
    },
    setPrices: (state, action) => {
      const { product_id, option_position, option_city, option_value } = action.payload;
      state.products
        .find((item) => item.id === product_id)
        .options[option_position].prices.find((item) => item.city === option_city).value = option_value;
    },
    deleteOption: (state, action) => {
      const { product_id, option_position } = action.payload;
      state.products.find((item) => item.id === product_id).options.splice(option_position, 1);
    },
  },
});

export const { update, setOption, setPrices, deleteOption, addOption } = productsSlice.actions;

export const selectProductsInit = (state) => {
  return state.products.productsInit;
};
export const selectProducts = (state) => {
  return state.products.products;
};
export default productsSlice.reducer;
