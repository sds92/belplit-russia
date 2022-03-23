import React from 'react';
import { Layout } from '../../components/complicated';
// import { v2 } from 'utils/functions';
import fs from 'fs';
import { useRouter } from 'next/router'


export default function ProductPage(props) {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }

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
