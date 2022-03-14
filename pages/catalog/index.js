import React from 'react';
import { Layout } from '../../components/complicated';

export default function Catalog(props) {
  return <Layout.Catalog {...props} />;
}

export async function getStaticProps({ params, ...props }) {
  const products = require('data/products.json');
  return {
    props: {
      products: products,
    },
  };
}
