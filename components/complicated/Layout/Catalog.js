import React from 'react';
import { ProductComponent, Modal, ModalItems, FeedBack } from '../';
import { Text } from '../../lib';

export default function Catalog({ data, products }) {
  const { title } = data;
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState({
    status: 'orderonopen',
    header: ['Отправить запрос'],
  });
  return (
    <div className={`pt-20`}>
      <div className={`bg-belplit_2 py-4`}>
        
          <Text className={`text-5xl pl-1.5 font-bold text-zinc-800 max-w-7xl text-left mx-auto`}>
            {title}
          </Text>
        
      </div>
      <div className={`max-w-7xl mx-auto pt-20`}>
        <div className={`border-belplit rounded-lg`}>
          <div className={`pb-20 flex flex-wrap items-center justify-center mx-auto`}>
            {products.map((product, index) => (
              <div
                key={`P${index}`}
                className={`zero:w-full zero:mx-10 sm:mx-0 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 transition-all`}
              >
                <ProductComponent.CardSM product={product} />
              </div>
            ))}
          </div>
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
        body={<FeedBack onFulfilled={(a) => setModalData({ status: a, header: modalData.header })} />}
      />
    </div>
  );
}
