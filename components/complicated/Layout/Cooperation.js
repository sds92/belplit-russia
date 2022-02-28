import React from 'react';
import { Text } from '../../lib';
import { FeedBack, Decorators } from '..';
import styles from './styles.module.scss';

export default function Cooperation(props) {
  return (
    <div className={props.lgView ? `pt-20` : `pt-10`}>
      {/* BODY */}
      <div className={`bg-belplit_2 ${props.lgView ? `py-4` : `py-1 fixed z-40 w-full shadow-md`}`}>
        <Text
          className={` pl-1.5 font-bold text-zinc-800 max-w-7xl ${
            props.lgView ? `text-5xl` : `text-3xl`
          } text-left mx-auto`}
        >
          {props.data.title}
        </Text>
      </div>
      <Text className={`text-center py-2 mx-auto max-w-xl my-20`}>{props.data.content.text.ib0}</Text>
      <div className={`max-w-7xl mx-auto my-20`}>
        <FeedBack />
      </div>
    </div>
  );
}
