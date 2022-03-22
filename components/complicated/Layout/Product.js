// react
import React from 'react';

// etc
import { ProductComponent, PopUp, Modal, ModalItems, FeedBack as FeedBackForm, Calculator, Icons } from '..';
import { Text, Select } from '../../lib';

export default function Product(props) {
  const { w, products, product } = props;
  console.log('🚀 ~ file: Product.js ~ line 10 ~ Product ~ products', products);
  // const {
  //   id,
  //   title,
  //   name,
  //   files,
  //   sizes,
  //   prices,
  //   coef,
  //   connectionTypes,
  //   displayName,
  //   desc: { consists, options, advantages, functions, installation, description, tech },
  // } = props.product;

  const [option, setOption] = React.useState(0);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState({
    status: 'orderonopen',
    header: ['Отправить запрос'],
  });

  const selectSizes = product.options.map((item, i) => {
    // if (item[0]) {
    //   return { title: item[0], value: i };
    // }
    return {
      title: item.a + '*' + item.b + '*' + item.h + ' [мм]' + ' ' + item.connectionType,
      value: i,
    };
  });

  const [radioValue, setRadioValue] = React.useState(0);
  const [region, setRegion] = React.useState(0);

  React.useEffect(() => {
    setOption(radioValue);
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
    setModalData({ status: 'orderonopen', header: ['Отправить запрос'], msg: [`${_msg}`] });
    setModalOpen(true);
  }
  const cities = [
    ['Москва', 'square'],
    ['СПБ', 'spb'],
    ['Казань', 'kazan'],
    ['Краснодар', 'krasnodar'],
    ['Ростов', 'rostov'],
    ['Волгоград', 'volvograd'],
    ['Астрахань', 'astrahan'],
    ['Крым', 'crimea'],
  ];

  return (
    <>
      <div className={props.lgView || props.mdView ? `pt-20` : `pt-10`}>
        {/* BODY */}
        <div
          className={`bg-belplit_2 ${
            props.lgView || props.mdView ? `py-4` : `py-1 fixed z-40 w-full shadow-md`
          }`}
        >
          <div
            className={` pl-1.5 font-light text-zinc-800 max-w-7xl ${
              props.lgView || props.mdView ? `text-xl` : `text-xl`
            } text-left mx-auto`}
          >
            {product.info?.userTitle
              ? product.info?.userTitle
              : product.info.displayName
              ? 'Белплит' + product.info.displayName
              : product.info.title}
          </div>
        </div>
      </div>

      <div className={`max-w-7xl mx-auto ${props.lgView ? `mt-10` : `mt-10`}`}>
        <div className={`flex flex-col md:flex-row w-full bg-white rounded-md`}>
          <div className={`flex flex-col items-center sm:flex-row basis-1/3 relative`}>
            <div
              className={`zero:w-full zero:rounded-none zero:mx-2 sm:w-2/3 md:w-full relative rounded-md overflow-hidden sm:order-1 zero:order-2`}
            >
              <img width={570} height={570} src={`../images/products/lg/${product.info.slug}.jpg`}></img>
            </div>
            <div className={`zero:w-full zero:order-1 sm:w-1/3 sm:order-2 md:hidden`}>
              <ProductComponent.List
                inset={w < 640}
                title={<p className={`py-2 font-bold text-lg`}>Продукция:</p>}
                listItems={products.map((item) => ({
                  id: item.info.id,
                  name: item.info.slug,
                  title: item.info.displayName ? 'Белплит' + ' ' + item.info.displayName : item.info.title,
                }))}
                curProduct={props.product}
                reset={() => setIndex(0)}
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
                  items={cities.map((item, i) => ({ title: item[0], value: i }))}
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
                  {(
                    product.options[option].prices.find((item, i) => item.city === cities[i][1]).value *
                    product.options[option].coef
                  ).toFixed(2)}
                </p>
                <p className={`text-gray-500`}>руб. /</p>
                <p className={`text-gray-500`}>кв.м:</p>
                <p className={'font-bold text-xl text-red-600'}>
                  {product.options[option].prices.find((item, i) => item.city === cities[i][1]).value}
                </p>
                <p className={`text-gray-500`}>руб.</p>
              </div>
              <div
                className={`bg-belplit_2 text-xl active:scale-105 transition-all uppercase font-bold mx-4 my-4 rounded-md text-center text-white py-2 cursor-pointer hover:scale-105 hover:bg-belplit_dark`}
                onClick={() => {
                  const tempMsg = `Марка: ${title}\r\nРазмеры: ${selectSizes[index].title}\r\nСклад: ${cities[region]}\r\nКоличество:`;
                  return openModal(tempMsg);
                }}
              >
                Заказать
              </div>
            </div>
          </div>
          <div className={`order-3 md:hidden px-4`}>
            {product.desc.find(({ title }) => title === 'main')?.value && (
              <div className={`font-light p-2`}>
                {product.desc.find(({ title }) => title === 'main')?.value}
              </div>
            )}
          </div>
          <div className={`order-3 basis-1/3 zero:hidden md:block`}>
            {product.desc.find(({ title }) => title === 'main')?.value && (
              <div className={`font-light p-4 flex flex-col`}>
                <div className={`font-bold py-2 uppercase mt-4`}>Описание</div>
                <Text>{[product.desc.find(({ title }) => title === 'main').value]}</Text>
              </div>
            )}
            {/* <ProductComponent.List
              inset={w < 640}
              title={<p className={`py-2 font-bold text-lg`}>Продукция:</p>}
              listItems={products.map((item) => ({ id: item.id, name: item.name, title: item.displayName ? 'Белплит' + ' ' + item.displayName : item.title }))}
              curProduct={props.product}
              reset={() => setIndex(0)}
            /> */}
          </div>
        </div>
      </div>

      <div className={`max-w-7xl mx-auto text-5xl font-bold text-zinc-800 mt-10 pl-2`}>Калькулятор</div>
      <div className={`w-full`}>
        <div className={`mx-auto max-w-7xl`}>
          <Calculator
            initRegions={cities}
            initValues={{ mark: product.info.id }}
            products={[product]}
            onClick={(a) => {
              return openModal(a);
            }}
          />
        </div>
      </div>
      {/* <div className={'bg-zinc-500 py-4'}>
        <Text className={`pl-1.5 uppercase font-bold text-belplit_2 text-5xl max-w-7xl text-left mx-auto`}>
          Информация
        </Text>

        <Text className={`text-4xl pl-2 font-bold text-white pb-2 max-w-7xl text-left mx-auto`}>
          об изделии
        </Text>
      </div> */}

      {/* <div className={`w-full z-20 relative`}>
        <div
          className={`mx-auto zero:text-2xl zero:pl-1 max-w-7xl text-left text-3xl text-zinc-800 font-bold mt-10 mb-5 border-b-4 border-zinc-600`}
        >
          {'Описание'}
        </div>
        <div className={`max-w-7xl mx-auto rounded-b-lg`}>
          <PopUp
            data={[
              [product.desc.find(({title}) => title === 'description')?.value, 'Описание'],
              [product.desc.find(({title}) => title === 'consists')?.value, 'Состав'],
              [product.desc.find(({title}) => title === 'options')?.value, 'Область применения'],
              [product.desc.find(({title}) => title === 'advantages')?.value, 'Преимущества'],
              [product.desc.find(({title}) => title === 'functions')?.value, 'Функции'],
              [product.desc.find(({title}) => title === 'installation')?.value, 'Монтаж'],
            ]}
          />
        </div>
        <div className={`max-w-7xl mx-auto rounded-b-lg`}>
          <div
            className={`mx-auto zero:text-2xl zero:pl-1 max-w-7xl text-left text-3xl text-zinc-800 font-bold mt-10 mb-5 border-b-4 border-zinc-600`}
          >
            {'Технические характеристики'}
          </div>
          <ProductComponent.Techdesc data={product.desc.find(({title}) => title === 'tech')?.value} w={w} />
        </div>
        <div className={`col-span-2 rounded-md w-full bg-white order-5`}>
          <div className={`relative`}></div>
        </div>
      </div> */}
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
