import { Layout } from '../components/complicated';
import fs from 'fs';

export default function main(props) {
  return <Layout.Main {...props} />;
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