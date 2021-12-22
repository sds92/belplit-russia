import React from 'react';
import { ProductCardLG } from '../../components/complicated';
import { products } from '../../configs/products';

export default function Product(props) {
  const { product } = props;
  return <ProductCardLG product={product}/>;
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
