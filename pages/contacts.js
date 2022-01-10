import React from 'react';
import Image from 'next/image';

import { Icons, FeedBack as FeedBackForm } from '../components/complicated';
import { Text } from '../components/lib';
import { app } from '../configs/app';
import backgroundImage from '../public/images/backgraund-description.jpg';

export default function Contacts({ lgView, input }) {
  return (
    <div className={`bg-slate-100`} style={{ minHeight: '540px' }}>

      {/* BODY */}
      <div className={`relative h-56 `}>
        <Image
          src={backgroundImage}
          alt={`backgroundImage`}
          width={200}
          height={150}
          layout='fill'
          objectFit='cover'
        />
        <Text className={`absolute text-center text-slate-100 text-5xl font-bold pt-20 inset-0`}>{input.title}</Text>
      </div>
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
              <div className={`flex h-6 mx-0.5`}>
                <Icons.Phone extraClasses={`w-6 h-6 border-b border-belplit text-belplit`} />
                <p className={`font-bold pl-2 border-b border-slate-300 w-full`}>
                  Телефон:
                </p>
              </div>
              <a href={`tel:${app.contacts.phone1}`} className={`mx-2`}>{app.contacts.phone1}</a>
              <a href={`tel:${app.contacts.phone2}`} className={`mx-2`}>{app.contacts.phone2}</a>
            </div>
            <div className={`w-1/2 sm:w-full my-1 flex flex-col`}>
              <div className={`flex h-6 mx-0.5`}>
                <Icons.Mail extraClasses={`w-6 h-6 border-b border-belplit text-belplit`} />
                <p className={`font-bold pl-2 border-b border-slate-300 w-full`}>
                  EMAIL:
                </p>
              </div>
              <Text mx={2}>{app.contacts.email}</Text>
            </div>
            <div className={`w-1/2 sm:w-full my-1 flex flex-col`}>
              <div className={`flex h-6 mx-0.5`}>
                <Icons.Location extraClasses={`w-6 h-6 pt-0.5 border-b border-belplit text-belplit`} />
                <p className={`font-bold pt-0.5 pl-2 border-b border-slate-300 w-full`}>
                  АДРЕС:
                </p>
              </div>
              <Text mx={2}>{app.contacts.address1.value}</Text>
            </div>
            <div className={`w-1/2 sm:w-full my-1 flex flex-col`}>
              <div className={`flex h-6 mx-0.5`}>
                <Icons.Clock extraClasses={`w-6 h-6 border-b border-belplit text-belplit`} />
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
