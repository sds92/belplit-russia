import React from 'react';
import { Icons } from '../..';
import { validateName } from 'utils/validations';
import { Layout, AddProduct, ProductLine, Navigation } from './components';

import { useSelector, useDispatch } from 'react-redux';
import {
  update,
  selectStatus,
  selectProducts,
  selectProductList,
  selectProductsInit,
  importInitProducts,
  deleteOptions,
  selectPreDelete,
  updateProducts,
  clearToDelete,
  clearCreated,
  setSave
} from 'redux/slices/productsSlice';

export default function ProductsSetter() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const productsInit = useSelector(selectProductsInit);
  const productList = useSelector(selectProductList);
  const preDeleted = useSelector(selectPreDelete);

  const statusSave = useSelector(selectStatus);

  const [newData, setNewData] = React.useState([]);

  const [settings, setSettings] = React.useState(null);

  const getProducts = () => {
    fetch('api/products')
      .then((res) => res.json())
      .then((res) => {
        dispatch(importInitProducts(JSON.parse(JSON.stringify(res))));
      })
      .catch((err) => console.log(err));
  };
  const [pages, setPages] = React.useState([]);
  const [newPages, setNewPages] = React.useState([]);

  const save = async (input) => {
    let _t = [];
    if (input) {
      _t = input;
    } else {
      _t = products;
    }
    console.log('🚀 ~ file: Products.js ~ line 57 ~ save ~ _t', _t);

    await fetch(`api/prices`, {
      method: 'POST',
      body: JSON.stringify(_t),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('🚀 ~ file: Products.js ~ line 68 ~ .then ~ res', res);
        if (res.status === 'ok') {
          getProducts();
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

  // const handleSettingsChange = (a, e) => {
  //   const _data = JSON.parse(JSON.stringify(newData));
  //   const _product = _data[a.product];
  //   _product.desc[a.descName].splice(
  //     a.descItemPosition,
  //     1,
  //     settings[a.product].content[a.descNamePosition][a.descItemPosition]
  //   );
  //   setSettings((s) => ({
  //     ...s,
  //     [a.product]: {
  //       ...s[a.product],
  //       content: {
  //         [a.descNamePosition]: { [a.descItemPosition]: '' },
  //       },
  //     },
  //   }));
  //   setNewData(_data);
  //   save(_data);
  // };
  // const deskItemDelete = (a, e) => {
  //   const _data = JSON.parse(JSON.stringify(newData));
  //   const _product = _data[a.product];
  //   _product.desc[a.descName].splice(a.descItemPosition, 1);
  //   setNewData(_data);
  //   save(_data);
  // };
  // const deskItemAdd = (a, e) => {
  //   const _data = JSON.parse(JSON.stringify(newData));
  //   const _product = _data[a.product];
  //   _product.desc[a.descName].push(settings[a.product].content[a.descNamePosition][a.descItemPosition]);
  //   setSettings((s) => ({
  //     ...s,
  //     [a.product]: {
  //       ...s[a.product],
  //       content: {
  //         [a.descNamePosition]: { [a.descItemPosition]: '' },
  //       },
  //     },
  //   }));
  //   setNewData(_data);
  //   save(_data);
  // };

  // const handleMetaChange = (a) => {
  //   const _pages = JSON.parse(JSON.stringify(newPages));
  //   const pagePosition = null;
  //   _pages.find((item, i) => {
  //     if (item.content.product_id === a.productId) {
  //       pagePosition = i;
  //     }
  //   });
  //   const _page = _pages[pagePosition];
  //   switch (a.metaName) {
  //     case 'title': {
  //       _page.head.title = settings[a.productId].content.meta.title || _page.head.title;
  //       break;
  //     }
  //     case 'keywords': {
  //       _page.head.meta.find((item) => item.name === 'keywords').content =
  //         settings[a.productId].content.meta[a.metaName] ||
  //         _page.head.meta.find((item) => item.name === 'keywords').content;
  //       break;
  //     }
  //     case 'description': {
  //       _page.head.meta.find((item) => item.name === 'description').content =
  //         settings[a.productId].content.meta[a.metaName] ||
  //         _page.head.meta.find((item) => item.name === 'description').content;
  //       break;
  //     }
  //     default:
  //       break;
  //   }
  //   setNewPages(_pages);
  //   savePages(_pages);
  // };

  function addProduct(a) {
    let _products = JSON.parse(JSON.stringify(products));
    productList.addItem(_products, a);
    dispatch(update(_products));
  }

  function handleSave() {
    if (preDeleted.length !== 0) {
      const pr_pos = null;
      const _products = JSON.parse(JSON.stringify(products));
      Promise.all(
        preDeleted.map((item) => {
          const _product = _products.find((item_i, i) => {
            if (item_i.id === item.product_id) {
              pr_pos = i;
              return true;
            }
          });
          _product.options.splice(item.option_position, 1);
          _products.splice(pr_pos, 1, _product);
        })
      ).then(() => {
        dispatch(clearToDelete([]));
        dispatch(clearCreated([]));
      });
      save(_products);
    } else {
      dispatch(clearCreated([]));
      save(products);
    }
    dispatch(setSave(false))
  }

  React.useEffect(() => {
    getProducts();
    // getPages();
  }, []);

  // React.useEffect(() => {
  //   if (newProduct.created) {
  //     createProduct();
  //   }
  // }, [newProduct.created]);

  return (
    <div className={`font-rc`}>
      {statusSave && <Navigation handleSave={handleSave} />}

      <Layout.Products save={save}>
        <AddProduct addProduct={addProduct} />

        {products.map((item, i) => {
          return (
            <div className={`mb-1`} key={`lfjkh${i}`}>
              <ProductLine
                handleSettingsOpenState={() => {
                  if (settings === i) {
                    setSettings(null);
                  } else {
                    setSettings(i);
                  }
                }}
                settings={settings === i}
                product={item}
              >
                {/* SETTINGS */}
                {settings === i ? (
                  <div className={`flex flex-col border-x border-zinc-400 `}>
                    <div className={`flex items-center justify-start bg-zinc-200 rounded-sm`}>
                      <div className={`ml-2 font-light text-sm`}>удалить товар</div>
                      <Icons.Close
                        extraClasses={`bg-zinc-50 h-6 w-6 m-1 shadow-md border border-red-900 text-zinc-800 rounded-md hover:scale-110 cursor-pointer transition-all duration-75`}
                        onClick={() => {
                          // deleteProduct(item.id);
                        }}
                      />
                    </div>
                    <div className={`border p-4 bg-zinc-100`}>
                      {/* META */}
                      {/* <div className={`uppercase py-2 font-bold`}>Метатеги</div>
                      {['TITLE', 'KEYWORDS', 'DESCRIPTION'].map((metaItem, mii) => {
                        return (
                          <React.Fragment key={`dfjg${mii}`}>
                            <div className={`ml-2 flex`}>{metaItem}</div>
                            <div
                              className={`relative h-10 ml-2 flex flex-col border rounded-sm p-2 bg-white cursor-default ${
                                settings[i]?.hover?.meta === metaItem.toLowerCase() ? `bg-blue-100` : ``
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
                                      value={settings[i]?.content?.meta?.[metaItem.toLowerCase()]}
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
                                  <div className={`fixed top-0 left-0 w-full h-screen z-40`}></div>
                                </React.Fragment>
                              ) : metaItem.toLowerCase() === 'title' ? (
                                pages.find((item) => item.content.product_id === i)?.head.title
                              ) : (
                                pages
                                  .find((item) => item.content.product_id === i)
                                  ?.head.meta.find((_metaItem) => _metaItem.name === metaItem.toLowerCase())
                                  ?.content
                              )}

                              {settings[i].hover?.meta === metaItem.toLowerCase() && (
                                <div className={`absolute flex justify-start items-center gap-2 inset-0`}>
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
                                                  ? pages.find((item) => item.content.product_id === i)?.head
                                                      .title
                                                  : pages
                                                      .find((item) => item.content.product_id === i)
                                                      .head.meta.find(
                                                        (_metaItem) =>
                                                          _metaItem.name === metaItem.toLowerCase()
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
                          <div className={`ml-2`}>Отдельные характеристики товара для сайтов Белтермо:</div>
                          <div className={`ml-2 flex flex-col border rounded-sm p-2 bg-white`}>
                            <div className={`flex gap-2`}>
                              <div>Плотность:</div>
                              <div>{item.density}</div>
                              <input
                                type={'number'}
                                value={
                                  parseInt(otherSpecs[item.id]?.density?.replace(' кг/м³', '')) ||
                                  item.density.replace(' кг/м³', '')
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
                      )} */}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </ProductLine>
            </div>
          );
        })}
      </Layout.Products>
    </div>
  );
}

// {Object.entries(item.desc).map((descItem, dii) => {
//   if (descItem[0] !== 'tech') {
//     return (
//       //! DESC ITEM
//       <React.Fragment key={`dfskgh${dii}`}>
//         <div className={`ml-2 flex`}>
//           {descs.find((item) => item[1] === descItem[0])[0]}:
//         </div>
//         <div className={`ml-2 flex flex-col border rounded-sm p-2 bg-white`}>
//           {descItem[1].map((descItem_i, dii_i) => {
//             return (
//               //! DESC ITEM -> ITEM
//               <div
//                 key={`sdkjfh${dii_i}`}
//                 onMouseEnter={() => {
//                   setSettings((s) => ({
//                     ...s,
//                     [i]: { ...s[i], hover: { [dii]: dii_i } },
//                   }));
//                 }}
//                 // onMouseLeave={() => {}}
//                 className={`font-light text-sm cursor-default relative h-6 ${
//                   settings[i]?.hover?.[dii] === dii_i ? `bg-blue-100` : ``
//                 }`}
//               >
//                 {settings[i].edit?.[dii] === dii_i ? (
//                   <React.Fragment>
//                     <div className={`absolute w-full h-6 z-50 flex gap-2`}>
//                       <input
//                         className={`w-full border rounded-sm `}
//                         value={settings[i]?.content?.[dii]?.[dii_i]}
//                         onChange={(e) => {
//                           setSettings((s) => ({
//                             ...s,
//                             [i]: {
//                               ...s[i],
//                               content: {
//                                 [dii]: { [dii_i]: e.target.value },
//                               },
//                             },
//                           }));
//                         }}
//                       />
//                       <Icons.Ok
//                         extraClasses={`bg-zinc-50 h-6 w-6 shadow-md border border-green-900 text-zinc-800 rounded-md hover:scale-110 cursor-pointer transition-all duration-75`}
//                         onClick={() => {
//                           handleSettingsChange({
//                             product: i,
//                             descName: descItem[0],
//                             descNamePosition: dii,
//                             descItemPosition: dii_i,
//                           });
//                           setSettings((s) => ({
//                             ...s,
//                             [i]: {
//                               ...s[i],
//                               edit: {},
//                               hover: {},
//                             },
//                           }));
//                         }}
//                       />
//                     </div>
//                     <div className={`fixed top-0 left-0 w-full h-screen z-40`}></div>
//                   </React.Fragment>
//                 ) : (
//                   dii_i + 1 + '. ' + descItem_i
//                 )}
//                 {settings[i].hover?.[dii] === dii_i && (
//                   <div className={`absolute flex justify-start gap-2 inset-0`}>
//                     <Icons.Edit
//                       extraClasses={`ml-3 bg-green-900 bg-opacity-80 h-5 w-5 -m-0.5 shadow-md  border-green-900 text-zinc-100 rounded-md hover:scale-110 cursor-pointer transition-all duration-75`}
//                       onClick={() => {
//                         setSettings((s) => ({
//                           ...s,
//                           [i]: {
//                             ...s[i],
//                             edit: { [dii]: dii_i },
//                             hover: {},
//                             content: {
//                               [dii]: { [dii_i]: descItem_i || '' },
//                             },
//                           },
//                         }));
//                       }}
//                     />
//                     <Icons.Close
//                       extraClasses={`bg-red-900 bg-opacity-80 h-5 w-5 -m-0.5 shadow-md  border-red-900 text-zinc-100 rounded-md hover:scale-110 cursor-pointer transition-all duration-75`}
//                       onClick={() => {
//                         deskItemDelete({
//                           product: i,
//                           descName: descItem[0],
//                           descNamePosition: dii,
//                           descItemPosition: dii_i,
//                         });
//                       }}
//                     />
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//           <div className={`h-8 w-full relative`}>
//             {/* ADD DESC ITEM */}
//             {settings[i].edit?.[dii] ? (
//               <React.Fragment>
//                 <div className={`absolute w-full h-6 z-50 flex gap-2 my-1`}>
//                   <input
//                     className={`w-full border rounded-sm `}
//                     value={settings[i]?.content?.[dii]?.[descItem[1].length + 1]}
//                     onChange={(e) => {
//                       setSettings((s) => ({
//                         ...s,
//                         [i]: {
//                           ...s[i],
//                           content: {
//                             [dii]: {
//                               [descItem[1].length + 1]: e.target.value,
//                             },
//                           },
//                         },
//                       }));
//                     }}
//                   ></input>
//                   <Icons.Ok
//                     extraClasses={`bg-zinc-50 h-6 w-6 shadow-md border border-green-900 text-zinc-800 rounded-md hover:scale-110 cursor-pointer transition-all duration-75`}
//                     onClick={() => {
//                       deskItemAdd({
//                         product: i,
//                         descName: descItem[0],
//                         descNamePosition: dii,
//                         descItemPosition: descItem[1].length + 1,
//                       });
//                       setSettings((s) => ({
//                         ...s,
//                         [i]: {
//                           ...s[i],
//                           edit: {},
//                           hover: {},
//                         },
//                       }));
//                     }}
//                   />
//                 </div>
//                 <div className={`fixed top-0 left-0 w-full h-screen z-40`}></div>
//               </React.Fragment>
//             ) : (
//               <Icons.Plus
//                 extraClasses={`bg-zinc-50 h-6 w-6 mt-1 shadow-md border border-green-900 text-zinc-800 rounded-md hover:scale-110 cursor-pointer transition-all duration-75`}
//                 onClick={() => {
//                   setSettings((s) => ({
//                     ...s,
//                     [i]: {
//                       ...s[i],
//                       edit: { [dii]: descItem[1].length + 1 },
//                       hover: {},
//                       content: {
//                         [dii]: { [descItem[1].length + 1]: '' },
//                       },
//                     },
//                   }));
//                 }}
//               />
//             )}
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// })}
