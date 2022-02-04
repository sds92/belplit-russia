import React from 'react';
import productsInit from '../../data/products.json';
// import { normalizeData, normalizeDataSTUPID } from '../../utils/functions';
import { Layout } from '../../components/complicated';

export default function Catalog(props) {
  // const products = normalizeDataSTUPID(productsInit);
  return <Layout.Catalog products={productsInit} {...props} />;
}

// export async function getStaticProps(context) {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   // const res = await fetch('https://xn--j1ano.com/uploads/staticsites/beltermo.json').then((res) =>
//   //   res.json()
//   // );
//   // const products = normalizeData(res, productsInit);
//   const tmp = productsInit
//   const products = normalizeDataSTUPID(tmp);
//   console.log("🚀 ~ file: index.js ~ line 18 ~ getStaticProps ~ products", products)
//   // By returning { props: { posts } }, the Blog component
//   // will receive posts as a prop at build time
//   return {
//     props: {
//       products,
//     },
//   };
// }
