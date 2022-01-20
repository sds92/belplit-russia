// react
import React from 'react';

// etc
import { ImgGrid, HeadBlock, InfoBlock, Devider, InfoSwitcher, Contacts } from './components';
import { Text } from '../../lib';

export default function Main(props) {
  return (
    <div className={`flex flex-col overflow-hidden bg-white mb-20`}>
      
      <HeadBlock input={props.content} />
      <InfoBlock model={0} input={props.content} />
      <Devider input={{ text: props.content.text.d0, link: props.content.links[0] }} />

      <ImgGrid input={props.content} title={props.content.text.d0} links={props.content.links} />
      <InfoSwitcher input={props.content} view={{ lgView: props.lgView, mdView: props.mdView }} />
      <Text className={`font-bold text-5xl text-center text-zinc-800 my-20`}>{'Свяжитесь с нами'}</Text>
      <Contacts {...props}/>
    </div>
  );
}
