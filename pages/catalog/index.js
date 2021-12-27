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
      <Text ta={'center'} ts={'3xl'} tw={'bold'} my={4}>
        {app.pages.catalog.title}
      </Text>
      <div className={`flex flex-wrap px-4 justify-center my-4 bg-slate-100`}>
        {products.map((product, index) => (
          <ProductCardSM product={product} key={`P${index}`} />
        ))}
      </div>
    </div>
  );
}
