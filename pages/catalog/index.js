import React from 'react';
import { Layout } from '../../components/complicated';
import fs from 'fs';
import { v2 } from 'utils/functions';

export default function Catalog(props) {
  return <Layout.Catalog {...props} />;
}

export async function getServerSideProps() {

  let products = v2(JSON.parse(fs.readFileSync('data/products2.json', 'utf8')));
  return {
    props: {
      products: products,
    },
  };
}