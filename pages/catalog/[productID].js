import React from 'react';
import { Layout } from '../../components/complicated';
import productsInit from '../../data/products.json'

export default function ProductPage(props) {
  return <Layout.Product {...props}/>;
}

export async function getStaticProps({ params, ...props }) {
  console.log("🚀 ~ file: [productID].js ~ line 10 ~ getStaticProps ~ params", params)
  // console.log("🚀 ~ file: [productID].js ~ line 10 ~ getStaticProps ~ props", props)
  // const fetched = await fetch('https://xn--j1ano.com/uploads/staticsites/beltermo.json').then((res) =>
  //   res.json()
  // );
  // const products = normalizeData(fetched, productsInit);
  
  const res = productsInit.find((item) => item.name === params.productID);
  console.log("🚀 ~ file: [productID].js ~ line 18 ~ getStaticProps ~ res", res)

  return {
    props: {
      product: res,
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
      const productID = product.name;
      // console.log("🚀 ~ file: [productID].js ~ line 34 ~ paths:productsInit.map ~ productID", productID)
      return {
        params: {
          productID,
        },
      };
    }),
    fallback: false,
  };
}
