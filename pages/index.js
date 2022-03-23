import { Layout } from '../components/complicated';
import fs from 'fs';

export default function Home(props) {
  return <Layout.Main {...props} />;
}

export async function getStaticProps({ params, ...props }) {
  let products = JSON.parse(fs.readFileSync('data/products3.json', 'utf8'));

  return {
    props: {
      products: products,
    },
  };
}