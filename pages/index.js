import { Layout } from '../components/complicated';
// import productsInit from '../data/products.json';
// import { normalizeData, normalizeDataSTUPID } from '../utils/functions';

// const products = normalizeDataSTUPID(productsInit);

export default function Home(props) {
  // console.log("🚀 ~ file: index.js ~ line 6 ~ Home ~ props", props)
  return <Layout.Main {...props} />;
}

// export async function getStaticProps(context) {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   // const res = await fetch('https://xn--j1ano.com/uploads/staticsites/beltermo.json').then((res) =>
//   //   res.json()
//   // );
//   // By returning { props: { posts } }, the Blog component
//   // will receive posts as a prop at build time
//   return {
//     props: {
//       products,
//     },
//   };
// }
