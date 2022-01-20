import React from 'react';
import { Head } from '../../components/complicated';
import { ProductCardSM } from '../../components/complicated';
import { Text } from '../../components/lib';
import { app } from '../../configs/app';
import { products } from '../../configs/products';
import meta from '../../data/meta.json';
import backgroundImage from '../../public/images/background-description.jpg';

export default function Catalog(props) {
  console.log('🚀 ~ file: index.js ~ line 11 ~ Catalog ~ props', props);
  const { input } = props;
  const head = meta.find((item) => item.pageName === 'catalog').head;
  return (
    <div className={`bg-white pt-20`}>
      <Head head={head} />
      <div className={`bg-zinc-400`}>
        <div className={`bg-belplit bg-opacity-60 py-2`}>
          <Text className={`text-5xl pl-1.5 font-bold text-zinc-800 max-w-7xl text-left mx-auto`}>
            {input.title}
          </Text>
          <Text className={`text-4xl pl-2 font-bold text-zinc-100 pb-2 max-w-7xl text-left mx-auto`}>
            Белтермо
          </Text>
        </div>
      </div>
      <div className={`max-w-7xl mx-auto pt-20`}>
        <div className={`border-belplit rounded-lg`}>
          <div className={`pb-20 flex flex-wrap items-center justify-center mx-auto`}>
            {products.map((product, index) => (
              <div
                key={`P${index}`}
                className={`zero:w-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 transition-all`}
              >
                <ProductCardSM product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
