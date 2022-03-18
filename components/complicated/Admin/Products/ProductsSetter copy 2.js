import React from 'react';
import ProductList from 'models/ProductList';
import { Icons } from '../..';
import { validateName } from 'utils/validations';

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
  const descs = [
    ['Описание товара', 'description'],
    ['Состав', 'consists'],
    ['Опции', 'options'],
    ['Преимущества', 'advantages'],
    ['Функции', 'functions'],
    ['Установка', 'installation'],
    ['Технические характеристики', 'tech'],
  ];

  const [data2, setData] = React.useState([]);
  const [newData, setNewData] = React.useState([]);

  const optionsMatrix = data2.map((item, i) => {
    return { sizes: item.sizes.map((item_i, ii) => ({ ...item_i, _id: ii })) };
  });
  const [options, setOptions] = React.useState(optionsMatrix);

  const [newProduct, setNewProduct] = React.useState({});

  const [create, setCreate] = React.useState({});
  const [settings, setSettings] = React.useState({});
  const [showSpecs, setShowSpecs] = React.useState({});
  const [newSize, setNewSize] = React.useState({});
  const [otherSpecs, setOtherSpecs] = React.useState({});

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
  const [pages, setPages] = React.useState([]);
  const [newPages, setNewPages] = React.useState([]);

  const getPages = () => {
    fetch('api/pages')
      .then((res) => res.json())
      .then((res) => {
        setPages(JSON.parse(JSON.stringify(res)));
        setNewPages(JSON.parse(JSON.stringify(res)));
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
  const savePages = async (input) => {
    let _t = [];
    if (input) {
      _t = input;
    } else {
      _t = newPages;
    }
    await fetch(`api/pages`, {
      method: 'POST',
      body: JSON.stringify(_t),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 'ok') {
          getPages();
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
    const _pages = JSON.parse(JSON.stringify(newPages));
    const _newID = _data.length;
    const _newProduct = {
      id: _newID,
      title: newProduct.created.title,
      name: validateName(newProduct.created.name),
      density: '130 кг/м³',
      coef: 0.72,
      prices: {
        square: [],
        spb: [],
        kazan: [],
        krasnodar: [],
        rostov: [],
        volvograd: [],
        astrahan: [],
        сrimea: [],
      },
      sizes: [],
      connectionTypes: [],
      desc: {
        consists: [],
        options: [],
        advantages: [],
        functions: [],
        tech: [],
      },
      files: {
        avatarSM: `${validateName(newProduct.created.name)}.jpg`,
        product: `${validateName(newProduct.created.name)}.jpg`,
      },
    };

    const _newPage = {
      id: _pages[_pages.length - 1].id + 1,
      path: `/catalog/${newProduct.created.name}`,
      title: newProduct.created.title,
      content: {
        product_id: _newID,
      },
      head: {
        title: '',
        meta: [
          {
            name: 'keywords',
            content: '',
          },
          {
            name: 'description',
            content: '',
          },
        ],
      },
    };
    _data.push(_newProduct);
    _pages.push(_newPage);
    setCreate({});
    setNewData(JSON.parse(JSON.stringify(_data)));
    save(JSON.parse(JSON.stringify(_data)));
    setNewPages(_pages);
    savePages(_pages);
  };

  const handleSettingsChange = (a, e) => {
    const _data = JSON.parse(JSON.stringify(newData));
    const _product = _data[a.product];
    _product.desc[a.descName].splice(
      a.descItemPosition,
      1,
      settings[a.product].content[a.descNamePosition][a.descItemPosition]
    );
    setSettings((s) => ({
      ...s,
      [a.product]: {
        ...s[a.product],
        content: {
          [a.descNamePosition]: { [a.descItemPosition]: '' },
        },
      },
    }));
    setNewData(_data);
    save(_data);
  };
  const deskItemDelete = (a, e) => {
    const _data = JSON.parse(JSON.stringify(newData));
    const _product = _data[a.product];
    _product.desc[a.descName].splice(a.descItemPosition, 1);
    setNewData(_data);
    save(_data);
  };
  const deskItemAdd = (a, e) => {
    const _data = JSON.parse(JSON.stringify(newData));
    const _product = _data[a.product];
    _product.desc[a.descName].push(settings[a.product].content[a.descNamePosition][a.descItemPosition]);
    setSettings((s) => ({
      ...s,
      [a.product]: {
        ...s[a.product],
        content: {
          [a.descNamePosition]: { [a.descItemPosition]: '' },
        },
      },
    }));
    setNewData(_data);
    save(_data);
  };
  const deleteProduct = (a) => {
    const _data = JSON.parse(JSON.stringify(newData));
    const _pages = JSON.parse(JSON.stringify(newPages));
    const pagePosition = null;
    const productsPosition = null;
    _data.find((item, i) => {
      if (item.id === a) {
        productsPosition = i;
      }
    });
    _pages.find((item, i) => {
      if (item.content.product_id === a) {
        pagePosition = i;
      }
    });
    _data.splice(productsPosition, 1);
    _pages.splice(pagePosition, 1);
    setSettings({});
    setNewData(_data);
    save(_data);
    setNewPages(_pages);
    savePages(_pages);
  };

  const handleMetaChange = (a) => {
    const _pages = JSON.parse(JSON.stringify(newPages));
    const pagePosition = null;
    _pages.find((item, i) => {
      if (item.content.product_id === a.productId) {
        pagePosition = i;
      }
    });
    const _page = _pages[pagePosition];
    switch (a.metaName) {
      case 'title': {
        _page.head.title = settings[a.productId].content.meta.title || _page.head.title;
        break;
      }
      case 'keywords': {
        _page.head.meta.find((item) => item.name === 'keywords').content =
          settings[a.productId].content.meta[a.metaName] ||
          _page.head.meta.find((item) => item.name === 'keywords').content;
        break;
      }
      case 'description': {
        _page.head.meta.find((item) => item.name === 'description').content =
          settings[a.productId].content.meta[a.metaName] ||
          _page.head.meta.find((item) => item.name === 'description').content;
        break;
      }
      default:
        break;
    }
    setNewPages(_pages);
    savePages(_pages);
  };

  const handleOtherSpecs = (a, e) => {
    const _data = JSON.parse(JSON.stringify(newData));
    const productsPosition = null;
    _data.find((item, i) => {
      if (item.id === a) {
        productsPosition = i;
      }
    });
    const _product = _data[productsPosition];
    if (otherSpecs[a]) {
      Object.entries(otherSpecs[a]).forEach((item) => {
        _product[item[0]] = item[1];
      });
    }
    setNewData(_data);
    save(_data);
  };

  React.useEffect(() => {
    getPrices();
    getPages();
  }, []);

  React.useEffect(() => {
    if (newProduct.created) {
      createProduct();
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
                <table width={'90%'} className={`mx-auto`}>
                  {/* TABLE HEADER */}
                  <thead className={`bg-zinc-100 rounded-md`}>
                    <tr>
                      <td width={100} className={`text-center`}>
                        показывать
                      </td>
                      <td width={100} className={`text-center`}>
                        размер[мм]
                      </td>
                      <td width={100} className={`text-center`}>
                        тип кромки
                      </td>
                      <td width={100} className={`text-center`}>
                        текущая цена
                      </td>
                      <td width={100} className={`text-center`}>
                        новая цена
                      </td>
                      <td width={100} className={``}>
                        <div
                          onClick={() => save()}
                          className={`bg-belplit_2 self-center text-center whitespace-nowrap m-1 px-2 py-1 rounded-md shadow-md hover:bg-belplit_dark hover:text-zinc-100 cursor-pointer `}
                        >
                          Обновить цены
                        </div>
                      </td>
                      <td className={``}></td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={7} className={` rounded-sm border-t shadow-md`}>
                        {!create[data2.length + 1] ? (
                          <div className={`flex justify-start items-center`}>
                            <Icons.Plus
                              extraClasses={`bg-zinc-50 mx-2 my-2 h-6 w-6 shadow-md border border-belplit_2 text-zinc-800 rounded-md m-1 hover:scale-110 cursor-pointer transition-all duration-75`}
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
                              className={`border rounded-md ml-2 mr-1`}
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
                              extraClasses={`bg-zinc-50 my-2 h-6 w-6 shadow-md border border-belplit_2 text-zinc-800 rounded-md m-1 hover:scale-110 cursor-pointer transition-all duration-75`}
                              onClick={() => {
                                setNewProduct({
                                  created: newProduct.input,
                                });
                              }}
                            />
                            <Icons.Close
                              extraClasses={`bg-zinc-50 my-2 h-6 w-6 shadow-md border border-red-900 text-zinc-800 rounded-md m-1 hover:scale-110 cursor-pointer transition-all duration-75`}
                              onClick={() => {
                                setCreate({});
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
                            <td
                              colSpan={7}
                              className={`bg-zinc-400 border border-zinc-400 text-zinc-900 font-semibold`}
                            >
                              <div className={`flex justify-start items-center`}>
                                <Icons.Settings
                                  extraClasses={`${
                                    settings[i]?.open
                                      ? `bg-blue-900 bg-opacity-50 border text-white`
                                      : `bg-zinc-50`
                                  }  mx-2 my-2 h-6 w-6 shadow-md text-zinc-800 rounded-md hover:scale-110 cursor-pointer transition-all duration-300`}
                                  onClick={() => {
                                    setShowSpecs({})
                                    setSettings({
                                      [i]: { open: !settings[i]?.open },
                                    });
                                  }}
                                />
                                <Icons.ChevronDown
                                  extraClasses={`${
                                    showSpecs[i]
                                      ? `bg-blue-900 bg-opacity-50 border text-white rotate-0`
                                      : `bg-zinc-50 -rotate-90`
                                  }  mr-2 ml-1 my-2 h-6 w-6 shadow-md text-zinc-800 rounded-md hover:scale-110 cursor-pointer transition-all duration-300`}
                                  onClick={() => {
                                    setSettings({})
                                    setShowSpecs(s => ({
                                      ...s,
                                      [i]: !showSpecs[i],
                                    }));
                                  }}
                                />
                                <p className={`ml-1 text-xl`}>{item.title}</p>
                              </div>
                            </td>
                          </tr>
                          {/* SETTINGS */}
                          {settings[i]?.open ? (
                            <tr>
                              <td colSpan={7}>
                                <div className={`flex flex-col`}>
                                  <div className={`flex items-center justify-start bg-zinc-200 rounded-sm`}>
                                    <div className={`ml-2 font-light text-sm`}>удалить товар</div>
                                    <Icons.Close
                                      extraClasses={`bg-zinc-50 h-6 w-6 m-1 shadow-md border border-red-900 text-zinc-800 rounded-md hover:scale-110 cursor-pointer transition-all duration-75`}
                                      onClick={() => {
                                        deleteProduct(item.id);
                                      }}
                                    />
                                  </div>
                                  <div className={`border p-4 bg-zinc-100`}>
                                    {/* META */}
                                    <div className={`uppercase py-2 font-bold`}>Метатеги</div>
                                    {['TITLE', 'KEYWORDS', 'DESCRIPTION'].map((metaItem, mii) => {
                                      return (
                                        <React.Fragment key={`dfjg${mii}`}>
                                          <div className={`ml-2 flex`}>{metaItem}</div>
                                          <div
                                            className={`relative h-10 ml-2 flex flex-col border rounded-sm p-2 bg-white cursor-default ${
                                              settings[i]?.hover?.meta === metaItem.toLowerCase()
                                                ? `bg-blue-100`
                                                : ``
                                            }`}
                                            onMouseEnter={() => {
                                              setSettings((s) => ({
                                                ...s,
                                                [i]: { ...s[i], hover: { meta: metaItem.toLowerCase() } },
                                              }));
                                            }}
                                            onMouseLeave={() => {
                                              setSettings((s) => ({
                                                ...s,
                                                [i]: { ...s[i], hover: {} },
                                              }));
                                            }}
                                          >
                                            {settings[i].edit?.meta === metaItem.toLowerCase() ? (
                                              <React.Fragment>
                                                <div className={`absolute w-full h-6 z-50 flex gap-2`}>
                                                  <input
                                                    className={`border rounded-sm `}
                                                    style={{ width: '70%' }}
                                                    value={
                                                      settings[i]?.content?.meta?.[metaItem.toLowerCase()]
                                                    }
                                                    onChange={(e) => {
                                                      setSettings((s) => ({
                                                        ...s,
                                                        [i]: {
                                                          ...s[i],
                                                          content: {
                                                            meta: {
                                                              [metaItem.toLowerCase()]: e.target.value,
                                                            },
                                                          },
                                                        },
                                                      }));
                                                    }}
                                                  />
                                                  <Icons.Ok
                                                    extraClasses={`bg-zinc-50 h-6 w-6 shadow-md border border-green-900 text-zinc-800 rounded-md hover:scale-110 cursor-pointer transition-all duration-75`}
                                                    onClick={() => {
                                                      handleMetaChange({
                                                        productId: item.id,
                                                        metaName: metaItem.toLowerCase(),
                                                      });
                                                      setSettings((s) => ({
                                                        ...s,
                                                        [i]: {
                                                          ...s[i],
                                                          edit: {},
                                                          hover: {},
                                                        },
                                                      }));
                                                    }}
                                                  />
                                                </div>
                                                <div
                                                  className={`fixed top-0 left-0 w-full h-screen z-40`}
                                                ></div>
                                              </React.Fragment>
                                            ) : metaItem.toLowerCase() === 'title' ? (
                                              pages.find((item) => item.content.product_id === i)?.head.title
                                            ) : (
                                              pages
                                                .find((item) => item.content.product_id === i)
                                                ?.head.meta.find(
                                                  (_metaItem) => _metaItem.name === metaItem.toLowerCase()
                                                )?.content
                                            )}

                                            {settings[i].hover?.meta === metaItem.toLowerCase() && (
                                              <div
                                                className={`absolute flex justify-start items-center gap-2 inset-0`}
                                              >
                                                <Icons.Edit
                                                  extraClasses={`ml-2 bg-green-900 bg-opacity-80 h-6 w-6 -m-0.5 shadow-md  border-green-900 text-zinc-100 rounded-md hover:scale-110 cursor-pointer transition-all duration-75`}
                                                  onClick={() => {
                                                    setSettings((s) => ({
                                                      ...s,
                                                      [i]: {
                                                        ...s[i],
                                                        edit: { meta: metaItem.toLowerCase() },
                                                        hover: {},
                                                        content: {
                                                          meta: {
                                                            [metaItem.toLowerCase()]:
                                                              metaItem.toLowerCase() === 'title'
                                                                ? pages.find(
                                                                    (item) => item.content.product_id === i
                                                                  )?.head.title
                                                                : pages
                                                                    .find(
                                                                      (item) => item.content.product_id === i
                                                                    )
                                                                    .head.meta.find(
                                                                      (_metaItem) =>
                                                                        _metaItem.name ===
                                                                        metaItem.toLowerCase()
                                                                    ).content || '',
                                                          },
                                                        },
                                                      },
                                                    }));
                                                  }}
                                                />
                                              </div>
                                            )}
                                          </div>
                                        </React.Fragment>
                                      );
                                    })}
                                    <div className={`uppercase py-2 font-bold`}>Характеристики товара</div>
                                    {(item.density || item.position) && (
                                      <div>
                                        <div className={`ml-2`}>
                                          Отдельные характеристики товара для сайтов Белтермо:
                                        </div>
                                        <div className={`ml-2 flex flex-col border rounded-sm p-2 bg-white`}>
                                          <div className={`flex gap-2`}>
                                            <div>Плотность:</div>
                                            <div>{item.density}</div>
                                            <input
                                              type={'number'}
                                              value={
                                                parseInt(
                                                  otherSpecs[item.id]?.density?.replace(' кг/м³', '')
                                                ) || item.density.replace(' кг/м³', '')
                                              }
                                              className={`border rounded-md`}
                                              onChange={(e) => {
                                                setOtherSpecs((s) => ({
                                                  [item.id]: {
                                                    ...s[item.id],
                                                    density: e.target.value + ' кг/м³',
                                                  },
                                                }));
                                              }}
                                            />
                                          </div>
                                          <div className={`flex gap-2`}>
                                            <div>Позиция в каталоге:</div>
                                            <div>{item.position}</div>
                                            <input
                                              type={'number'}
                                              value={otherSpecs[item.id]?.position || item.position}
                                              className={`border rounded-md`}
                                              onChange={(e) => {
                                                setOtherSpecs((s) => ({
                                                  [item.id]: {
                                                    ...s[item.id],
                                                    position: e.target.value,
                                                  },
                                                }));
                                              }}
                                            />
                                          </div>
                                          <div
                                            className={`bg-belplit_2 px-2 py-1 mr-auto shadow-md text-zinc-100 rounded-md hover:bg-belplit_dark cursor-pointer transition-all duration-75`}
                                            onClick={(e) => {
                                              console.log(otherSpecs);
                                              handleOtherSpecs(item.id, e);
                                            }}
                                          >
                                            Сохранить
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                    {Object.entries(item.desc).map((descItem, dii) => {
                                      if (descItem[0] !== 'tech') {
                                        return (
                                          //! DESC ITEM
                                          <React.Fragment key={`dfskgh${dii}`}>
                                            <div className={`ml-2 flex`}>
                                              {descs.find((item) => item[1] === descItem[0])[0]}:
                                            </div>
                                            <div
                                              className={`ml-2 flex flex-col border rounded-sm p-2 bg-white`}
                                            >
                                              {descItem[1].map((descItem_i, dii_i) => {
                                                return (
                                                  //! DESC ITEM -> ITEM
                                                  <div
                                                    key={`sdkjfh${dii_i}`}
                                                    onMouseEnter={() => {
                                                      setSettings((s) => ({
                                                        ...s,
                                                        [i]: { ...s[i], hover: { [dii]: dii_i } },
                                                      }));
                                                    }}
                                                    // onMouseLeave={() => {}}
                                                    className={`font-light text-sm cursor-default relative h-6 ${
                                                      settings[i]?.hover?.[dii] === dii_i ? `bg-blue-100` : ``
                                                    }`}
                                                  >
                                                    {settings[i].edit?.[dii] === dii_i ? (
                                                      <React.Fragment>
                                                        <div
                                                          className={`absolute w-full h-6 z-50 flex gap-2`}
                                                        >
                                                          <input
                                                            className={`w-full border rounded-sm `}
                                                            value={settings[i]?.content?.[dii]?.[dii_i]}
                                                            onChange={(e) => {
                                                              setSettings((s) => ({
                                                                ...s,
                                                                [i]: {
                                                                  ...s[i],
                                                                  content: {
                                                                    [dii]: { [dii_i]: e.target.value },
                                                                  },
                                                                },
                                                              }));
                                                            }}
                                                          />
                                                          <Icons.Ok
                                                            extraClasses={`bg-zinc-50 h-6 w-6 shadow-md border border-green-900 text-zinc-800 rounded-md hover:scale-110 cursor-pointer transition-all duration-75`}
                                                            onClick={() => {
                                                              handleSettingsChange({
                                                                product: i,
                                                                descName: descItem[0],
                                                                descNamePosition: dii,
                                                                descItemPosition: dii_i,
                                                              });
                                                              setSettings((s) => ({
                                                                ...s,
                                                                [i]: {
                                                                  ...s[i],
                                                                  edit: {},
                                                                  hover: {},
                                                                },
                                                              }));
                                                            }}
                                                          />
                                                        </div>
                                                        <div
                                                          className={`fixed top-0 left-0 w-full h-screen z-40`}
                                                        ></div>
                                                      </React.Fragment>
                                                    ) : (
                                                      dii_i + 1 + '. ' + descItem_i
                                                    )}
                                                    {settings[i].hover?.[dii] === dii_i && (
                                                      <div
                                                        className={`absolute flex justify-start gap-2 inset-0`}
                                                      >
                                                        <Icons.Edit
                                                          extraClasses={`ml-3 bg-green-900 bg-opacity-80 h-5 w-5 -m-0.5 shadow-md  border-green-900 text-zinc-100 rounded-md hover:scale-110 cursor-pointer transition-all duration-75`}
                                                          onClick={() => {
                                                            setSettings((s) => ({
                                                              ...s,
                                                              [i]: {
                                                                ...s[i],
                                                                edit: { [dii]: dii_i },
                                                                hover: {},
                                                                content: {
                                                                  [dii]: { [dii_i]: descItem_i || '' },
                                                                },
                                                              },
                                                            }));
                                                          }}
                                                        />
                                                        <Icons.Close
                                                          extraClasses={`bg-red-900 bg-opacity-80 h-5 w-5 -m-0.5 shadow-md  border-red-900 text-zinc-100 rounded-md hover:scale-110 cursor-pointer transition-all duration-75`}
                                                          onClick={() => {
                                                            deskItemDelete({
                                                              product: i,
                                                              descName: descItem[0],
                                                              descNamePosition: dii,
                                                              descItemPosition: dii_i,
                                                            });
                                                          }}
                                                        />
                                                      </div>
                                                    )}
                                                  </div>
                                                );
                                              })}
                                              <div className={`h-8 w-full relative`}>
                                                {/* ADD DESC ITEM */}
                                                {settings[i].edit?.[dii] ? (
                                                  <React.Fragment>
                                                    <div
                                                      className={`absolute w-full h-6 z-50 flex gap-2 my-1`}
                                                    >
                                                      <input
                                                        className={`w-full border rounded-sm `}
                                                        value={
                                                          settings[i]?.content?.[dii]?.[
                                                            descItem[1].length + 1
                                                          ]
                                                        }
                                                        onChange={(e) => {
                                                          setSettings((s) => ({
                                                            ...s,
                                                            [i]: {
                                                              ...s[i],
                                                              content: {
                                                                [dii]: {
                                                                  [descItem[1].length + 1]: e.target.value,
                                                                },
                                                              },
                                                            },
                                                          }));
                                                        }}
                                                      ></input>
                                                      <Icons.Ok
                                                        extraClasses={`bg-zinc-50 h-6 w-6 shadow-md border border-green-900 text-zinc-800 rounded-md hover:scale-110 cursor-pointer transition-all duration-75`}
                                                        onClick={() => {
                                                          deskItemAdd({
                                                            product: i,
                                                            descName: descItem[0],
                                                            descNamePosition: dii,
                                                            descItemPosition: descItem[1].length + 1,
                                                          });
                                                          setSettings((s) => ({
                                                            ...s,
                                                            [i]: {
                                                              ...s[i],
                                                              edit: {},
                                                              hover: {},
                                                            },
                                                          }));
                                                        }}
                                                      />
                                                    </div>
                                                    <div
                                                      className={`fixed top-0 left-0 w-full h-screen z-40`}
                                                    ></div>
                                                  </React.Fragment>
                                                ) : (
                                                  <Icons.Plus
                                                    extraClasses={`bg-zinc-50 h-6 w-6 mt-1 shadow-md border border-green-900 text-zinc-800 rounded-md hover:scale-110 cursor-pointer transition-all duration-75`}
                                                    onClick={() => {
                                                      setSettings((s) => ({
                                                        ...s,
                                                        [i]: {
                                                          ...s[i],
                                                          edit: { [dii]: descItem[1].length + 1 },
                                                          hover: {},
                                                          content: {
                                                            [dii]: { [descItem[1].length + 1]: '' },
                                                          },
                                                        },
                                                      }));
                                                    }}
                                                  />
                                                )}
                                              </div>
                                            </div>
                                          </React.Fragment>
                                        );
                                      }
                                    })}
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ) : (
                            <></>
                          )}
                          {/* SPECIFICATIONS */}

                          {showSpecs[i] && (
                            <>
                              {optionsMatrix[i].sizes.map((item_i, ii) => {
                                const highlight =
                                  options[i]?.sizes.map(({ _id }) => _id)?.indexOf(item_i._id) === -1;
                                const bg = highlight ? 'bg-red-200' : 'bg-zinc-200';
                                return (
                                  <tr key={`sdjkfhs${ii}`} className={`border-x border-zinc-400 font-light`}>
                                    <td className={`text-center rounded-l-sm ${bg}`}>
                                      <input
                                        type={'checkbox'}
                                        checked={newData[i]?.sizes[ii]?.show || data2[i]?.sizes[ii]?.show}
                                        onChange={(e) =>
                                          handleDataChange(
                                            {
                                              type: 'showSize',
                                              productPos: i,
                                              size: ii,
                                              value: e.target.value,
                                            },
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
                                {create[i] ? (
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
                                  <td
                                    colSpan={7}
                                    className={`rounded-sm shadow-md border-x border-b border-zinc-400`}
                                  >
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
                            </>
                          )}
                          <tr>
                            <td></td>
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
