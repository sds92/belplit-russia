import React from 'react';
import { Layout } from './';
import { Icons } from '../../..';

import { useSelector, useDispatch } from 'react-redux';
import { update, selectProducts, setOption, setPrices, deleteOption, addOption } from 'redux/slices/productsSlice';

export default function Specs(props) {
  const dispatch = useDispatch();
  const { product, productList } = props;
  const [state, setState] = React.useState({
    create: false,
    options: {},
    focus: {},
    newOption: {}
  });
  console.log('🚀 state', state);
  console.log('🚀', product);
  return (
    <Layout.Specs productList={productList}>
      {product &&
        product.options.map((option, i) => {
          const highlight = false;
          //   options[i]?.sizes.map(({ _id }) => _id)?.indexOf(item_i._id) === -1;
          const bg = highlight ? 'bg-red-200' : 'bg-zinc-200';
          return (
            <div
              key={`sdjkfhs${i}`}
              className={`w-full border-x border-zinc-400 font-light flex items-center justify-start `}
            >
              <div
                className={`flex-none flex items-center justify-center h-8 w-8 rounded-l-sm border-r border-zinc-100 ${bg}`}
              >
                <div
                  className={`mx-auto w-5 h-5 rounded-sm border border-sky-900 hover:scale-105 transition-all cursor-pointer`}
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
                    className={`h-8 px-2 w-32 flex-none flex items-center justify-between border-r border-zinc-100 ${bg}`}
                  >
                    {/* <div className={`flex justify-between item-center mx-2`}> */}
                    <div>{option.prices.find((item) => item.city === city[1])?.value} руб.</div>

                    <input
                      type={'number'}
                      onChange={(e) =>
                        dispatch(
                          setPrices({
                            product_id: product.id,
                            option_position: i,
                            option_city: city[1],
                            option_value: e.target.value,
                          })
                        )
                      }
                      onFocus={() => {
                        setState((s) => ({ ...s, focus: { [i]: city[1] } }));
                      }}
                      className={`w-10 border ${
                        state.focus?.[i] === city[1] ? `border-opacity-95` : ``
                      } border-sky-900 border-opacity-50 rounded-md`}
                    />
                    {/* </div> */}
                  </div>
                );
              })}

              {/* DELETE */}
              <div className={`${bg}`}>
                {!highlight && (
                  <Icons.Close
                    extraClasses={`bg-zinc-50 mx-auto h-6 w-6 shadow-md border border-red-900 text-zinc-800 rounded-md m-1 hover:scale-110 cursor-pointer transition-all duration-75`}
                    onClick={(e) => {
                      dispatch(deleteOption({}));
                    }}
                  />
                )}
              </div>
            </div>
          );
        })}
      <div className={``}>
        {state.create ? (
          <>
            {/* SHOW */}
            <div
              className={`flex-none flex items-center justify-center h-8 w-8 rounded-l-sm border-r border-zinc-100 `}
            >
              <div
                className={`mx-auto w-5 h-5 rounded-sm border border-sky-900 hover:scale-105 transition-all cursor-pointer`}
                onClick={() => {
                  setState(s=>({...s, newOption: {...s.newOption, show: !s.newOption.show}}))
                }}
              >
                {state.newOption?.show && <Icons.Ok />}
              </div>
            </div>
            <div
              colSpan={7}
              className={`text-right rounded-l-sm bg-zinc-50 border-x border-b border-zinc-400`}
            >
              <div className={`flex justify-start my-1 items-center `}>
                <input
                  type={'number'}
                  className={`border rounded-md w-16 font-extralight mx-1`}
                  onChange={(e) => {
                    setNewSize((s) => {
                      return { ...s, [i]: { ...s[i], a: e.target.value } };
                    });
                  }}
                  placeholder={'ширина*'}
                />
                <input
                  type={'number'}
                  className={`border rounded-md w-16 font-extralight mx-1`}
                  onChange={(e) => {
                    setNewSize((s) => {
                      return { ...s, [i]: { ...s[i], b: e.target.value } };
                    });
                  }}
                  placeholder={'длина*'}
                />
                <input
                  type={'number'}
                  className={`border rounded-md w-16 font-extralight mx-1`}
                  onChange={(e) => {
                    setNewSize((s) => {
                      return { ...s, [i]: { ...s[i], h: e.target.value } };
                    });
                  }}
                  placeholder={'высота*'}
                />
                <select
                  className={`border rounded-md w-32 font-extralight mx-1 cursor-pointer `}
                  onChange={(e) => {
                    setNewSize((s) => {
                      return {
                        ...s,
                        [i]: { ...s[i], connectionTypes: e.target.value },
                      };
                    });
                  }}
                >
                  <option>прямая</option>
                  <option>шип-паз</option>
                </select>
                <input
                  type={'number'}
                  className={`border rounded-md w-16 font-extralight mx-1 `}
                  onChange={(e) => {
                    setNewSize((s) => {
                      return { ...s, [i]: { ...s[i], price: e.target.value } };
                    });
                  }}
                  placeholder={'цена'}
                />
                <div className={`flex`}>
                  <Icons.Ok
                    extraClasses={`bg-zinc-50 ml-auto h-6 w-6 shadow-md border border-belplit_2 text-zinc-800 rounded-md m-1 hover:scale-110 cursor-pointer transition-all duration-75`}
                    onClick={(e) => dispatch(addOption(i, e))}
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
              </div>
            </div>
          </>
        ) : (
          <div className={`rounded-sm shadow-md border-x border-b border-zinc-400`}>
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
      </div>
    </Layout.Specs>
  );
}
