import React from 'react';
import { Text } from '../../lib';
import { Icons, FeedBack, Contacts } from '..';
import { AppContext } from '../Context/AppContext';

export default function ContactsLayout(props) {
  return (
    <div className={`pt-20`}>
      {/* BODY */}
      <div className={`bg-belplit_2`}>
        <Text className={`text-5xl pl-1.5 uppercase font-bold text-zinc-800 max-w-7xl text-left mx-auto`}>
          {props.data.title}
        </Text>
        <Text className={`text-4xl pl-2 font-bold text-zinc-100 pb-2 max-w-7xl text-left mx-auto`}>
          Белтермо
        </Text>
      </div>
      <div className={`flex flex-col w-full py-20`}>
        <Contacts />
      </div>
    </div>
  );
}
