import React from 'react';
import { Layout } from '../../components/complicated';
import productsInit from '../../data/products.json';
import { normalizeData, normalizeDataSTUPID } from '../../utils/functions';

const products = normalizeDataSTUPID(productsInit)

export default function ProductPage(props) {
  return <Layout.Product {...props} products={products} />;
}

export async function getStaticProps({ params }) {
  // const fetched = await fetch('https://xn--j1ano.com/uploads/staticsites/beltermo.json').then((res) =>
  //   res.json()
  // );
  // const products = normalizeData(fetched, productsInit);
  
  const res = products.find((item) => item.id.toString() === params.productID.toString());
  return {
    props: {
      product: res,
      // products: products,
    },
  };
}

export async function getStaticPaths() {
  // const fetched = await fetch('https://xn--j1ano.com/uploads/staticsites/beltermo.json').then((res) =>
  //   res.json()
  // );
  // const products = normalizeData(fetched, productsInit);
  // const products = normalizeDataSTUPID(productsInit)
  return {
    paths: productsInit.map((product) => {
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
