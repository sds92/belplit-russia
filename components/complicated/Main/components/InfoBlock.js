// react
import React from 'react';
import Image from 'next/image';

// animation
import Fade from 'react-reveal/Fade';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// etc
import { Text } from '../../../lib';
import { animations } from '../../../../styles/animations';

export default function InfoBlock(props) {
  const {
    input: { text, imgs },
    model,
  } = props;

  return (
    <>
      {model === 0 && (
        <div
          className={`
          relative 
          w-full mt-40 max-w-7xl
          flex flex-col lg:flex-row 
          bg-white rounded-md 
          `}
          style={{ height: 'calc(100vh - 82px)' }}
        >
          <div className={`my-auto`}>
            <div className={`max-w-7xl overflow-hidden rounded-md`}>
              <img className={`transition-all main-page-img`} src={imgs[1][0]} alt={imgs[1][1]} />
            </div>
            <div className={`absolute w-96 rounded-md right-0 -top-20`}>
              <div className={'font-light text-zinc-800 sm:rounded-lg text-lg leading-5 tracking-normal' }>
                <Text className={`font-bold text-left text-7xl -ml-1 py-2`}>{text.ib0}</Text>
                <Text className={`text-justify`}>{text.ib1}</Text>
                <Text className={'font-bold pl-10 leading-6 py-1'}>{text.ib2}</Text>
                <Text className={`text-justify`}>{text.ib3}</Text>
              </div>
            </div>
          </div>
        </div>
      )}
      {model === 1 && (
        <div className={`flex flex-col mx-4 w-96`}>
          <div className={`rounded-md sm:shadow-md sm:p-4 my-5 bg-slate-200`}>
            <div className={`rounded-md bg-white p-10 cursor-default`}>
              <Text className={`font-bold text-lg`}>{text.ib5}</Text>
              <Text className={`font-light text-md leading-tight ml-2`}>{text.ib6}</Text>
              <div className={`bg-slate-300`} style={{ height: '1px' }} />
              <Text className={`font-bold text-lg`}>{text.ib7}</Text>
              <Text className={`font-light text-md leading-tight ml-2`}>{text.ib8}</Text>
              <div className={`bg-slate-300`} style={{ height: '1px' }} />
              <Text className={`font-bold text-lg`}>{text.ib9}</Text>
              <Text className={`font-light text-md leading-tight ml-2`}>{text.ib10}</Text>
              <div className={`bg-slate-300`} style={{ height: '1px' }} />
              <Text className={`font-bold text-lg`}>{text.ib11}</Text>
              <Text className={`font-light text-md leading-tight ml-2`}>{text.ib12}</Text>
              <div className={`bg-slate-300`} style={{ height: '1px' }} />
              <Text className={`font-bold text-lg`}>{text.ib13}</Text>
              <Text className={`font-light text-md leading-tight ml-2`}>{text.ib14}</Text>
              <div className={`bg-slate-300`} style={{ height: '1px' }} />
              <Text className={`font-bold text-lg`}>{text.ib15}</Text>
              <Text className={`font-light text-md leading-tight ml-2`}>{text.ib16}</Text>
              <div className={`bg-slate-300`} style={{ height: '1px' }} />
              <Text className={`font-bold text-lg`}>{text.ib17}</Text>
              <Text className={`font-light text-md leading-tight ml-2`}>{text.ib18}</Text>
              <div className={`bg-slate-300`} style={{ height: '1px' }} />
              <Text className={`font-bold text-lg`}>{text.ib19}</Text>
              <Text className={`font-light text-md leading-tight ml-2`}>{text.ib20}</Text>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
