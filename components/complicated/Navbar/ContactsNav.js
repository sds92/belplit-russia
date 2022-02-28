import React from 'react';
import { Social, Icons, Modal, ModalItems, FeedBack } from '..';
import { useRouter } from 'next/router';
import { AppContext } from '../Context/AppContext';

export default function ContactsNav(props) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState({
    status: 'orderonopen',
    header: ['Отправить запрос'],
  });
  const router = useRouter();
  const { sm, w } = props;
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
    <AppContext.Consumer>
      {(app) => {
        return (
          <div className={`flex`}>
            <div
              className={`flex ${
                sm ? 'flex-row items-center' : `flex-col items-end ${w > 1024 ? 'border-r pr-2' : ''}`
              } justify-center h-full gap-1 mx-1`}
            >
              <div className={`flex  justify-center items-center`}>
                <a className={`flex flex-col transition-all`} href={`tel:${app.contacts.phones[1]}`}>
                  {sm && (
                    <Icons.Phone
                      extraClasses={`w-7 h-7 mt-1 -mr-1 text-belplit hover:scale-110 active:scale-110 cursor-pointer`}
                    />
                  )}
                  {!sm &&
                    app.contacts.phones.map((item, index) => (
                      <div className={`whitespace-nowrap hover:text-belplit px-0.5`} key={`PHONE${index}`}>
                        {item}
                      </div>
                    ))}
                </a>
              </div>
              {app.contacts.socials &&
                app.contacts.socials.map((item, index) => {
                  const Icon = Icons[item[0]];
                  return (
                    <React.Fragment key={`SOCIAL${index}`}>
                      <div className={`cursor-pointer`}>
                        <a
                          className={`font-light flex items-center justify-center`}
                          target='_blank'
                          href={`${item[1]}`}
                          rel='noopener noreferrer'
                        >
                          {!sm && (
                            <div className={`whitespace-nowrap flex hover:text-belplit`}>
                              Напишите в&nbsp;
                              <div
                                className={`font-bold hover:scale-105 ${
                                  item[0] === 'Whatsapp' ? 'text-belplit' : 'text-blue-900'
                                }`}
                              >
                                {item[0] === 'Whatsapp' ? 'WhatsApp' : item[0]}
                              </div>
                            </div>
                          )}
                          &nbsp;&nbsp;
                          <Icon extraClasses={`w-6 h-6 hover:scale-110 active:scale-110`} />
                        </a>
                      </div>
                    </React.Fragment>
                  );
                })}
            </div>
            {w > 1024 &&
              (/catalog|info/.test(router.asPath) ? (
                <div
                  className={`ml-2 uppercase text-center flex items-center font-bold cursor-pointer hover:text-belplit`}
                  onClick={openModal}
                >
                  Заказать звонок
                </div>
              ) : (
                <a
                  href={`#feedback`}
                  className={`ml-2 uppercase text-center flex items-center font-bold cursor-pointer hover:text-belplit`}
                >
                  Заказать звонок
                </a>
              ))}
            <Modal
              setOpen={modalOpen}
              setClose={() => setModalOpen(false)}
              header={
                <ModalItems.Header
                  data={{
                    status: modalData.status,
                    header: modalData.header,
                    setClose: () => setModalOpen(false),
                  }}
                />
              }
              body={<FeedBack onFulfilled={(a) => setModalData({ status: a, header: modalData.header })} />}
            />
          </div>
        );
      }}
    </AppContext.Consumer>
  );
}
