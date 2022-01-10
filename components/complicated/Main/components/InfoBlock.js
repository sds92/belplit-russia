// react
import React from 'react';
import Image from 'next/image';

// animation
import Fade from 'react-reveal/Fade';

// etc
import { Text } from '../../../lib';

export default function InfoBlock(props) {
  const {input: {text, imgs}, model } = props;
  return (
    <>
      {model === 0 && (
        <div
          className={`flex flex-col lg:flex-row rounded-md shadow-md overflow-hidden my-5 md:my-20 mx-4 bg-slate-200`}
        >
          <Fade ssrReveal left>
            <div
              className={`relative w-full lg:w-1/2 zero:h-44 lg:h-auto lg:max-h-user rounded-md order-last lg:order-first`}
            >
              <Image layout='fill' objectFit='cover' src={imgs[1][0]} alt={imgs[1][1]} />
            </div>
          </Fade>
          <div className={`w-full lg:w-1/2 rounded-md sm:p-4`}>
            <div
              className={
                ' font-light sm:bg-white sm:border sm:border-belplit md:border-0 sm:rounded-lg p-8 text-sm'
              }
            >
              <Text className={`font-bold text-center text-xl sm:text-3xl py-2`}>{text.ib0}</Text>
              <Text className={`text-justify`}>{text.ib1}</Text>
              <Text className={'font-bold pl-10'}>{text.ib2}</Text>
              <Text className={`text-justify`}>{text.ib3}</Text>
            </div>
          </div>
        </div>
      )}
      {model === 1 && (
        <div>
          <div className={`flex flex-col mx-4`}>
            <div className={`rounded-md sm:shadow-md sm:p-4 my-5 bg-slate-200`}>
              <div className={`rounded-md bg-white p-10 cursor-default`}>
                <Text className={`font-bold text-lg`}>{text.ib5}</Text>
                <Text className={`font-light text-md leading-tight ml-2`}>
                {text.ib6}
                </Text>
                <div className={`bg-slate-300`} style={{ height: '1px' }} />
                <Text className={`font-bold text-lg`}>{text.ib7}</Text>
                <Text className={`font-light text-md leading-tight ml-2`}>
                  {text.ib8}
                </Text>
                <div className={`bg-slate-300`} style={{ height: '1px' }} />
                <Text className={`font-bold text-lg`}>{text.ib9}</Text>
                <Text className={`font-light text-md leading-tight ml-2`}>
                  {text.ib10}
                </Text>
                <div className={`bg-slate-300`} style={{ height: '1px' }} />
                <Text className={`font-bold text-lg`}>{text.ib11}</Text>
                <Text className={`font-light text-md leading-tight ml-2`}>
                  {text.ib12}
                </Text>
                <div className={`bg-slate-300`} style={{ height: '1px' }} />
                <Text className={`font-bold text-lg`}>{text.ib13}</Text>
                <Text className={`font-light text-md leading-tight ml-2`}>
                  {text.ib14}
                </Text>
                <div className={`bg-slate-300`} style={{ height: '1px' }} />
                <Text className={`font-bold text-lg`}>{text.ib15}</Text>
                <Text className={`font-light text-md leading-tight ml-2`}>
                  {text.ib16}
                </Text>
                <div className={`bg-slate-300`} style={{ height: '1px' }} />
                <Text className={`font-bold text-lg`}>{text.ib17}</Text>
                <Text className={`font-light text-md leading-tight ml-2`}>
                  {text.ib18}
                </Text>
                <div className={`bg-slate-300`} style={{ height: '1px' }} />
                <Text className={`font-bold text-lg`}>{text.ib19}</Text>
                <Text className={`font-light text-md leading-tight ml-2`}>
                  {text.ib20}
                </Text>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
