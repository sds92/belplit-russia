import React from 'react';
import Image from 'next/image';
// etc
import { Icons } from '../';
import { app } from '../../../configs/app';

export default function Footer(lgView) {
  return (
    <footer className={`pt-2 ${lgView ? `bg-zinc-800` : ``}`}>
      <div className={`flex flex-col w-full sm:flex-row`}>
        {/* GOOGLE MAPS */}
        <div className={`p-2 w-full flex sm:w-1/3 rounded-md overflow-hidden shadow-md sm:pl-2 sm:pb-2`}>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.6768022748242!2d37.26887351592759!3d55.67722018053323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b550444d104d95%3A0x2e41f78026092c4!2z0JzQvtC70L7QtNGR0LbQvdCw0Y8g0YPQuy4sIDQ2LCDQntC00LjQvdGG0L7QstC-LCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LsuLCAxNDMwMDc!5e0!3m2!1sru!2sru!4v1605787923881!5m2!1sru!2sru'
            width='100%'
            height='100%'
            aria-hidden='false'
            tabIndex='0'
            style={{ borderRadius: '5px' }}
          ></iframe>
        </div>

        {/* CONTACTS */}
        <div className={`flex flex-col sm:w-2/3`}>
          <div className={`flex w-full flex-col sm:justify-between md:justify-end md:flex-row p-2`}>
            <div className={`p-4`}>
              <p className={`text-slate-100 font-bold`}>{app.contacts.title}:</p>

              <div className={`bg-slate-100`} style={{ height: '1px' }} />
              <div className={`flex`}>
                <Icons.Location extraClasses={`w-6 text-belplit`} />
                <div>
                  <p className={`text-slate-100 text-sm`}>{app.contacts.address1.title}</p>
                  <p className={`text-slate-100 text-xs`}>{app.contacts.address1.value}</p>
                </div>
              </div>

              <br />
              <div className={`flex`}>
                <Icons.Location extraClasses={`w-6 text-belplit`} />
                <div>
                  <p className={`text-slate-100 text-sm`}>{app.contacts.address2.title}</p>
                  <p className={`text-slate-100 text-xs`}>{app.contacts.address2.value}</p>
                </div>
              </div>

              <br />
              <div className={`flex`}>
                <Icons.Location extraClasses={`w-6 text-belplit`} />
                <div>
                  <p className={`text-slate-100 text-sm`}>{app.contacts.address3.title}</p>
                  <p className={`text-slate-100 text-xs`}>{app.contacts.address3.value}</p>
                </div>
              </div>

              <div className={`bg-slate-100 my-1`} style={{ height: '1px' }} />
                <div className={`flex my-1`}>
                  <Icons.Phone extraClasses={`w-6 text-belplit`} />
                  <a href='tel:88005337881' className={`text-slate-100`}>{app.contacts.phone1}</a>
                </div>
                <div className={`flex my-1`}>
                  <Icons.Phone extraClasses={`w-6 text-belplit`} />
                  <a href='tel:88005337881' className={`text-slate-100`}>{app.contacts.phone2}</a>
                </div>
                <div className={`flex my-1`}>
                  <Icons.Mail extraClasses={`w-6 text-belplit`} />
                  <a href='mailto:belplit-russia@mail.ru' className={`text-slate-100`}>{app.contacts.email}</a>
                </div>
              
            </div>

            <div className={`p-4 flex flex-col`}>
              <p className={`text-slate-100 font-bold`}>{app.workingHoars.title}:</p>
              <div className={`bg-slate-100`} style={{ height: '1px' }} />
              <div className={`flex`}>
                <Icons.Clock extraClasses={`w-6 text-belplit`} />
                <p className={`my-1 pt-0.5 pl-1 text-slate-100 text-sm`}>{app.workingHoars.value}</p>
              </div>
            </div>
          </div>
          <div className={`flex justify-end`}>
            <div className={'relative y-metrika mr-6'}>
              <a
                href={'https://metrika.yandex.ru/stat/?id=69799987&amp;from=informer'}
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src={`https://metrika-informer.com/informer/69799987/3_1_FFFFFFFF_EFEFEFFF_0_pageviews`}
                  alt='Яндекс.Метрика'
                  title='Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)'
                  data-cid='69799987'
                  data-lang='ru'
                  layout='fill'
                  objectFit='contain'
                  objectPosition={''}
                />
              </a>
            </div>
          </div>
          <p className={`text-slate-100 right-0 bottom-0 text-right text-xs mt-4 pr-6 pb-4`}>
            © 2021 Сайт создан с помощью{' '}
            <a href='https://roboweb.site/'>
              <strong>RoboWeb</strong>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
