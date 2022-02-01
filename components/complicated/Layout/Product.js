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
    desc: { consists, options, advantages, functions, installation, description, tech },
  } = props.product;
  const [index, setIndex] = React.useState(0);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState({
    status: 'orderonopen',
    header: ['Отправить запрос'],
  });
  const [desc, setDesc] = React.useState({ open: 'tech' });

  const selectSizes = sizes.map((item, i) => {
    if (item[0]) {
      return { title: item[0], value: i };
    }
    return {
      title: item.a + '*' + item.b + '*' + item.h + ' [мм]',
      value: i,
    };
  });

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
      <Devider data={{ title: name, subTitle: 'МДВП' }} color={`belplit_2`} />

      <div className={`max-w-7xl mx-auto zero:my-0 sm:my-4`}>
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
                  label={`Регионы:`}
                  items={[{ title: 'Москва', value: 0 }]}
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
                className={`bg-belplit_2 active:scale-105 transition-all uppercase font-bold mx-4 my-4 rounded-md text-center text-white py-2 cursor-pointer hover:bg-belplit_dark hover:text-slate-200`}
                onClick={openModal}
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
          <Calculator products={products} />
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

      <div className={`max-w-7xl sm:mx-auto flex`}>
        <div className={`h-full ml-2 my-3 bg-zinc-800 sm:hidden`} style={{ width: 1, height: 50 }}></div>
        <div className={`flex zero:flex-col sm:flex-row items-start py-1`}>
          {[
            ['tech', 'Технические характеристики'],
            ['desc', 'Описание'],
          ].map((item, indexDesc) => (
            <div
              key={`DESC${indexDesc}`}
              className={`active:scale-105 text-left text-2xl cursor-pointer transition-all px-2 ${
                desc.open === item[0]
                  ? 'text-zinc-800 font-bold sm:border-b-2 border-zinc-800'
                  : 'text-zinc-800 font-extralight'
              }`}
              // style={{ minWidth: 250 }}
              onClick={() => setDesc((s) => ({ ...s, open: item[0] }))}
            >
              <p className={``}>
                {desc.open === item[0] && <span className={`sm:hidden`}>{' > '}</span>} {item[1]}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={`w-full z-20 relative`}>
        <div className={`my-10 max-w-7xl mx-auto rounded-b-lg`}>
          {desc.open === 'desc' && (
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
          )}
          {desc.open === 'tech' && <ProductComponent.Techdesc data={tech} />}
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
