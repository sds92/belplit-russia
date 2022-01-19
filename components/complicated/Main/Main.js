// react
import React from 'react';

// etc
import { ImgGrid, HeadBlock, InfoBlock, Devider, InfoSwitcher } from './components';
import { Text } from '../../lib';
import { FeedBack } from '..';

export default function Main(props) {
  return (
    <div className={`flex flex-col overflow-hidden bg-white mb-20`}>
      <div className={` pt-20 mx-auto`}>{/* <Text>{props.content.text.ib1}</Text> */}</div>
        <HeadBlock input={props.content} />
        <InfoBlock model={0} input={props.content} />
        {/* <Devider/> */}
        <Devider input={{ text: props.content.text.ib4, link: props.content.links[0] }} />
      <div className={`flex flex-col w-full mx-auto gap-20`}>
        {/* <InfoSwitcher input={props.content} /> */}
        <ImgGrid input={props.content} title={props.content.text.d0} link={props.content.links[0]} />
        <Text className={`font-bold text-5xl text-center text-zinc-800`}>{'Свяжитесь с нами'}</Text>
        <FeedBack/>
      </div>
    </div>
  );
}
