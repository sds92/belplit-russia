import { Layout } from '../components/complicated';
import fs from 'fs';
import { v1 } from 'utils/functions';

export default function Home(props) {
  return <Layout.Main {...props} />;
}

export async function getStaticProps({ params, ...props }) {
  let products = v1(JSON.parse(fs.readFileSync('data/products.json', 'utf8')));

  return {
    props: {
      products: products,
    },
  };
}