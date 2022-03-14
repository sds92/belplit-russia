import React from 'react';
import { Layout } from '../../components/complicated';
import { v1 } from 'utils/functions';
import fs from 'fs';

export default function ProductPage(props) {
  return <Layout.Product {...props} />;
}

export async function getStaticProps({ params, ...props }) {
  let products = v1(JSON.parse(fs.readFileSync('data/products.json', 'utf8')));
  
  let product = products.find((item) => item.name === params.productID);
  return {
    props: {
      products: products,
      product: product,
    },
    revalidate: 5
  };
}

export async function getStaticPaths() {
  let products = v1(JSON.parse(fs.readFileSync('data/products.json', 'utf8')));
  return {
    paths: products.map((product) => {
      const productID = product.name;
      return {
        params: {
          productID,
        },
      };
    }),
    fallback: false,
  };
}
