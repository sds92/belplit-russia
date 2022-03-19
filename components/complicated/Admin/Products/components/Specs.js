import React from 'react';
import { Layout } from './';
import { Icons } from '../../..';

export default function Specs(props) {
  const { product, productList } = props;
  const [state, setState] = React.useState({
    create: false,
    options: {},
  });
//   console.log("🚀 ~ file: Specs.js ~ line 11 ~ Specs ~ state", state)
//   console.log('🚀 ~ file: Specs.js ~ line 5 ~ Specs ~ products', product);
  return (
    <Layout.Specs productList={productList}>
      {product &&
        product.options.map((option, i) => {
          const highlight = false;
          //   options[i]?.sizes.map(({ _id }) => _id)?.indexOf(item_i._id) === -1;
          const bg = highlight ? 'bg-red-200' : 'bg-zinc-200';
          return (
            <tr key={`sdjkfhs${i}`} className={`border-x border-zinc-400 font-light`}>
              <td className={`text-center rounded-l-sm border-r border-zinc-100 ${bg}`}>
                <div
                  className={`mx-auto w-5 h-5 rounded-sm border border-sky-900 hover:scale-105 transition-all cursor-pointer`}
                  onClick={() => {
                    setState((s) => ({
                      ...s,
                      options: {
                        ...s.options,
                        [i]: {
                          ...s.options[i],
                          show: !s.options[i]?.show || !option.show,
                        },
                      },
                    }));
                  }}
                >
                  {option.show && <Icons.Ok />}
                </div>
              </td>
              <td className={`text-center border-r border-zinc-100 ${bg}`}>
                {option.a}x{option.b}x{option.h}
              </td>
              <td className={`text-center border-r border-zinc-100 ${bg}`}>{option.connectionType}</td>
              {productList.cities.map((city, i) => {
                return (
                  <td key={`sdfjksd${i}`} className={`text-center border-r border-zinc-100 ${bg}`}>
                    <div className={`flex justify-between item-center mx-2`}>
                      <div>{option.prices.find((item) => item.city === city[1])?.value}</div>
                      <div className={`mx-0.5`}>руб.</div>
                      <input className={`w-10 border rounded-md`}></input>
                    </div>
                  </td>
                );
              })}
              <td className={`${bg}`}>
                <input
                  type={'number'}
                  className={`border rounded-md w-16`}
                  onChange={(e) =>
                    handleDataChange({ type: 'price', productPos: i, size: ii, value: e.target.value }, e)
                  }
                />
              </td>
              {/* DELETE */}
              <td className={`${bg}`}>
                {!highlight && (
                  <Icons.Close
                    extraClasses={`bg-zinc-50 mx-auto h-6 w-6 shadow-md border border-red-900 text-zinc-800 rounded-md m-1 hover:scale-110 cursor-pointer transition-all duration-75`}
                    onClick={(e) => {
                      deleteSize({ productPos: i, size: ii, _id: item_i._id }, e);
                    }}
                  />
                )}
              </td>
              <td className={`rounded-r-sm ${bg}`}></td>
            </tr>
          );
        })}
      <tr className={``}>
        {state.create ? (
          <>
            {/* SHOW */}

            <td
              colSpan={7}
              className={`text-right rounded-l-sm bg-zinc-50 border-x border-b border-zinc-400`}
            >
              <div className={`flex justify-start my-1 items-center `}>
                <input
                  style={{ width: 100 }}
                  className={``}
                  type={'checkbox'}
                  onChange={(e) => {
                    setNewSize((s) => {
                      return { ...s, [i]: { ...s[i], show: e.target.checked } };
                    });
                  }}
                />
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
                    onClick={(e) => addNewSizes(i, e)}
                  />
                  <Icons.Close
                    extraClasses={`bg-zinc-50 mr-auto h-6 w-6 shadow-md border border-red-900 text-zinc-800 rounded-md m-1 hover:scale-110 cursor-pointer transition-all duration-75`}
                    onClick={() => {
                      setCreate({
                        [i]: !create[i],
                      });
                      setNewSize({});
                    }}
                  />
                </div>
              </div>
            </td>
          </>
        ) : (
          <td colSpan={7} className={`rounded-sm shadow-md border-x border-b border-zinc-400`}>
            <div className={`flex justify-start items-center`}>
              <Icons.Plus
                extraClasses={`bg-zinc-50 m-2 h-6 w-6 shadow-md border border-belplit_2 text-zinc-800 rounded-md hover:scale-110 cursor-pointer transition-all duration-75`}
                onClick={() => {
                  setCreate({
                    [i]: !create[i],
                  });
                }}
              />
              <div>добавить спецификацию</div>
            </div>
          </td>
        )}
      </tr>
      <tr>
        <td></td>
      </tr>
    </Layout.Specs>
  );
}
