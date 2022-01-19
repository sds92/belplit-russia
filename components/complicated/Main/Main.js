// react
import React from 'react';

// etc
import { ImgGrid, HeadBlock, InfoBlock, Devider, InfoSwitcher } from './components';
import { Text } from '../../lib';
import { FeedBack } from '..';

export default function Main(props) {
  console.log("🚀 ~ file: Main.js ~ line 10 ~ Main ~ props", props)
  return (
    <div className={`flex flex-col overflow-hidden bg-white mb-20`}>
      
      <HeadBlock input={props.content} />
      <InfoBlock model={0} input={props.content} />
      <Devider input={{ text: props.content.text.d0, link: props.content.links[0] }} />

      <ImgGrid input={props.content} title={props.content.text.d0} link={props.content.links[0]} />
      <InfoSwitcher input={props.content} view={{ lgView: props.lgView, mdView: props.mdView }} />
      <Text className={`font-bold text-5xl text-center text-zinc-800 my-20`}>{'Свяжитесь с нами'}</Text>
      <div className={`w-1/2 mx-auto`}>
        <FeedBack />
      </div>
    </div>
  );
}
