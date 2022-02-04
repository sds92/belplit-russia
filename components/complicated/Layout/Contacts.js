import React from 'react';
import { Text } from '../../lib';
import { Contacts } from '..';

export default function ContactsLayout(props) {
  return (
    <div className={props.lgView ? `pt-20` : `pt-10`}>
      {/* BODY */}
      <div className={`bg-belplit_2 ${props.lgView ? `py-4` : `py-1 fixed z-40 w-full`}`}>
        <Text
          className={` pl-1.5 font-bold text-zinc-800 max-w-7xl ${
            props.lgView ? `text-5xl` : `text-3xl`
          } text-left mx-auto`}
        >
          {props.data.title}
        </Text>
      </div>
      <div className={`flex flex-col w-full py-20 ${props.lgView ? `mt-20` : `mt-0`}`}>
        <Contacts subTitle={`Свяжитесь с нами`} />
      </div>
    </div>
  );
}
