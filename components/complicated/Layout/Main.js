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
      <div id={`calc`} className={`w-full py-4 mt-10`}>
        <div
          className={`mx-auto max-w-7xl text-center text-6xl text-zinc-800 font-bold border-b-8 border-belplit_2`}
        >
          {'Калькулятор'}
        </div>
      </div>
      <div className={`w-full `}>
        <div className={`mx-auto max-w-7xl `}>
          <Calculator products={props.products} />
        </div>
      </div>
      {/* <InfoSwitcher data={data} w={w} /> */}
      <div id={'contacts'}>
        <Text
          className={`font-bold text-5xl text-center text-white mt-20 zero:mb-2 sm:mb-4 md:mb-10 bg-zinc-700 py-6`}
        >
          {'Контакты'}
        </Text>
        <Contacts contactsHidden subTitle={`Свяжитесь с нами`} {...props} />
      </div>
    </div>
  );
}
