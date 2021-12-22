import React from 'react';
import { ProductCardSM } from '../../components/complicated';
import { Text } from '../../components/lib';
import { app } from '../../configs/app';
import { products } from '../../configs/products';

export default function Catalog() {
  return (
    <div>
      <Text ta={'center'} ts={'3xl'} tw={'bold'}>
        {app.pages.catalog.title}
      </Text>
      <div className={`flex flex-wrap mx-4 justify-center`}>
        {products.map((product, index) => (
          <ProductCardSM product={product} key={`P${index}`} />
        ))}
      </div>
    </div>
  );
}
