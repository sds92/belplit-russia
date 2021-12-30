import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { ProductCardSM } from '../../components/complicated';
import { Text } from '../../components/lib';
import { app } from '../../configs/app';
import { products } from '../../configs/products';
import meta from '../../data/meta.json';
import backgroundImage from '../../public/images/backgraund-description.jpg';

export default function Catalog() {
  const head = meta.find((item) => item.pageName === 'catalog').head;
  return (
    <div className={`bg-slate-100`}>
      <Head>
        <title>{head.title}</title>
        {head.meta.map((item, index) => (
          <meta name={item.name} content={item.content} key={`METAMAIN${index}`} />
        ))}
      </Head>
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
          {app.pages.catalog.title}
        </Text>
      </div>
      <div
        className={`sm:px-20 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:px-40 gap-1`}
      >
        {products.map((product, index) => (
          <ProductCardSM product={product} key={`P${index}`} />
        ))}
      </div>
    </div>
  );
}
