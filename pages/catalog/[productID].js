import React from 'react';
import { Layout } from '../../components/complicated';
// import productsInit from '../../data/products.json'

export default function ProductPage(props) {
  return <Layout.Product {...props}/>;
}

export async function getStaticProps({ params, ...props }) {
  const product = products.find((item) => item.name === params.productID);
  return {
    props: {
      products: products,
      product: product,
    },
  };
}

export async function getStaticPaths() {
  const products = require('data/products.json');
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
