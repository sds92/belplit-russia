// react
import React from 'react';

// etc
import { PopUp, Modal, ModalItems, Radio, FeedBack as FeedBackForm, Decorators, Calculator } from '..';
import { Text, Select, Devider } from '../../lib';
import styles from './styles.module.scss';
import ProductList from './List';
import Techdesc from './Techdesc';

export default function ProductCardLG(props) {
  const { w, products } = props;
  console.log("🚀 ~ file: Card.lg.js ~ line 15 ~ ProductCardLG ~ products", products)
  const {
    id,
    title,
    name,
    files,
    sizes,
    prices,
    desc: { consists, options, advantages, functions, installation, description, tech },
  } = props.product;
  console.log('🚀 ~ file: Card.lg.js ~ line 24 ~ ProductCardLG ~ sizes', sizes);
  const [index, setIndex] = React.useState(0);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState({
    status: 'orderonopen',
    header: ['Отправить запрос'],
  });
  const [desc, setDesc] = React.useState({ open: 'tech' });

  const selectSizes = sizes.map((item, i) => ({
    title: item.a + '*' + item.b + '*' + item.h + ' [мм]',
    value: i,
  }));

  const [radioValue, setRadioValue] = React.useState(0);

  React.useEffect(() => {
    setIndex(radioValue);
    return;
  }, [radioValue]);

  React.useEffect(() => {
    if (modalData.status === 'success') {
      setTimeout(() => {
        setModalOpen(false);
      }, 3000);
    }
    return;
  }, [modalData]);

  function openModal() {
    setModalData({ status: 'orderonopen', header: ['Отправить запрос'] });
    setModalOpen(true);
  }

  return (
    <>
    <Devider data={{title: name, subTitle: 'Белтермо'}} color={`belplit_2`}/>
   
      <div className={`w-full max-w-7xl mx-auto relative`}>
        <div className={`flex flex-col md:flex-row w-full bg-white rounded-md sm:mt-4`}>
          <div className={`flex flex-col sm:flex-row basis-1/3`}>
            <div
              className={`zero:w-full sm:w-2/3 md:w-full relative rounded-md overflow-hidden sm:order-1 zero:order-2`}
            >
              <img width={570} height={570} src={`/images/products/lg/${files.product}`}></img>
            </div>
            <div className={`zero:w-full zero:order-1 sm:w-1/3 sm:order-2 md:hidden`}>
              <ProductList
                inset={w < 640}
                title={<p className={`py-2 font-bold text-lg`}>Продукция:</p>}
                listItems={products.map((item) => ({ id: item.id, title: item.title }))}
                curProduct={props.product}
              />
            </div>
          </div>

          <div className={`order-2 basis-1/3`}>
            <div className={`rounded-md  m-4 py-2`}>
              <div className={`px-4`}>
                <Select
                  label={`Размеры:`}
                  items={selectSizes}
                  id={'sizes'}
                  onChange={(e) => {
                    setRadioValue(e.target.value);
                  }}
                />
              </div>
              <p className={`ml-2 pt-2 px-2 font-bold text-xl`}>Цена:</p>
              <div className={`flex items-end mx-4 px-4 gap-1 whitespace-nowrap py-2 bg-white border-b `}>
                <p className={`text-gray-500 `}>плита:</p>
                <p className={`font-bold text-xl`}>{Math.round(prices.bar[index])}</p>
                <p className={`text-gray-500`}>руб. /</p>
                <p className={`text-gray-500`}>кв.м:</p>
                <p className={'font-bold text-xl text-red-600'}>{prices.square[index]}</p>
                <p className={`text-gray-500`}>руб.</p>
              </div>
              <div
                className={`bg-belplit_2 active:scale-105 transition-all uppercase font-bold mx-4 my-4 rounded-md text-center text-zinc-100 py-2 cursor-pointer hover:bg-belplit hover:text-slate-200`}
                onClick={openModal}
              >
                Купить
              </div>
            </div>
          </div>
          <div className={`order-3 basis-1/3 zero:hidden md:block`}>
            <ProductList
              inset={w < 640}
              title={<p className={`py-2 font-bold text-lg`}>Продукция:</p>}
              listItems={products.map((item) => ({ id: item.id, title: item.title }))}
              curProduct={props.product}
            />
          </div>
        </div>
      </div>
      <div className={`w-full`}>
        <div className={`w-full bg-belplit_2 py-6 mt-4 ` + styles['shadow-techdesc']}>
          <div className={`max-w-7xl mx-auto text-5xl font-bold text-zinc-800`}>Калькулятор</div>
        </div>
        <div className={`mx-auto max-w-7xl`}>
          <Calculator products={products} />
        </div>
      </div>
      <div className={`z-10 w-full bg-belplit_2 pt-8 h-64 relative ` + styles['shadow-techdesc']}>
        <div className={`max-w-7xl mx-auto flex text-5xl font-bold pb-4 text-zinc-800`}>Информация</div>
        <div className={`max-w-7xl mx-auto flex`}>
          {[
            ['tech', 'Технические характеристики'],
            ['desc', 'Описание'],
          ].map((item, indexDesc) => (
            <div
              key={`DESC${indexDesc}`}
              className={`flex px-4 items-center justify-center text-center text-xl cursor-pointer rounded-t-md py-4 font-light transition-all ${
                desc.open === item[0] ? 'text-zinc-800 bg-white' : ' text-white'
              }`}
              onClick={() => setDesc((s) => ({ ...s, open: item[0] }))}
            >
              <p className={``}>{item[1]}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={`w-full z-20 relative`} style={{ marginTop: '-100px' }}>
        <div className={`mb-10 max-w-7xl mx-auto rounded-b-lg shadow-2xl`}>
          {desc.open === 'desc' && (
            <PopUp
              data={[
                [description, 'Описание:'],
                [consists, 'Состав:'],
                [options, 'Область применения:'],
                [advantages, 'Преимущества:'],
                [functions, 'Функции:'],
                [installation, 'Монтаж:'],
              ]}
            />
          )}
          {desc.open === 'tech' && <Techdesc data={tech} />}
        </div>
        <div className={`col-span-2 rounded-md w-full bg-white order-5`}>
          <div
            className={`relative`}
            // style={{height: `${files.techDesc[1][1]}px`}}
          ></div>
        </div>
      </div>
      <Modal
        setOpen={modalOpen}
        setClose={() => setModalOpen(false)}
        header={
          <ModalItems.Header
            data={{ status: modalData.status, header: modalData.header, setClose: () => setModalOpen(false) }}
          />
        }
        body={<FeedBackForm onFulfilled={(a) => setModalData({ status: a, header: modalData.header })} />}
      />
    </>
  );
}
