// react
import React from 'react';
import Image from 'next/image';

// etc
import { PopUp, Modal, ModalItems, Radio, FeedBack as FeedBackForm, ProductList } from '../../complicated';
import { Text } from '../../lib';
import { products } from '../../../configs/products';

export default function ProductCardLG(props) {
  const {
    title,
    files,
    sizes,
    prices,
    desc: { consists, options, advantages, functions, installation, description },
  } = props.product;
  const [index, setIndex] = React.useState(0);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState({
    status: 'orderonopen',
    header: ['Отправить запрос'],
  });

  const radioItems = sizes.map((item, i) => {
    return { bar: item[0].split(' / ')[0], square: item[0].split(' / ')[1], key: i };
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
      <div className={`bg-white pt-20`}>
        <div className={`bg-zinc-400`}>
          <div className={`bg-belplit bg-opacity-60 py-2`}>
            <Text className={`text-5xl pl-1.5 font-bold text-zinc-800 max-w-7xl text-left mx-auto`}>
              {title.replaceAll('Белтермо ', '')}
            </Text>
            <Text className={`text-4xl pl-2 font-bold text-zinc-100 pb-2 max-w-7xl text-left mx-auto`}>
              Белтермо
            </Text>
          </div>
        </div>
      </div>
      <div
        className={`w-full max-w-6xl mx-auto relative flex items-start justify-start zero:flex-wrap md:flex-nowrap`}
      >
        <div className={`flex flex-col lg:grid lg:grid-cols-2 bg-white rounded-md shadow-md mt-20`}>
          <div className={`relative rounded-md overflow-hidden h-96 order-1`}>
            <img
              src={`/images/products/lg/${files.product}`}
              alt={title}
              layout='fill'
              objectFit='contain'
            />
          </div>
          <div className={`order-2`}>
            <div className={`rounded-md  m-4 py-2`}>
              <p className={`ml-2 pt-2 px-2 font-bold text-lg`}>Размеры:</p>
              <Radio radioItems={radioItems} onChange={setRadioValue} />
              <p className={`ml-2 pt-2 px-2 font-bold text-lg`}>Цена:</p>
              <div
                className={`flex items-end mx-4 px-4 gap-1 whitespace-nowrap py-2 bg-white rounded-md shadow-md`}
              >
                <p className={`text-gray-500 `}>плита:</p>
                <p className={`font-bold text-xl`}>{prices.bar[index]}</p>
                <p className={`text-gray-500`}>руб. /</p>
                <p className={`text-gray-500`}>кв.м:</p>
                <p className={'font-bold text-xl text-red-600'}>{prices.square[index]}</p>
                <p className={`text-gray-500`}>руб.</p>
              </div>
              <div
                className={`bg-belplit uppercase font-bold mx-4 my-2 rounded-md text-center text-slate-200 py-2 cursor-pointer hover:bg-opacity-75 hover:text-slate-200`}
                onClick={openModal}
              >
                Купить
              </div>
            </div>
          </div>

          <div className={`col-span-2 py-2 m-4 order-4`}>
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
          </div>
          <div className={`col-span-2 rounded-md w-full bg-white order-5`}>
            <div
              className={`relative`}
              // style={{height: `${files.techDesc[1][1]}px`}}
            >
              <Image
                src={`/images/products/techDesc/${files.techDesc[0]}`}
                alt={`Техническое описание ${title}`}
                width={files.techDesc[1][0]}
                height={files.techDesc[1][1]}
                layout='responsive'
                objectFit='contain'
              />
            </div>
          </div>
        </div>
        <div className={`m-4 py-2 w-56`}>
          <p className={`ml-2 pt-2 px-2 font-bold text-lg`}>Продукция:</p>
          <ProductList listItems={products.map((item) => ({ id: item.id, title: item.title }))} />
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
