import React from 'react';
import { Layout } from '../../components/complicated';
import fs from 'fs';
import { v1 } from 'utils/functions';

export default function Catalog(props) {
  return <Layout.Catalog {...props} />;
}

// export async function getStaticProps({ params, ...props }) {
//   let products = v1(JSON.parse(fs.readFileSync('data/products.json', 'utf8')));
//   return {
//     props: {
//       products: products,
//     },
//   };
// }

export async function getServerSideProps() {

  let products = v1(JSON.parse(fs.readFileSync('data/products.json', 'utf8')));
  return {
    props: {
      products: products,
    },
  };
}