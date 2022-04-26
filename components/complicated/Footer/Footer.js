import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';

// etc
import { AppContext } from '../Context/AppContext';
import { menu } from '../../../configs/menu';
import { Icons } from '../';
import { Logo } from '../';
import { Text } from 'components/lib';

export default function Footer(props) {
  const { w } = props;
  const router = useRouter();
  const classes = {
    contactsTitle: `cursor-default pl-2 border-b border-slate-300 w-full font-bold`,
    contactsValue: `mx-2 font-light zero:text-sm sm:text-base`,
  };
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  return (
    <AppContext.Consumer>
      {(app) => {
        return (
          <>
            <footer ref={ref} className={`bg-white `}>
              {router.asPath !== '/catalog' && inView && (
                <div className={`h-96 cursor-default`}>
                  <iframe
                    src={'https://api-maps.yandex.ru/frame/v1/-/CCUBEFtKWA'}
                    width='100%'
                    height='100%'
                    frameBorder='1'
                    // allowFullScreen='true'
                  ></iframe>
                </div>
              )}
              <div className={`flex py-4 flex-col md:flex-row justify-between items-center h-full`}>
                <div className={`flex py-2`}>
                  <div className={`flex justify-between`}>
                    <div className={`flex flex-col justify-center px-2 border-r mr-1`}>
                      {menu.map((item, index) => {
                        return (
                          <div className={``} key={`FOOTERMENUITEM${index}`}>
                            {item.items.map((item_i, index_i) => {
                              return (
                                <div
                                  className={`cursor-pointer hover:text-belplit_2`}
                                  key={`FOOTERMENUITEMI${index_i}`}
                                >
                                  <Link href={`/${item.name}/${item_i.name}`}>{item_i.title}</Link>
                                </div>
                              );
                            })}
                            <div className={`cursor-pointer hover:text-belplit_2`}>
                              {item.show && item.items.length === 0 && (
                                <Link href={`/${item.name}`}>{item.title}</Link>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {/* CONTACTS */}
                  <div className={`flex justify-start flex-wrap w-full`}>
                    <div
                      className={`flex ${
                        w > 420 ? `flex-row` : `flex-col`
                      } justify-between items-stretch w-full`}
                    >
                      <div className={`w-full my-1 flex flex-col`}>
                        <div className={`flex h-6 mx-0.5`}>
                          <Icons.Phone extraClasses={`w-6 h-6 border-b border-belplit_2 text-belplit_2`} />
                          <p className={classes.contactsTitle}>Телефон:</p>
                        </div>
                        {app.contacts.phones.map((item, index) => (
                          <div className={`hover:text-belplit`} key={`FOOTERPHONES${index}`}>
                            <a href={`tel:${item}`} className={classes.contactsValue}>
                              {item}
                            </a>
                          </div>
                        ))}
                      </div>
                      <div className={`w-full my-1 flex flex-col`}>
                        <div className={`flex h-6 mx-0.5`}>
                          <Icons.Mail extraClasses={`w-6 h-6 border-b border-belplit_2 text-belplit_2`} />
                          <p className={classes.contactsTitle}>EMAIL:</p>
                        </div>
                        <Text className={classes.contactsValue}>{app.contacts.emails[0]}</Text>
                      </div>
                    </div>
                    <div
                      className={`flex ${
                        w > 420 ? `flex-row` : `flex-col`
                      } justify-between items-stretch w-full`}
                    >
                      <div className={`w-full my-1 flex flex-col`}>
                        <div className={`flex h-6 mx-0.5`}>
                          <Icons.Location
                            extraClasses={`w-6 h-6 pt-0.5 border-b border-belplit_2 text-belplit_2`}
                          />
                          <p className={classes.contactsTitle}>АДРЕС:</p>
                        </div>
                        <Text className={classes.contactsValue}>{app.contacts.addresses[0].value}</Text>
                      </div>
                      <div className={`w-full my-1 flex flex-col`}>
                        <div className={`flex h-6 mx-0.5`}>
                          <Icons.Clock extraClasses={`w-6 h-6 border-b border-belplit_2 text-belplit_2`} />
                          <p className={classes.contactsTitle}>ВРЕМЯ РАБОТЫ:</p>
                        </div>
                        <Text className={classes.contactsValue}>{app.workingHoars.value}</Text>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`w-full flex flex-col justify-end items-end text-zinc-800 cursor-default`}>
                  <div className={`w-full p-2`}>
                    <Link href='/main' passHref>
                      <Logo extraClasses={`w-full cursor-pointer`} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className={`py-4 flex items-center bg-zinc-800 text-zinc-100 justify-center gap-2`}>
                <p className={`text-center`}>
                  2022. Сайт создан с помощью{' '}
                  <a className={`font-bold`} href='https://roboweb.team/'>
                    RoboWeb
                  </a>
                </p>
                <a href='https://roboweb.team/'>
                  <Icons.Roboweb fill={`#ffffff`} extraClasses={`w-10 h-10 hover:scale-105 transition-all`} />
                </a>
              </div>
            </footer>
          </>
        );
      }}
    </AppContext.Consumer>
  );
}
