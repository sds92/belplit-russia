import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { FeedBack as FeedBackForm } from '../components/complicated';
import { Text } from '../components/lib';
import { app } from '../configs/app';
import meta from '../data/meta.json';
import backgroundImage from '../public/images/backgraund-description.jpg';


export default function cooperation() {
  const head = meta.find((item) => item.pageName === 'cooperation').head;
  return (
    <div className={`bg-slate-100`} style={{ minHeight: '540px' }}>
      <Head>
        <title>{head.title}</title>
        {head.meta.map((item, index) => (
          <meta name={item.name} content={item.content} key={`METAMAIN${index}`} />
        ))}
      </Head>
      
      {/* BODY */}
      <div className={`relative h-56 `}>
        <Image
          src={backgroundImage}
          alt={`backgroundImage`}
          width={200}
          height={150}
          layout='fill'
          objectFit='cover'
        />
        <Text ta={'center'} tc={`slate-100`} ts={'5xl'} tw={'bold'} py={20} extraClasses={`absolute inset-0`}>
          {app.pages.cooperation.title}
        </Text>
      </div>

      <Text ta={'center'} py={'2'} mx={'auto'} extraClasses={`max-w-xl`}>
        {app.pages.cooperation.content[1]}
      </Text>
      <FeedBackForm />
    </div>
  );
}
