import React from 'react';
import { SizeMe } from 'react-sizeme';
import { Header } from '../components/complicated';
import { Footer } from '../components/complicated';
import Head from 'next/head';

import '../styles/tailwind.css';

function MyApp({ Component, pageProps, size }) {
  
  return (
    <SizeMe>
      {({ size }) => {
        const { width } = size;
        const newProps = {
          lgView: width >= 900,
          ...pageProps,
        };
        return (
          <div>
            <Head>
              <script async='' src='https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js'></script>
            </Head>
            <div className={`flex flex-col w-full min-h-screen justify-between`}>
              <Header lgView={newProps.lgView} />
              <Component {...newProps} />
              <Footer lgView={newProps.lgView} />
            </div>
          </div>
        );
      }}
    </SizeMe>
  );
}

export default MyApp;
