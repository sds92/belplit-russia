import React from 'react';
import { Layout } from '../../components/complicated';
// import { v2 } from 'utils/functions';
import fs from 'fs';

export default function ProductPage(props) {
  return <Layout.Product {...props} />;
}

export async function getStaticProps({ params, ...props }) {
  let products = JSON.parse(fs.readFileSync('data/products3.json', 'utf8'));
  
  let product = products.find((item) => item.info.slug === params.productID);
  return {
    props: {
      products: products,
      product: product,
    },
    revalidate: 5
  };
}

export async function getStaticPaths() {
  let products = JSON.parse(fs.readFileSync('data/products3.json', 'utf8'));
  return {
    paths: products.map((product) => {
      const productID = product.info.slug;
      return {
        params: {
          productID,
        },
      };
    }),
    fallback: true,
  };
}
