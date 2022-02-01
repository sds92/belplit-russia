import React from 'react';
import { Text } from '../../lib';
import { Contacts } from '..';

export default function ContactsLayout(props) {
  return (
    <div className={`pt-20`}>
      {/* BODY */}
      <div className={`bg-belplit_2 py-4`}>
        <Text className={`text-5xl pl-1.5 uppercase font-bold text-zinc-800 max-w-7xl text-left mx-auto`}>
          {props.data.title}
        </Text>
      </div>
      <div className={`flex flex-col w-full py-20`}>
        <Contacts subTitle={`Свяжитесь с нами`}/>
      </div>
    </div>
  );
}
