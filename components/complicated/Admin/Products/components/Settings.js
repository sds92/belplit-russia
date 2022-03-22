import React from 'react';
import AddDesc from './AddDesc';
import { Icons } from '../../..';
import { useSelector, useDispatch } from 'react-redux';
import { updatePages, selectProducts, updateProducts, setSave } from 'redux/slices/productsSlice';

export default function Settings(props) {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const { deleteProduct, productList, product, meta, pages, save } = props;
  const [values, setValues] = React.useState({
    meta: {
      keywords: meta.meta.find(({ name }) => name === 'keywords').content || '',
      description: meta.meta.find(({ name }) => name === 'description').content || '',
      title: meta.title || '',
    },
    info: {
        userTitle: product.info?.userTitle || '' 
    },
    desc: {
        main: product.desc.find(item => item.title === 'main')?.value || ''
    }
  });
  const [state, setState] = React.useState({
    hover: {},
    edit: {},
    create: {
      desc: true,
    },
  });

  function addDesk(input) {
    let _products = productList.addDesk(products, input, product.id);
    dispatch(updateProducts(_products));
    save(_products)
  }

  function setUserTitle() {
    let _products = productList.setUserTitle(products, values.info.userTitle, product.id);
    dispatch(updateProducts(_products));
    save(_products)
  }

  function setMeta(input) {
    let _pages = JSON.parse(JSON.stringify(pages));
    let pagePosition = null;
    let _page = _pages.find((item, i) => {
      if (item.content.product_id === input.productId) {
        pagePosition = i;
        return true;
      }
    });
    switch (input.metaName) {
      case 'title': {
        _page.head.title = input.value;
        break;
      }
      case 'keywords': {
        _page.head.meta.find((_metaItem) => _metaItem.name === input.metaName.toLowerCase()).content =
          input.value;
        break;
      }
      case 'description': {
        _page.head.meta.find((_metaItem) => _metaItem.name === input.metaName.toLowerCase()).content =
          input.value;
        break;
      }
      default:
        break;
    }
    _pages.splice(pagePosition, 1, _page);
    dispatch(updatePages(_pages));
    setSave(true)
  }
  return (
    <div className={`flex flex-col border-x border-zinc-500 `}>
      <div className={`flex py-1 items-center justify-start bg-zinc-200 rounded-sm`}>
        <div className={`ml-2 font-light text-sm`}>удалить товар</div>
        <Icons.Close
          extraClasses={`bg-zinc-50 h-6 w-6 m-1 shadow-md border border-red-900 text-zinc-800 rounded-md hover:scale-110 cursor-pointer transition-all duration-75`}
          onClick={() => {
            deleteProduct(product.id);
          }}
        />
      </div>
      <div className={`border p-4 bg-zinc-100`}>
        <div className={`uppercase py-2 font-bold`}>Метатеги</div>
        {['TITLE', 'KEYWORDS', 'DESCRIPTION'].map((metaItem, i) => {
          return (
            <React.Fragment key={`dfjg${i}`}>
              <div className={`ml-2 flex`}>{metaItem}</div>
              <div
                className={`w-full relative h-10 ml-2 flex flex-col border rounded-sm p-2 bg-white cursor-default ${
                  state.hover === metaItem.toLowerCase() ? `bg-blue-100` : ``
                }`}
                onMouseEnter={() => {
                  setState((s) => ({
                    ...s,
                    hover: metaItem.toLowerCase(),
                  }));
                }}
                onMouseLeave={() => {
                  setState((s) => ({
                    ...s,
                    hover: '',
                  }));
                }}
              >
                {state.edit === metaItem.toLowerCase() ? (
                  <React.Fragment>
                    <div className={`absolute w-full h-6 z-50 flex gap-2`}>
                      <input
                        className={`border rounded-sm `}
                        style={{ width: '70%' }}
                        value={values.meta[metaItem.toLowerCase()]}
                        onChange={(e) => {
                          setValues((s) => ({
                            ...s,
                            meta: {
                              ...s.meta,
                              [metaItem.toLowerCase()]: e.target.value,
                            },
                          }));
                        }}
                      />
                      <Icons.Ok
                        extraClasses={`bg-zinc-50 h-6 w-6 shadow-md border border-green-900 text-zinc-800 rounded-md hover:scale-110 cursor-pointer transition-all duration-75`}
                        onClick={() => {
                          setMeta({
                            productId: product.id,
                            metaName: metaItem.toLowerCase(),
                            value: values.meta[metaItem.toLowerCase()],
                          });
                          setState((s) => ({
                            ...s,
                            edit: '',
                            hover: '',
                          }));
                        }}
                      />
                    </div>
                    <div className={`fixed top-0 left-0 w-full h-screen z-40`}></div>
                  </React.Fragment>
                ) : metaItem.toLowerCase() === 'title' ? (
                  pages.find((item) => item.content.product_id === product.id)?.head.title
                ) : (
                  pages
                    .find((item) => item.content.product_id === product.id)
                    ?.head.meta.find((_metaItem) => _metaItem.name === metaItem.toLowerCase())?.content
                )}
                {state.hover === metaItem.toLowerCase() && (
                  <div className={`absolute flex justify-start items-center gap-2 inset-0`}>
                    <Icons.Edit
                      extraClasses={`ml-2 bg-green-900 bg-opacity-80 h-6 w-6 -m-0.5 shadow-md  border-green-900 text-zinc-100 rounded-md hover:scale-110 cursor-pointer transition-all duration-75`}
                      onClick={() => {
                        setState((s) => ({
                          ...s,

                          edit: metaItem.toLowerCase(),
                          hover: '',
                        }));
                      }}
                    />
                  </div>
                )}
              </div>
            </React.Fragment>
          );
        })}
        <div className={`flex flex-col items-start gap-2 my-4`}>
          <div className={`uppercase font-bold`}>Заголовок</div>
          <input
            onChange={(e) => {
              setValues((s) => ({ ...s, info: { ...s.info, userTitle: e.target.value } }));
            }}
            className={`w-full`}
            value={values.info.userTitle}
            placeholder={'Введите заголовок'}
          ></input>
          <div
            onClick={() => {
              setUserTitle()
            }}
            className={`text-center p-1 bg-belplit_2 rounded-sm text-white cursor-pointer`}
          >
            Обновить
          </div>
        </div>
        <div className={`flex flex-col items-start gap-2 my-4`}>
          <div className={`uppercase font-bold`}>ОПИСАНИЕ ТОВАРА</div>
          <textarea
            onChange={(e) => {
              setValues((s) => ({ ...s, desc: { ...s.desc, main: e.target.value } }));
            }}
            className={`w-full`}
            value={values.desc.main}
            placeholder={'Введите описание'}
            rows={5}
          ></textarea>
          <div
            onClick={() => {
              addDesk({ title: 'main', value: values?.desc?.main })
            }}
            className={`text-center p-1 bg-belplit_2 rounded-sm text-white cursor-pointer`}
          >
            Обновить
          </div>
        </div>
      </div>
    </div>
  );
}
