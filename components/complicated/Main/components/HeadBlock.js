import React from 'react';
import { Text } from '../../../lib';

export default function HeadBlock(props) {
  const { text, imgs } = props.input;
  return (
    <div className={`relative w-full h-full overflow-hidden`}>
      <div className={`absolute`}>
        <Text
          className={`font-bold 
            text-3xl sm:text-6xl md:text-8xl
            ml-10 mt-10 sm:ml-16 sm:mt-16 md:ml-20 md:mt-20`}
          style={{ color: '#38a000' }}
        >
          {text.hb0}
        </Text>
        <Text
          className={`
            leading-none sm:leading-none md:leading-none lg:leading-none  
            text-sm sm:text-xl md:text-3xl
            text-slate-100 
            font-bold 
            ml-16 sm:ml-20 md:ml-28 
            max-w-md
            `}
        >
          {text.hb1}
        </Text>
        <Text
          className={`
            leading-none sm:leading-none md:leading-none 
            text-xs sm:text-md md:text-base lg:text-lg 
            text-slate-100 
            font-light md:font-normal
            ml-16 sm:ml-20 md:ml-28 
            max-w-md
            `}
        >
          {text.hb2}
        </Text>
      </div>
      <img style={{ overflow: 'hidden', width: '100%' }} src={`${imgs[0][0]}`} alt={`${imgs[0][1]}`} />
    </div>
  );
}
