// react
import React from 'react';

// etc
import { ImgGrid, HeadBlock, InfoBlock, Devider } from './components';
import { Text } from '../../lib';

export default function Main(props) {
  return (
    <div className={`flex flex-col overflow-hidden bg-slate-100`}>
      <div className={` pt-20 mx-auto`}>
        {/* <Text>{props.content.text.ib1}</Text> */}
      </div>
      <HeadBlock input={props.content} />
      <InfoBlock model={0} input={props.content} />
      <Devider input={{ text: props.content.text.d0, link: props.content.links[0] }} />
      <ImgGrid input={props.content} />
      <Devider input={{ text: props.content.text.d1 }} />
      <InfoBlock model={1} input={props.content} />
    </div>
  );
}
