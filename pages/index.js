import { Layout } from '../components/complicated';
// import { normalizeDataSTUPID } from '../utils/functions';

export default function Home(props) {
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