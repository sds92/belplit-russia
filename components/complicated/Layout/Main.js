// react
import React from 'react';

// etc
import { Contacts, Calculator } from '../';
import { ImgGrid, HeadBlock, InfoBlock, Devider, InfoSwitcher } from './Blocks';
import { Text } from '../../lib';

export default function Main({ data, w, ...props }) {
  return (
    <div className={`flex flex-col overflow-hidden bg-white mb-20`}>
      <HeadBlock data={data} />
      <InfoBlock model={0} data={data} />
      <Devider data={{ text: data.content.text.d0, link: data.content.links[0] }} />

      <ImgGrid data={data} />
      <div className={`w-full py-4`}>
        <div className={`mx-auto max-w-7xl text-6xl text-zinc-800 font-bold`}>{'Калькулятор'}</div>
      </div>
      <div className={`w-full bg-belplit_2`}>
        <div className={`mx-auto max-w-7xl `}>
          <Calculator products={props.products} />
        </div>
      </div>
      <InfoSwitcher data={data} w={w} />
      <Text className={`font-bold text-5xl text-center text-zinc-800 my-20`}>{'Свяжитесь с нами'}</Text>
      <Contacts {...props} />
    </div>
  );
}
