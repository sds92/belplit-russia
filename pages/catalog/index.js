import React from 'react';
import Head from 'next/head';
import { ProductCardSM } from '../../components/complicated';
import { Text } from '../../components/lib';
import { app } from '../../configs/app';
import { products } from '../../configs/products';
import meta from '../../data/meta.json';

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
      <Text ta={'center'} ts={'3xl'} tw={'bold'} py={10}>
        {app.pages.catalog.title}
      </Text>
      <div className={`sm:px-20 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:px-40 gap-1`}>
        {products.map((product, index) => (
          <ProductCardSM product={product} key={`P${index}`} />
        ))}
      </div>
    </div>
  );
}
