import React from 'react';
import { Product } from '../../components/complicated';
import productsInit from '../../data/products.json';
import { normalizeData } from '../../utils/functions';

export default function ProductPage(props) {
  return <Product.CardLG {...props} />;
}

export async function getStaticProps({ params }) {
  const fetched = await fetch('https://xn--j1ano.com/uploads/staticsites/beltermo.json').then((res) =>
    res.json()
  );
  const products = normalizeData(fetched, productsInit);
  const res = products.find((item) => item.id.toString() === params.productID.toString());
  return {
    props: {
      product: res,
      products: products,
    },
  };
}

export async function getStaticPaths() {
  const fetched = await fetch('https://xn--j1ano.com/uploads/staticsites/beltermo.json').then((res) =>
    res.json()
  );
  console.log('🚀 ~ file: [productID].js ~ line 28 ~ getStaticPaths ~ productsInit', productsInit);
  const products = normalizeData(fetched, productsInit);
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
