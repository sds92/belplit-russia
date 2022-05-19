import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setPrices,
  setIsChanged,
  selectProducts
} from 'redux/slices/productsSlice';
import { productsController } from 'utils/products.controller';

export default function InputPrice(props) {
  const { product, city, optionPosition } = props;
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  // console.log("🚀 ~ file: InputPrice.js ~ line 14 ~ InputPrice ~ products", products)
  const [price, setPrice] = React.useState(
    ''
  );
  const [focus, setFocus] = React.useState(false);

  function handlePrices(input) {
    dispatch(setIsChanged(true));
    let _products = productsController.setPrices(products, input)
    dispatch(setPrices(_products));
  }

  return (
    <input
      type={'number'}
      onChange={(e) => {
        handlePrices({
          product_id: product.id,
          option_position: optionPosition,
          option_city: city,
          option_value: e.target.value,
        });
        setPrice(e.target.value);
      }}
      value={price}
      placeholder={price}
      onFocus={() => {
        setFocus(true);
      }}
      onBlur={() => {
        setFocus(false);
      }}
      className={`w-12 border ${
        focus ? `border-opacity-95` : `border-opacity-50 `
      } border-zinc-600 rounded-sm shadow-inner`}
    />
  );
}
