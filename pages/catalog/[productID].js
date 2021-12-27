import React from 'react';
import Head from 'next/head';
import { ProductCardLG } from '../../components/complicated';
import { products } from '../../configs/products';

import meta from '../../data/meta.json';

export default function Product(props) {
  const { product } = props;
  const head = meta.find((item) => item.pageName === `catalog/${product.id}`).head;
  return (
    <div>
      <Head>
        <title>{head.title}</title>
        {head.meta.map((item, index) => (
          <meta name={item.name} content={item.content} key={`METAMAIN${index}`} />
        ))}
      </Head>
      <ProductCardLG product={product} />;
    </div>
  );
}

export async function getStaticProps({ params }) {
  const res = products.find((item) => item.id.toString() === params.productID.toString());
  return {
    props: {
      product: res,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: products.map((product) => {
      const productID = product.id.toString();
      return {
        params: {
          productID,
        },
      };
    }),
    fallback: false,
  };
}
