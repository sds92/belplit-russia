import React from 'react';
import { Text } from '../../lib';
import { FeedBack, Decorators } from '..';
import styles from './styles.module.scss';

export default function Cooperation(props) {
  return (
    <div className={` pt-20`}>
       <div className={`bg-belplit_2 py-4`}>
        <Text className={`text-5xl pl-1.5 uppercase font-bold text-zinc-800 max-w-7xl text-left mx-auto`}>
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
