import React from 'react';
import Head from 'next/head';

import { Icons, FeedBack as FeedBackForm } from '../components/complicated';
import { Text } from '../components/lib';
import { app } from '../configs/app';
import meta from '../data/meta.json';

export default function Contacts({ lgView }) {
  const head = meta.find((item) => item.pageName === 'contacts').head;
  return (
    <div className={`bg-slate-100`} style={{ minHeight: '540px' }}>
      <Head>
        <title>{head.title}</title>
        {head.meta.map((item, index) => (
          <meta name={item.name} content={item.content} key={`METAMAIN${index}`} />
        ))}
      </Head>

      {/* BODY */}
      <Text ta={'center'} ts={'3xl'} tw={'bold'} py={10}>
        {app.contacts.title}
      </Text>
      <div className={`flex flex-col w-full`}>
        <div className={`w-full flex flex-col sm:flex-row sm:gap-2 my-2 `}>
          {/* FORM */}
          <div className={`w-full flex flex-col ml-auto sm:w-2/3 md:w-7/12 max-w-xl`}>
            <p className={`font-bold max-w-4xl my-2 mx-auto text-xl pt-2`}>{app.contacts.meta.field1}</p>
            <FeedBackForm lgView={lgView} />
          </div>

          {/* CONTACTS */}
          <div className={`flex w-full flex-wrap sm:max-w-xl sm:flex-col sm:w-1/3 md:w-5/12 p-2 mr-auto`}>
            <div className={`sm:w-full w-1/2 my-1 flex flex-col`}>
              <div className={`flex`}>
                <Icons.Phone extraClasses={`w-6 border-b border-belplit text-belplit`} />
                <p className={`font-bold pl-2 border-b border-slate-300 w-full`}>
                  Телефон:
                </p>
              </div>
              <Text mx={2}>{app.contacts.phone1}</Text>
              <Text mx={2}>{app.contacts.phone2}</Text>
            </div>
            <div className={`w-1/2 sm:w-full my-1 flex flex-col`}>
              <div className={`flex`}>
                <Icons.Mail extraClasses={`w-6 border-b border-belplit text-belplit`} />
                <p className={`font-bold pl-2 border-b border-slate-300 w-full`}>
                  EMAIL:
                </p>
              </div>
              <Text mx={2}>{app.contacts.email}</Text>
            </div>
            <div className={`w-1/2 sm:w-full my-1 flex flex-col`}>
              <div className={`flex`}>
                <Icons.Location extraClasses={`w-6 pt-0.5 border-b border-belplit text-belplit`} />
                <p className={`font-bold pt-0.5 pl-2 border-b border-slate-300 w-full`}>
                  АДРЕС:
                </p>
              </div>
              <Text mx={2}>{app.contacts.address1.value}</Text>
            </div>
            <div className={`w-1/2 sm:w-full my-1 flex flex-col`}>
              <div className={`flex`}>
                <Icons.Clock extraClasses={`w-6 border-b border-belplit text-belplit`} />
                <p className={`pl-2 pt-0.5 font-bold border-b border-slate-300 w-full`}>
                  ВРЕМЯ РАБОТЫ:
                </p>
              </div>
              <Text mx={2}>{app.workingHoars.value}</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
