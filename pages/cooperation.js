import React from 'react';
import Image from 'next/image';

import { FeedBack as FeedBackForm } from '../components/complicated';
import { Text } from '../components/lib';
import { app } from '../configs/app';
import backgroundImage from '../public/images/background-description.jpg';

export default function cooperation({ input }) {
  return (
    <div className={`bg-slate-100`} style={{ minHeight: '540px' }}>
      <div className={`relative h-56 `}>
        <Image
          src={backgroundImage}
          alt={`backgroundImage`}
          width={200}
          height={150}
          layout='fill'
          objectFit='cover'
        />
        <Text className={`absolute text-center text-slate-100 text-5xl font-bold pt-20 inset-0`}>{input.title}</Text>
      </div>
      <Text className={`text-center py-2 mx-auto max-w-xl`}>{input.content.text.ib0}</Text>
      <FeedBackForm />
    </div>
  );
}
