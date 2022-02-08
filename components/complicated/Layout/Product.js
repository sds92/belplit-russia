// react
import React from 'react';

// etc
import { ProductComponent, PopUp, Modal, ModalItems, FeedBack as FeedBackForm, Calculator, Icons } from '..';
import { Text, Select, Devider } from '../../lib';
import styles from './styles.module.scss';

export default function Product(props) {
  const { w, products } = props;
  const {
    id,
    title,
    name,
    files,
    sizes,
    prices,
    coef,
    connectionTypes,
    displayName,
    desc: { consists, options, advantages, functions, installation, description, tech },
  } = props.product;
  console.log('🚀 ~ file: Product.js ~ line 23 ~ Product ~ prices', prices);
  const [index, setIndex] = React.useState(0);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState({
    status: 'orderonopen',
    header: ['Отправить запрос'],
  });

  const selectSizes = sizes.map((item, i) => {
    if (item[0]) {
      return { title: item[0], value: i };
    }
    return {
      title: item.a + '*' + item.b + '*' + item.h + ' [мм]' + ' ' + connectionTypes[i],
      value: i,
    };
  });

  const [radioValue, setRadioValue] = React.useState(0);
  const [region, setRegion] = React.useState(0);

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

  function openModal(msg) {
    const _msg = msg ? msg : '';
    console.log('🚀 ~ file: Product.js ~ line 60 ~ openModal ~ _msg', _msg);
    setModalData({ status: 'orderonopen', header: ['Отправить запрос'], msg: [`${_msg}`] });
    setModalOpen(true);
  }
  const cities = ['Москва', 'СПБ', 'Казань', 'Краснодар', 'Ростов', 'Волгоград', 'Астрахань', 'Крым'];
  const ab = Object.entries(prices).map((item, i) => {
    return [cities[i], item[0], item[1]];
  });

  return (
    <>
      <div className={props.lgView ? `pt-20` : `pt-10`}>
        {/* BODY */}
        <div className={`bg-belplit_2 ${props.lgView ? `py-4` : `py-1 fixed z-40 w-full`}`}>
          <Text
            className={` pl-1.5 font-bold text-zinc-800 max-w-7xl ${
              props.lgView ? `text-5xl` : `text-xl`
            } text-left mx-auto`}
          >
            {displayName ? 'Белплит' + ' ' + displayName : props.data.title}
          </Text>
        </div>
      </div>
      {/* <Devider data={{ title: name, subTitle: 'МДВП' }} color={`belplit_2`} /> */}

      <div className={`max-w-7xl mx-auto zero:my-0 sm:my-4 ${props.lgView ? `mt-10` : `mt-0`}`}>
        <div className={`flex flex-col md:flex-row w-full bg-white rounded-md`}>
          <div className={`flex flex-col items-center sm:flex-row basis-1/3 relative`}>
            <div
              className={`zero:w-full zero:rounded-none zero:mx-2 sm:w-2/3 md:w-full relative rounded-md overflow-hidden sm:order-1 zero:order-2`}
            >
              <img width={570} height={570} src={`/images/products/lg/${files.product}`}></img>
            </div>
            <div className={`zero:w-full zero:order-1 sm:w-1/3 sm:order-2 md:hidden`}>
              <ProductComponent.List
                inset={w < 640}
                title={<p className={`py-2 font-bold text-lg`}>Продукция:</p>}
                listItems={products.map((item) => ({ id: item.id, title: item.title }))}
                curProduct={props.product}
              />
            </div>
          </div>

          <div className={`order-2 basis-1/3`}>
            <div className={`rounded-md m-4 py-2`}>
              <div className={`p-4`}>
                <Select
                  label={`Размеры:`}
                  items={selectSizes}
                  id={'sizes'}
                  onChange={(e) => {
                    setRadioValue(e.target.value);
                  }}
                />
              </div>
              <div className={`px-4`}>
                <Select
                  defaultValue={region}
                  label={`Склады:`}
                  items={ab.map((item, i) => ({ title: item[0], value: i }))}
                  id={'region'}
                  onChange={(e) => {
                    setRegion(e.target.value);
                  }}
                />
              </div>
              <p className={`ml-2 pt-2 px-2 font-bold text-xl`}>Цена:</p>
              <div className={`flex items-end mx-4 px-4 gap-1 whitespace-nowrap py-2 bg-white border-b `}>
                <p className={`text-gray-500 `}>плита:</p>
                <p className={`font-bold text-xl`}>
                  {prices.bar ? prices.bar[index] : Math.round(prices[ab[region][1]][index] * coef)}
                </p>
                <p className={`text-gray-500`}>руб. /</p>
                <p className={`text-gray-500`}>кв.м:</p>
                <p className={'font-bold text-xl text-red-600'}>{Math.round(prices[ab[region][1]][index])}</p>
                <p className={`text-gray-500`}>руб.</p>
              </div>
              <div
                className={`bg-belplit_2 text-xl active:scale-105 transition-all uppercase font-bold mx-4 my-4 rounded-md text-center text-white py-2 cursor-pointer hover:scale-105 hover:bg-belplit_dark`}
                onClick={() => {
                  const tempMsg = `Марка: ${title}\r\nРазмеры: ${
                    selectSizes[index].title
                  }\r\nСклад: ${cities[region]}\r\n`;
                  return openModal(tempMsg);
                }}
              >
                Купить
              </div>
            </div>
          </div>
          <div className={`order-3 basis-1/3 zero:hidden md:block`}>
            <ProductComponent.List
              inset={w < 640}
              title={<p className={`py-2 font-bold text-lg`}>Продукция:</p>}
              listItems={products.map((item) => ({ id: item.id, title: item.title }))}
              curProduct={props.product}
            />
          </div>
        </div>
      </div>

      <div className={`max-w-7xl mx-auto text-5xl font-bold text-zinc-800 mt-10 pl-2`}>Калькулятор</div>
      <div className={`w-full`}>
        <div className={`mx-auto max-w-7xl`}>
          <Calculator
            initRegions={ab}
            initValues={{ mark: id }}
            products={products}
            onClick={(a) => {
              return openModal(a);
            }}
          />
        </div>
      </div>
      <div className={'bg-zinc-500 py-4'}>
        <Text className={`pl-1.5 uppercase font-bold text-belplit_2 text-5xl max-w-7xl text-left mx-auto`}>
          Информация
        </Text>

        <Text className={`text-4xl pl-2 font-bold text-white pb-2 max-w-7xl text-left mx-auto`}>
          об изделии
        </Text>
      </div>

      <div className={`w-full z-20 relative`}>
        <div
          className={`mx-auto zero:text-2xl zero:pl-1 max-w-7xl text-left text-3xl text-zinc-800 font-bold mt-10 mb-5 border-b-4 border-zinc-600`}
        >
          {'Описание'}
        </div>
        <div className={`max-w-7xl mx-auto rounded-b-lg`}>
          <PopUp
            data={[
              [description, 'Описание'],
              [consists, 'Состав'],
              [options, 'Область применения'],
              [advantages, 'Преимущества'],
              [functions, 'Функции'],
              [installation, 'Монтаж'],
            ]}
          />
        </div>
        <div className={`max-w-7xl mx-auto rounded-b-lg`}>
          <div
            className={`mx-auto zero:text-2xl zero:pl-1 max-w-7xl text-left text-3xl text-zinc-800 font-bold mt-10 mb-5 border-b-4 border-zinc-600`}
          >
            {'Технические характеристики'}
          </div>
          <ProductComponent.Techdesc data={tech} w={w} />
        </div>
        <div className={`col-span-2 rounded-md w-full bg-white order-5`}>
          <div className={`relative`}></div>
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
        body={
          <FeedBackForm
            onFulfilled={(a) => setModalData({ status: a, header: modalData.header })}
            body={modalData.msg}
          />
        }
      />
    </>
  );
}
