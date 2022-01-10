// react
import React from 'react';

// etc
import { ImgGrid, HeadBlock, InfoBlock, Devider } from './components';

export default function Main(props) {
  return (
    <div className={`flex flex-col overflow-hidden bg-slate-100`}>
      <HeadBlock input={props.content} />
      <InfoBlock model={0} input={props.content} />
      <Devider input={{text: props.content.text.d0, link: props.content.links[0]}} />
      <ImgGrid input={props.content} />
      <Devider input={{text: props.content.text.d1}} />
      <InfoBlock model={1} input={props.content}/>
    </div>
  );
}
