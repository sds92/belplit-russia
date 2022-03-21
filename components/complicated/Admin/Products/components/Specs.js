import React from 'react';
import { Layout } from './';
import { Icons } from '../../..';

import { useSelector, useDispatch } from 'react-redux';
import {
  update,
  selectProducts,
  selectProductList,
  selectProductsInit,
  setOption,
  setPrices,
  preDeleteOption,
  deleteOptions,
  addOption,
  updateStatus,
  selectPreDelete,
  setCreated,
  selectCreated,
  selectStatus,
  setSave
} from 'redux/slices/productsSlice';

export default function Specs(props) {
  const dispatch = useDispatch();
  const initProducts = useSelector(selectProductsInit);
  const products = useSelector(selectProducts);
  const productList = useSelector(selectProductList);
  const preDeleted = useSelector(selectPreDelete);
  const created = useSelector(selectCreated);
  const statusSave = useSelector(selectStatus);

  const { product } = props;
  const [state, setState] = React.useState({
    create: false,
    options: {},
    focus: {},
    newOption: {},
    tip: {},
  });
  function handlePrices(input) {
    dispatch(setSave(true))
  
    const { product_id, option_position, option_city, option_value } = input;
    let _products = JSON.parse(JSON.stringify(products));
    _products = productList.setPrices(_products, input)
    dispatch(setPrices(_products));
  }

  return (
    <Layout.Specs>
      {product &&
        product.options.map((option, i) => {
          let highlight = false;
          preDeleted.map((item) => {
            if (product.id === item.product_id && i === item.option_position) {
              highlight = 'red';
            }
          });
          created.map((item) => {
            if (product.id === item.product_id && i === item.option_position) {
              highlight = 'gold';
            }
          });
          //   options[i]?.sizes.map(({ _id }) => _id)?.indexOf(item_i._id) === -1;
          const bg =
            highlight === 'red'
              ? 'bg-red-200'
              : highlight === 'gold'
              ? 'bg-yellow-500 bg-opacity-40'
              : i % 2 != 0 ? 'bg-zinc-400 bg-opacity-40': '';
          return (
            <div
              key={`sdjkfhs${i}`}
              className={`w-full border-x border-zinc-500 font-light flex items-center justify-start `}
            >
              <div
                className={`flex-none flex items-center justify-center h-8 w-8 rounded-l-sm border-r border-zinc-100 ${bg}`}
              >
                <div
                  className={`mx-auto w-5 h-5 bg-white shadow-inner rounded-sm border border-sky-900 hover:scale-105 transition-all cursor-pointer`}
                  onClick={() => {
                    dispatch(
                      setOption({
                        product_id: product.id,
                        option_position: i,
                        option_name: 'show',
                        option_value: !option.show,
                      })
                    );
                  }}
                >
                  {option.show && <Icons.Ok />}
                </div>
              </div>
              <div
                className={`w-32 h-8 flex-none flex items-center justify-center border-r border-zinc-100 ${bg}`}
              >
                {option.a}x{option.b}x{option.h}
              </div>
              <div
                className={`w-20 h-8 align-middle flex-none flex items-center justify-center border-r border-zinc-100 ${bg}`}
              >
                {option.connectionType}
              </div>
              {productList.cities.map((city, ii) => {
                return (
                  <div
                    key={`sdfjksd${i}`}
                    className={`h-8 px-1 w-32 flex-none flex items-center justify-between border-r border-zinc-100 ${bg}`}
                  >
                    <div className={`font-light flex items-center`}>
                      <span className={`font-semibold text-lg`}>

                      {
                        initProducts[product.id]?.options[i]?.prices.find((item) => item.city === city[1])
                        ?.value || ' - '
                      }{' '}
                      </span>
                      <p className={`ml-0.5 -mb-0.5 italic text-xs`}>

                      руб.
                      </p>
                    </div>

                    <input
                      type={'number'}
                      onChange={(e) =>
                        handlePrices({
                          product_id: product.id,
                          option_position: i,
                          option_city: city[1],
                          option_value: e.target.value,
                        })
                      }
                      // value={!statusSave && ''}
                      placeholder={product.options[i]?.prices.find((item) => item.city === city[1])?.value}
                      onFocus={() => {
                        setState((s) => ({ ...s, focus: { [i]: city[1] } }));
                      }}
                      className={`w-12 border ${
                        state.focus?.[i] === city[1] ? `border-opacity-95` : `border-opacity-50 `
                      } border-zinc-600 rounded-sm shadow-inner`}
                    />
                  </div>
                );
              })}

              {/* DELETE */}
              <div className={`${bg}`}>
                {!highlight && (
                  <Icons.Close
                    extraClasses={`bg-zinc-50 mx-auto h-6 w-6 shadow-md border border-red-900 text-zinc-800 rounded-md m-1 hover:scale-110 cursor-pointer transition-all duration-75`}
                    onClick={(e) => {
                      dispatch(preDeleteOption({ product_id: product.id, option_position: i }));
                    }}
                  />
                )}
              </div>
            </div>
          );
        })}
      {state.create ? (
        <>
          {/* SHOW */}
          <div className={`flex items-center justify-start h-10 border bg-white border-zinc-500 shadow-md px-0.5`}>
            <div
              className={`w-5 bg-white shadow-inner h-5 mx-1 rounded-sm border border-sky-900 hover:scale-105 transition-all cursor-pointer`}
              onClick={() => {
                setState((s) => ({ ...s, newOption: { ...s.newOption, show: !s.newOption?.show } }));
              }}
            >
              {state.newOption?.show && <Icons.Ok />}
            </div>

            <input
              type={'number'}
              className={`shadow-inner border border-zinc-500 rounded-sm w-20 h-6 font-extralight mx-1 placeholder:text-sm placeholder:ml-1` }
              onChange={(e) => {
                setState((s) => ({ ...s, newOption: { ...s.newOption, a: e.target.value } }));
              }}
              placeholder={' ширина*'}
            />
            <input
              type={'number'}
              className={`shadow-inner border border-zinc-500 rounded-sm w-20 h-6 font-extralight mx-1`}
              onChange={(e) => {
                setState((s) => ({ ...s, newOption: { ...s.newOption, b: e.target.value } }));
              }}
              placeholder={' длина*'}
            />
            <input
              type={'number'}
              className={`shadow-inner border border-zinc-500 rounded-sm w-20 h-6 font-extralight mx-1`}
              onChange={(e) => {
                setState((s) => ({ ...s, newOption: { ...s.newOption, h: e.target.value } }));
              }}
              placeholder={' высота*'}
            />
            <select
              className={`shadow-inner border border-zinc-500 rounded-sm w-32 h-6 font-extralight mx-1 cursor-pointer `}
              onChange={(e) => {
                setState((s) => ({ ...s, newOption: { ...s.newOption, connectionType: e.target.value } }));
              }}
            >
              <option defaultChecked>прямая</option>
              <option>шип-паз</option>
            </select>
            <input
              type={'number'}
              className={`shadow-inner border border-zinc-500 h-6 rounded-sm w-20 font-extralight mx-1`}
              onChange={(e) => {
                setState((s) => ({ ...s, newOption: { ...s.newOption, h: e.target.value } }));
              }}
              placeholder={'плотность'}
            />
            <div className={`flex mx-1`}>
              <Icons.Ok
                extraClasses={`bg-zinc-50 ml-auto h-6 w-6 shadow-md border border-belplit_2 text-zinc-800 rounded-md m-1 hover:scale-110 cursor-pointer transition-all duration-75`}
                onClick={(e) => {
                  if (state.newOption.a && state.newOption.b && state.newOption.h) {
                    dispatch(setCreated({ product_id: product.id, option_position: product.options.length }));
                    dispatch(
                      addOption({
                        product_id: product.id,
                        a: state.newOption.a,
                        b: state.newOption.b,
                        h: state.newOption.h,
                        show: state.newOption.show,
                        connectionType: state.newOption.connectionType,
                        density: state.newOption.density,
                      })
                    );
                    setState((s) => ({ ...s, create: false, newOption: {} }));
                  } else {
                    setState((s) => ({ ...s, tip: 'requared' }));
                    setTimeout(() => {
                      setState((s) => ({ ...s, tip: null }));
                    }, 1500);
                  }
                }}
              />
              <Icons.Close
                extraClasses={`bg-zinc-50 mr-auto h-6 w-6 shadow-md border border-red-900 text-zinc-800 rounded-md m-1 hover:scale-110 cursor-pointer transition-all duration-75`}
                onClick={() => {
                  setState({
                    create: !state.create,
                  });
                }}
              />
            </div>
            {state.tip === 'requared' && (
              <div
                className={`z-50 mx-1 rounded-sm bg-sky-800 bg-opacity-90 text-white text-xs font-light p-2 shadow-md`}
              >
                <strong>Заполните обязательные поля: ширина, длина и высота</strong>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className={`rounded-sm shadow-md border border-zinc-500`}>
          <div className={`flex justify-start items-center`}>
            <Icons.Plus
              extraClasses={`bg-zinc-50 m-2 h-6 w-6 shadow-md border border-belplit_2 text-zinc-800 rounded-md hover:scale-110 cursor-pointer transition-all duration-75`}
              onClick={() => {
                setState((s) => ({
                  ...s,
                  create: !state.create,
                }));
              }}
            />
            <div>добавить спецификацию</div>
          </div>
        </div>
      )}
    </Layout.Specs>
  );
}
