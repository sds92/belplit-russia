import { Layout } from '../components/complicated';

export default function main(props) {
  return <Layout.Main {...props} />;
}

export async function getStaticProps({ params, ...props }) {
  const products = require('data/products.json');

  return {
    props: {
      products: products,
    },
  };
}