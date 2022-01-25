import React from 'react';
import { Product } from '../';
import { Text } from '../../lib';
// import products from '../../../data/products.json';

export default function Catalog({ data, products }) {
  const { title } = data;
  return (
    <div className={`pt-20`}>
      <div className={`bg-zinc-400`}>
        <div className={`bg-belplit bg-opacity-60 py-2`}>
          <Text className={`text-5xl pl-1.5 font-bold text-zinc-800 max-w-7xl text-left mx-auto`}>
            {title}
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
                <Product.CardSM product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
