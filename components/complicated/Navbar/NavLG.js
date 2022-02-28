// react
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// etc
import Logo from '../Svg/Logo';
import NavLGItem from './NavLGItem';
import { Button } from '../../lib';
import { Social, Icons, Modal, ModalItems, FeedBack } from '..';
import { menu } from '../../../configs/menu';
import ContactsNav from './ContactsNav';

export default function NavLG(props) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState({
    status: 'orderonopen',
    header: ['Отправить запрос'],
  });
  const router = useRouter();
  React.useEffect(() => {
    if (modalData.status === 'success') {
      setTimeout(() => {
        setModalOpen(false);
      }, 3000);
    }
    return;
  }, [modalData]);

  function openModal() {
    if (router.asPath.includes('catalog') || router.asPath.includes('info')) {
      setModalData({ status: 'orderonopen', header: ['Отправить запрос'] });
      setModalOpen(true);
    }
    return;
  }
  return (
    <div className={`flex justify-between h-full py-1`}>
      <Link href={`/main`} passHref>
        <div className={`flex transition-all cursor-pointer items-center relative`}>
          <Logo extraClasses={`${props.lgView ? 'h-10' : 'h-8'} transition-all`} />
         
        </div>
      </Link>
      <div
        className={`flex items-center justify-center border-slate-300 border-y-0 my-2 transition-all ${
          props.scrolled ? `border-opacity-0 ` : `duration-1000 border-opacity-100`
        }`}
      >
        {menu.map((item, index) => item.show && <NavLGItem item={item} key={`NAVLG${index}`} i={index} />)}
      </div>
      <ContactsNav {...props}/>
      {/* <div className={`flex items-center gap-2`}>
        <div className={`flex items-center font-light gap-2`}>
          <Social mdView={props.mdView} />
        </div>
        <div className={`bg-slate-500 mx-2 h-8`} style={{ width: 1 }}></div>
        <Button
          href={'#feedback'}
          onClick={openModal}
          className={`hover:text-belplit text-center uppercase font-bold transition-all`}
        >
          Заказать звонок
        </Button>
      </div> */}
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
