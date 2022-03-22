import { createSlice } from '@reduxjs/toolkit';
import ProductList from 'models/ProductList';

const initialState = {
  productList: new ProductList({
    cities: [
      ['Москва', 'square'],
      ['СПБ', 'spb'],
      ['Казань', 'kazan'],
      ['Краснодар', 'krasnodar'],
      ['Ростов', 'rostov'],
      ['Волгоград', 'volvograd'],
      ['Астрахань', 'astrahan'],
      ['Крым', 'crimea'],
    ],
  }),
  productsInit: [],
  products: [],
  save: false,
  toDeleteOptions: [],
  toDeleteProducts: [],
  createdOptions: [],
  createdProducts: [],
  pages: [],
  pagesInit: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateStatus: (state, action) => {
      state.save = action.payload;
    },
    updateProducts: (state, action) => {
      state.products = action.payload;
    },
    updateProductsInit: (state, action) => {
      state.productsInit = action.payload;
    },
    importInitProducts: (state, action) => {
      state.productsInit = action.payload;
      state.products = action.payload;
    },

    setOption: (state, action) => {
      const { product_id, option_position, option_name, option_value } = action.payload;
      const _products = JSON.parse(JSON.stringify(state.products));
      const _product = _products.find((item) => item.id === product_id);
      _product.options[option_position][option_name] = option_value;

      const product_position = null;
      _products.find((item, i) => {
        if (item.id === parseInt(product_id)) {
          product_position = i;
        }
      });
      state.products.splice(product_position, 1, _product);
      state.save = true;
    },
    addOption: (state, action) => {
      const { product_id, a, b, h, show, connectionType, density } = action.payload;
      const _products = JSON.parse(JSON.stringify(state.products));
      const _product = _products[product_id];
      const product_position = null;
      _products.find((item, i) => {
        if (item.id === parseInt(product_id)) {
          product_position = i;
        }
      });
      _product.options.push({
        a: parseInt(a),
        b: parseInt(b),
        h: parseInt(h),
        show: show || false,
        coef: ((parseInt(a) / 1000) * parseInt(b)) / 1000,
        connectionType: connectionType || ' - ',
        density: parseInt(density) || null,
        prices: state.productList.cities.map((item) => ({ city: item[1], value: null })),
      });
      state.products.splice(product_position, 1, _product);
      state.save = true;
    },
    setSave: (state, action) => {
      state.save = action.payload;
    },
    setPrices: (state, action) => {
      state.products = action.payload;
      state.save = true;
    },
    setToDeleteProducts: (state, action) => {
      state.toDeleteProducts.push(action.payload);
      state.save = true;
    },
    setToDeleteOptions: (state, action) => {
      const { product_id, option_position } = action.payload;
      state.toDeleteOptions.push({ product_id, option_position });
      state.save = true;
    },
    setCreatedOptions: (state, action) => {
      const { product_id, option_position } = action.payload;
      state.createdOptions.push({ product_id, option_position });
      state.save = true;
    },
    setCreatedProducts: (state, action) => {
      const { product_id } = action.payload;
      state.createdProducts.push( product_id );
      state.save = true;
    },
    clearToDeleteOptions: (state, action) => {
      state.toDeleteOptions = action.payload;
    },
    clearToDeleteProducts: (state, action) => {
      state.toDeleteProducts = action.payload;
    },
    clearCreatedOptions: (state, action) => {
      state.createdOptions = action.payload;
    },
    clearCreatedProducts: (state, action) => {
      state.createdProducts = action.payload;
    },
    deleteOptions: (state, action) => {
      state.products = action.payload;
    },
    importInitPages: (state, action) => {
      state.pages = action.payload;
      state.pagesInit = action.payload;
    },
    updatePages: (state, action) => {
      state.pages = action.payload;
    },
  },
});

export const {
  setCreatedOptions,
  setCreatedProducts,
  setToDeleteOptions,
  setToDeleteProducts,
  clearToDeleteOptions,
  clearToDeleteProducts,
  clearCreatedOptions,
  clearCreatedProducts,
  setOption,
  setPrices,
  updateStatus,
  updateProducts,
  updateProductsInit,
  addOption,
  importInitProducts,
  deleteOptions,
  setSave,
  importInitPages,
  updatePages,
} = productsSlice.actions;

export const selectPages = (state) => {
  return state.products.pages;
};
export const selectPagesInit = (state) => {
  return state.products.pagesInit;
};
export const selectCreatedOptions = (state) => {
  return state.products.createdOptions;
};
export const selectCreatedProducts = (state) => {
  return state.products.createdProducts;
};
export const selectToDeleteProducts = (state) => {
  return state.products.toDeleteProducts;
};
export const selectToDeleteOptions = (state) => {
  return state.products.toDeleteOptions;
};
export const selectProductList = (state) => {
  return state.products.productList;
};
export const selectProductsInit = (state) => {
  return state.products.productsInit;
};
export const selectProducts = (state) => {
  return state.products.products;
};
export const selectStatus = (state) => {
  return state.products.save;
};
export default productsSlice.reducer;
