import React from 'react';
import Link from 'next/link';
import { Text, Button } from '../../../lib';

export default function HeadBlock(props) {
  const { text, imgs } = props.input;
  return (
    <div
      className={`relative w-full overflow-hidden`}
      style={{
        background: `no-repeat url(${imgs[0][0]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'calc(100vh)',
      }}
    >
      <div className={`absolute inset-0`}>
        <div
          className={`relative`}
          style={{
            top: '50%',
            transform: 'perspective(1px) translateY(-50%)',
          }}
        >
          <Text
            className={`w-full text-center font-bold text-3xl sm:text-6xl md:text-8xl        `}
            style={{ color: '#38a000' }}
          >
            {text.hb0}
          </Text>
          {/* </div> */}
          <Text
            className={`
            w-full text-center 
            leading-none sm:leading-none md:leading-none lg:leading-none  
            text-sm sm:text-xl md:text-3xl
            text-slate-100 
            font-bold 
            `}
          >
            {text.hb1}
          </Text>
          <Text
            className={`
            w-full text-center
            leading-none sm:leading-none md:leading-none 
            text-xs sm:text-md md:text-base lg:text-lg 
            text-slate-100 
            font-light md:font-normal
            `}
          >
            {text.hb2}
          </Text>
          <div
            className={`
            w-full mx-auto text-center
          `}
          >
            <Link href={`/catalog`} passHref>
              <Button
                className={`
                zero:w-60 md:w-96
              mx-auto text-slate-100 border px-6 my-4 
              rounded-md max-w-md
              hover:text-belplit hover:border-belplit hover:scale-105
              transition-all
              `}
              >
                {'Каталог'}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
