import React from 'react';
import { Text } from '.';
import styles from './styles.module.scss';

export default function Devider({
  data = { title: '', subTitle: '' },
  color = 'current',
  pt = 20,
  pb,
  children,
  ts = '5xl',
}) {
  return (
    <div className={'bg-' + color + ' pt-' + pt + ' ' + styles.devider + ' pb-' + pb}>
      {data.title && (
        <Text className={`text-${ts} pl-1.5 uppercase font-bold text-zinc-800 max-w-7xl text-left mx-auto`}>
          {data.title}
        </Text>
      )}
      {data.subTitle && (
        <Text className={`text-4xl pl-2 font-bold text-zinc-100 pb-2 max-w-7xl text-left mx-auto`}>
          {data.subTitle}
        </Text>
      )}
      {children && children}
    </div>
  );
}
