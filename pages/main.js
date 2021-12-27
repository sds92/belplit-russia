import Head from 'next/head';
import { Main } from '../components/complicated';

import meta from '../data/meta.json';

export default function main() {
  const head = meta.find(item => item.pageName === 'main').head
  return (
    <div>
      <Head>
        <title>{head.title}</title>
        {head.meta.map((item, index) => (
          <meta name={item.name} content={item.content} key={`METAMAIN${index}`} />
        ))}
      </Head>
      <Main />
    </div>
  );
}
