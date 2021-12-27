import React from 'react';

import Head from 'next/head';
import { FeedBack as FeedBackForm } from '../components/complicated';
import { Text } from '../components/lib';
import { app } from '../configs/app';
import meta from '../data/meta.json';

export default function Contacts({ lgView }) {
  const head = meta.find((item) => item.pageName === 'contacts').head;
  return (
    <div>
      <Head>
        <title>{head.title}</title>
        {head.meta.map((item, index) => (
          <meta name={item.name} content={item.content} key={`METAMAIN${index}`} />
        ))}
      </Head>
      <Text ta={'center'} ts={'3xl'} tw={'bold'} extraClasses={'mb-10 mt-4'}>
        {app.contacts.title}
      </Text>
      <div className={`flex flex-col w-full`}>
        <div className={`w-full flex flex-col sm:flex-row my-2 `}>
          <div className={`w-full flex flex-col ml-auto sm:w-2/3 md:w-7/12 max-w-xl`}>
            <p className={`font-bold max-w-4xl mx-auto text-xl pt-2`}>{app.contacts.meta.field1}</p>
            <FeedBackForm lgView={lgView} />
          </div>
          <div className={`flex w-full flex-wrap sm:max-w-xl sm:flex-col sm:w-1/3 md:w-5/12 p-2 mr-auto`}>
            <div className={`sm:w-full w-1/2 my-1 flex flex-col`}>
              <Text mx={2} tw={'bold'} extraClasses={`border-b border-belplit`}>
                Телефон:
              </Text>
              <Text mx={2}>{app.contacts.phone1}</Text>
              <Text mx={2}>{app.contacts.phone2}</Text>
            </div>
            <div className={`w-1/2 sm:w-full my-1 flex flex-col`}>
              <Text mx={2} tw={'bold'} extraClasses={`border-b border-belplit`}>
                EMAIL:
              </Text>
              <Text mx={2}>{app.contacts.email}</Text>
            </div>
            <div className={`w-1/2 sm:w-full my-1 flex flex-col`}>
              <Text mx={2} tw={'bold'} extraClasses={`border-b border-belplit`}>
                АДРЕС:
              </Text>
              <Text mx={2}>{app.contacts.address1.value}</Text>
            </div>
            <div className={`w-1/2 sm:w-full my-1 flex flex-col`}>
              <Text mx={2} tw={'bold'} extraClasses={`border-b border-belplit`}>
                ВРЕМЯ РАБОТЫ:
              </Text>
              <Text mx={2}>{app.workingHoars.value}</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
