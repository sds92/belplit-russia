import React from 'react';
import { ProductCardLG } from '../../components/complicated';
import { products } from '../../configs/products';

export default function Product(props) {
  const { product, input } = props;
  return (
    <div>
      <div className={`w-full bg-slate-100`}>
        <ProductCardLG product={product} />
      </div>
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
