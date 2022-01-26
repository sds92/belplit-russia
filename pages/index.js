import { Layout } from '../components/complicated';
import productsInit from '../data/products.json';
import { normalizeData } from '../utils/functions';

export default function Home(props) {
  return <Layout.Main {...props} />;
}

export async function getStaticProps(context) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://xn--j1ano.com/uploads/staticsites/beltermo.json').then((res) =>
    res.json()
  );
  const products = normalizeData(res, productsInit);
  // By returning { props: { posts } }, the Blog component
  // will receive posts as a prop at build time
  return {
    props: {
      products,
    },
  };
}
