// react
import React from 'react';
import Image from 'next/image';

// etc
import { Icons, PopUp, Modal, ModalItems, Radio, FeedBack as FeedBackForm } from '../../complicated';
import { Text } from '../../lib';

export default function ProductCardLG(props) {
  const {
    title,
    files,
    sizes,
    prices,
    desc: { consists, options, advantages, functions, installation, description },
  } = props.product;
  const [index, setIndex] = React.useState(0);
  const [modalStatus, setModalStatus] = React.useState('hide');
  const [modalData, setModalData] = React.useState({
    open: false,
    status: 'loading',
    description: ['Идет обработка запроса...'],
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const radioItems = sizes.map((item, i) => {
    return { bar: item[0].split(' / ')[0], square: item[0].split(' / ')[1], key: i };
  });

  const [radioValue, setRadioValue] = React.useState(0);

  React.useEffect(() => {
    setIndex(radioValue)
    console.log("🚀 ~ file: ProductCardLG.js ~ line 34 ~ React.useEffect ~ radioValue", radioValue)
    return
  }, [radioValue]);

  return (
    <>
      <div className={`w-full max-w-6xl mx-auto relative flex-col items-center justify-center pt-4`}>
        <Text ta={'center'} ts={'3xl'} tc={'belplit'}>
          {title}
        </Text>

        <div className={`rounded-md`}>
          <div className={`flex flex-col md:flex-row flex-wrap items-center justify-center`}>
            <div className={`relative w-80 h-80`}>
              <Image
                src={`/images/products/lg/${files.product}`}
                alt={title}
                layout='fill'
                objectFit='contain'
              />
            </div>
            <div className={`md:w-1/3`}>
              <p className={`ml-2 p-2 font-bold`}>Размеры:</p>
              <Radio radioItems={radioItems} onChange={setRadioValue} />
              <p className={`ml-2 p-2 font-bold`}>Цена:</p>
              <div className={`flex gap-1 pl-4 whitespace-nowrap`}>
                <p className={``}>плита:</p>
                <p className={`font-bold`}>{prices.bar[index]}</p>
                <p>руб. /</p>
                <p>кв.м:</p>
                <p className={'font-bold'}>{prices.square[index]}</p>
                <p>руб.</p>
              </div>
              <Text
                mx={'2'}
                px={2}
                py={2}
                my={2}
                ta={'center'}
                tc={'white'}
                tw={'bold'}
                extraClasses={`bg-belplit rounded-md max-w-xs cursor-pointer active:bg-belplit hover:text-slate-200 hover:bg-belplit`}
                onClick={() => setModalStatus('show')}
              >
                Купить
              </Text>
            </div>
            <div className={`w-full h-0.5 bg-belplit`}></div>
            <div className={`w-full md:w-1/3 pt-4`}>
              {[
                [description, 'Описание'],
                [consists, 'Состав'],
                [options, 'Область применения'],
                [advantages, 'Преимущества'],
                [functions, 'Функции'],
                [installation, 'Монтаж'],
              ].map((item, index) => {
                if (item[0]?.[0]) return <PopUp title={item[1]} arr={item[0]} key={`POPUP${index}`} />;
              })}
            </div>
            <div className={`relative w-full md:w-2/3`}>
              <Image
                src={`/images/products/techDesc/${files.techDesc}`}
                alt={title}
                width={2000}
                height={1598}
                layout='responsive'
                objectFit='contain'
              />
            </div>
          </div>
        </div>
      </div>
      {/show|pending/.test(modalStatus) && (
        <Modal
          data={modalData}
          setOpen={setModalData}
          header={
            <ModalItems.Header
              data={{ isLoading, status: modalData.status, description: modalData.description }}
            />
          }
          body={
            <ModalItems.Body
              data={{ isLoading, status: modalData.status, description: modalData.description }}
            />
          }
        />

        // <Modal>
        //   {/show/.test(modalStatus) && (
        //     <Icons.Close
        //       extraClasses={`absolute m-2 top-0 right-0 w-6 h-6 border border rounded-md self-end cursor-pointer`}
        //       stroke={`#000`}
        //       onClick={() => setModalStatus('hide')}
        //     />
        //   )}
        //   {/show/.test(modalStatus) && <Text tw={'bold'}>Оформить заказ</Text>}
        //   <div>
        //     <FeedBackForm onFulfilled={(a) => setModalStatus(a)} />
        //   </div>
        // </Modal>
      )}
    </>
  );
}
