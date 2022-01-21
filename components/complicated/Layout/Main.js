// react
import React from 'react';

// etc
import { Contacts } from '../';
import { ImgGrid, HeadBlock, InfoBlock, Devider, InfoSwitcher } from './Blocks';
import { Text } from '../../lib';

export default function Main({ data, w, ...props}) {
  return (
    <div className={`flex flex-col overflow-hidden bg-white mb-20`}>
      <HeadBlock data={data} />
      <InfoBlock model={0} data={data} />
      <Devider data={{ text: data.content.text.d0, link: data.content.links[0] }} />

      <ImgGrid data={data} />
      <InfoSwitcher data={data} w={w} />
      <Text className={`font-bold text-5xl text-center text-zinc-800 my-20`}>{'Свяжитесь с нами'}</Text>
      <Contacts {...props} />
    </div>
  );
}
