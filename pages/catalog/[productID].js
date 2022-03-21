import React from 'react';
import { Layout } from '../../components/complicated';
import { v2 } from 'utils/functions';
import fs from 'fs';

export default function ProductPage(props) {
  return <Layout.Product {...props} />;
}

export async function getStaticProps({ params, ...props }) {
  let products = v2(JSON.parse(fs.readFileSync('data/products2.json', 'utf8')));
  
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
  let products = v2(JSON.parse(fs.readFileSync('data/products2.json', 'utf8')));
  // console.log("🚀 ~ file: [productID].js ~ line 25 ~ getStaticPaths ~ products", products)
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
