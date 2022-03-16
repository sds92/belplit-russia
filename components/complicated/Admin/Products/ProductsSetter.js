import React from 'react';
import Product from 'models/Product';
import { Icons } from '../..';

export default function ProductsSetter() {
  const cities = [
    ['Москва', 'square'],
    ['СПБ', 'spb'],
    ['Казань', 'kazan'],
    ['Краснодар', 'krasnodar'],
    ['Ростов', 'rostov'],
    ['Волгоград', 'volvograd'],
    ['Астрахань', 'astrahan'],
    ['Крым', 'сrimea'],
  ];

  const [data2, setData] = React.useState([]);
  const [newData, setNewData] = React.useState([]);

  const optionsMatrix = data2.map((item, i) => {
    return { sizes: item.sizes.map((item_i, ii) => ({ ...item_i, _id: ii })) };
  });
  const [options, setOptions] = React.useState(optionsMatrix);

  const [newProduct, setNewProduct] = React.useState({});
  // console.log('🚀 ~ file: ProductsSetter.js ~ line 26 ~ ProductsSetter ~ newProduct', newProduct);
  // console.log('🚀optionsMatrix', options);
  // const optionsMatrix2 = newData.map((item, i) => {
  //   return {[i]: {sizes: item.sizes}}
  // });
  // setOptions((s) => {
  //   return { ...s, [i]: { ...s[i], id: ii } };
  // });
  // console.log('🚀 s\n', optionsMatrix[0][0], '\n\n');

  const [create, setCreate] = React.useState({});
  const [newSize, setNewSize] = React.useState({});

  const [selectedCity, setSelectedCity] = React.useState(0);

  const getPrices = () => {
    fetch('api/prices')
      .then((res) => res.json())
      .then((res) => {
        setData(JSON.parse(JSON.stringify(res)));
        setNewData(JSON.parse(JSON.stringify(res)));
        setOptions(
          JSON.parse(
            JSON.stringify(
              res.map((item, i) => {
                return { sizes: item.sizes.map((item_i, ii) => ({ ...item_i, _id: ii })) };
              })
            )
          )
        );
      })
      .catch((err) => console.log(err));
  };

  const save = async (input) => {
    let _t = [];
    if (input) {
      _t = input;
    } else {
      _t = newData;
    }
    await fetch(`api/prices`, {
      method: 'POST',
      body: JSON.stringify(_t),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 'ok') {
          getPrices();
        }
      })
      .catch((err) => console.log(err));
  };

  const handleDataChange = (a, e) => {
    const _data = JSON.parse(JSON.stringify(newData));
    const _product = _data[a.productPos];

    if (a.type === 'price') {
      const _prices = _data[a.productPos].prices[cities[selectedCity][1]];
      if (a.value) {
        // set new value
        _prices.splice(a.size, 1, parseInt(a.value));
      } else {
        // else set old value
        _prices.splice(a.size, 1, data2[a.productPos].prices[cities[selectedCity][1]][a.size]);
      }
      _product.prices[cities[selectedCity][1]] = _prices;
    }

    if (a.type === 'showSize') {
      const _sizes = _data[a.productPos].sizes;
      const _size = {
        ..._data[a.productPos].sizes[a.size],
        show: e.target.checked,
      };
      _sizes.splice(a.size, 1, _size);
    }

    setNewData(_data);
  };

  const addNewSizes = (productPos, e) => {
    if (!newSize[productPos]?.a || !newSize[productPos]?.b || !newSize[productPos]?.h) {
      return;
    } else {
      setCreate({
        [productPos]: !create[productPos],
      });
      setNewSize({});
    }
    const _data = JSON.parse(JSON.stringify(newData));
    const _product = _data[productPos];
    _product.sizes.push({
      a: parseFloat(newSize[productPos].a),
      b: parseFloat(newSize[productPos].b),
      h: parseFloat(newSize[productPos].h),
      show: true,
    });
    _product.prices = Object.fromEntries(
      Object.entries(_product.prices).map((item) => {
        if (cities[selectedCity][1] === item[0]) {
          item[1].push(parseFloat(newSize[productPos]?.price || 0));
        } else {
          item[1].push(parseFloat(0));
        }
        return { ...item };
      })
    );
    _product.connectionTypes.push(newSize[productPos]?.connectionTypes || 'прямая');
    setNewData(_data);
    save(_data);
  };

  const deleteSize = (a, e) => {
    const _data = JSON.parse(JSON.stringify(newData));
    const _product = _data[a.productPos];
    _product.sizes.splice(a.size, 1);
    _product.connectionTypes.splice(a.size, 1);
    _product.prices = Object.fromEntries(
      Object.entries(_product.prices).map((item) => {
        item[1].splice(a.size, 1);
        return { ...item };
      })
    );
    let _optionsMatrix = JSON.parse(JSON.stringify(options));

    let idx = null;
    _optionsMatrix[a.productPos].sizes.find((item, i) => {
      if (item._id === a._id) {
        idx = i;
      }
    });

    _optionsMatrix[a.productPos].sizes.splice(idx, 1);
    setOptions(_optionsMatrix);
    setNewData(_data);
  };

  const createProduct = (a, e) => {
    const _data = JSON.parse(JSON.stringify(newData));
    const _newProduct = new Product(_data.length + 1, newProduct.created.name, newProduct.created.title);
    _data.push(_newProduct);
    setCreate({})
    setNewData(_data);
    save()
  };

  React.useEffect(() => {
    getPrices();
  }, []);
  React.useEffect(() => {
    if (newProduct.created) {
      createProduct()
    }
  }, [newProduct.created]);

  return (
    <div>
      <hr />
      <div className={`flex flex-wrap justify-center py-1 bg-zinc-100`}>
        {cities.map((item, i) => {
          return (
            <div
              key={`asdf${i}`}
              className={`${
                selectedCity === i ? `bg-belplit_2 shadow-md` : ``
              } mx-1 px-2 cursor-pointer rounded-md`}
              onClick={() => setSelectedCity(i)}
            >
              {item[0]}
            </div>
          );
        })}
      </div>
      <hr />
      <div className={`pl-2`}>
        {cities.map((item_iii, iii) => {
          return (
            <div key={`asjdifh${iii}`}>
              {cities[selectedCity][1] === item_iii[1] && (
                <table className={``}>
                  {/* TABLE HEADER */}
                  <thead className={`bg-zinc-100 rounded-md`}>
                    <tr>
                      <td className={`w-10 text-center`}>показывать</td>
                      <td className={`w-32 text-right`}>размер[мм]</td>
                      <td className={`w-20 text-right`}>тип кромки</td>
                      <td className={`w-16 text-center`}>текущая цена</td>
                      <td className={`w-16 text-center`}>новая цена</td>
                      <td>
                        <div
                          onClick={() => save()}
                          className={`bg-belplit_2 self-center m-1 px-2 py-1 rounded-md shadow-md hover:bg-belplit_dark hover:text-zinc-100 cursor-pointer `}
                        >
                          Обновить
                        </div>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={6} className={` rounded-sm border-t shadow-md`}>
                        {!create[data2.length + 1] ? (
                          <div className={`flex justify-start items-center`}>
                            <Icons.Plus
                              extraClasses={`bg-zinc-50 mr-2 my-2 h-6 w-6 shadow-md border border-belplit_2 text-zinc-800 rounded-md m-1 hover:scale-110 cursor-pointer transition-all duration-75`}
                              onClick={() => {
                                setCreate({
                                  [data2.length + 1]: !create[data2.length + 1],
                                });
                              }}
                            />
                            <div>Добавить товар</div>
                          </div>
                        ) : (
                          <div className={`flex justify-start items-center`}>
                            <input
                              onChange={(e) => {
                                setNewProduct((s) => ({
                                  ...s,
                                  input: {
                                    ...s.input,
                                    title: e.target.value,
                                  },
                                }));
                              }}
                              value={newProduct?.input?.title}
                              className={`border rounded-md m-1`}
                              placeholder='Название'
                            />
                            <input
                              onChange={(e) => {
                                setNewProduct((s) => ({
                                  ...s,
                                  input: {
                                    ...s.input,
                                    name: /^[a-z]{1,20}$/.test(e.target.value) ? e.target.value : '',
                                  },
                                }));
                              }}
                              value={newProduct?.input?.name}
                              className={`border rounded-md m-1`}
                              placeholder='url'
                            />
                            <Icons.Plus
                              extraClasses={`bg-zinc-50 mr-2 my-2 h-6 w-6 shadow-md border border-belplit_2 text-zinc-800 rounded-md m-1 hover:scale-110 cursor-pointer transition-all duration-75`}
                              onClick={() => {
                                setNewProduct({
                                  created: newProduct.input,
                                });
                              }}
                            />
                          </div>
                        )}
                      </td>
                    </tr>
                    {data2.map((item, i) => {
                      return (
                        <React.Fragment key={`lfjkh${i}`}>
                          <tr className={``}>
                            <td colSpan={6} className={`rounded-sm bg-zinc-400 text-zinc-900 font-semibold`}>
                              <p className={`ml-10 text-xl`}>{item.title}</p>
                            </td>
                          </tr>
                          {/* SIZES */}
                          {optionsMatrix[i].sizes.map((item_i, ii) => {
                            const highlight =
                              options[i]?.sizes.map(({ _id }) => _id)?.indexOf(item_i._id) === -1;
                            const bg = highlight ? 'bg-red-200' : 'bg-zinc-200';
                            return (
                              <tr key={`sdjkfhs${ii}`} className={`font-light`}>
                                <td className={`text-center rounded-l-sm ${bg}`}>
                                  <input
                                    type={'checkbox'}
                                    checked={newData[i]?.sizes[ii]?.show || data2[i]?.sizes[ii]?.show}
                                    onChange={(e) =>
                                      handleDataChange(
                                        { type: 'showSize', productPos: i, size: ii, value: e.target.value },
                                        e
                                      )
                                    }
                                  />
                                </td>
                                <td className={`text-right rounded-l-sm ${bg}`}>
                                  {item_i.a}x{item_i.b}x{item_i.h}
                                </td>
                                <td className={`text-center mx-2 ${bg}`}>{item.connectionTypes[ii]}</td>
                                <td className={`text-center mx-2 font-bold ${bg}`}>
                                  {item.prices[cities[selectedCity][1]]?.[ii]
                                    ? item.prices[cities[selectedCity][1]][ii]
                                    : ' - '}
                                </td>
                                <td className={`${bg}`}>
                                  <input
                                    type={'number'}
                                    className={`border rounded-md w-16`}
                                    onChange={(e) =>
                                      handleDataChange(
                                        { type: 'price', productPos: i, size: ii, value: e.target.value },
                                        e
                                      )
                                    }
                                    placeholder={
                                      item.prices[cities[selectedCity][1]]?.[ii]
                                        ? item.prices[cities[selectedCity][1]][ii]
                                        : ' - '
                                    }
                                  />
                                </td>
                                {/* DELETE */}
                                <td className={`rounded-r-sm ${bg}`}>
                                  {!highlight && (
                                    <Icons.Close
                                      extraClasses={`bg-zinc-50 mx-auto h-6 w-6 shadow-md border border-red-900 text-zinc-800 rounded-md m-1 hover:scale-110 cursor-pointer transition-all duration-75`}
                                      onClick={(e) => {
                                        deleteSize({ productPos: i, size: ii, _id: item_i._id }, e);
                                      }}
                                    />
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                          <tr className={``}>
                            {create[i] ? (
                              <>
                                {/* SHOW */}
                                <td className={`py-2 w-10 text-center rounded-l-sm bg-zinc-50 `}>
                                  <input
                                    className={``}
                                    type={'checkbox'}
                                    onChange={(e) => {
                                      setNewSize((s) => {
                                        return { ...s, [i]: { ...s[i], show: e.target.checked } };
                                      });
                                    }}
                                  />
                                </td>

                                <td colSpan={4} className={`text-right rounded-l-sm bg-zinc-50`}>
                                  <div className={`flex justify-start mt-1`}>
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
                                  </div>
                                  <div className={`flex justify-start`}>
                                    <select
                                      className={`border rounded-md w-32 font-extralight mx-1 cursor-pointer my-1`}
                                      onChange={(e) => {
                                        setNewSize((s) => {
                                          return { ...s, [i]: { ...s[i], connectionTypes: e.target.value } };
                                        });
                                      }}
                                    >
                                      <option>прямая</option>
                                      <option>шип-паз</option>
                                    </select>
                                    <input
                                      type={'number'}
                                      className={`border rounded-md w-16 font-extralight mx-1 my-1`}
                                      onChange={(e) => {
                                        setNewSize((s) => {
                                          return { ...s, [i]: { ...s[i], price: e.target.value } };
                                        });
                                      }}
                                      placeholder={'цена'}
                                    />
                                  </div>
                                </td>
                                <td>
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
                                </td>
                              </>
                            ) : (
                              <td colSpan={6} className={` rounded-sm border-t shadow-md`}>
                                <Icons.Plus
                                  extraClasses={`bg-zinc-50 ml-auto mr-2 my-2 h-6 w-6 shadow-md border border-belplit_2 text-zinc-800 rounded-md m-1 hover:scale-110 cursor-pointer transition-all duration-75`}
                                  onClick={() => {
                                    setCreate({
                                      [i]: !create[i],
                                    });
                                  }}
                                />
                              </td>
                            )}
                          </tr>
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
