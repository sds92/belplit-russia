import React from 'react';
import Head from 'next/head';
import { FeedBack as FeedBackForm } from '../components/complicated';
import { Text } from '../components/lib';
import { app } from '../configs/app';
import meta from '../data/meta.json';

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
      <Text ta={'center'} ts={'3xl'} tw={'bold'} py={10}>
        {app.pages.cooperation.title}
      </Text>

      <Text ta={'center'} py={'2'} mx={'auto'} extraClasses={`max-w-xl`}>
        {app.pages.cooperation.content[1]}
      </Text>
      <FeedBackForm />
    </div>
  );
}
