import React from 'react';
import { Layout } from '../../components/complicated';
import fs from 'fs';

export default function Catalog(props) {
  return <Layout.Catalog {...props} />;
}

export async function getServerSideProps() {

  let products = JSON.parse(fs.readFileSync('data/products3.json', 'utf8'));
  // console.log(products)
  return {
    props: {
      products: products,
    },
  };
}