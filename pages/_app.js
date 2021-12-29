import React from 'react';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import { animations } from '../styles/animations';
import { SizeMe } from 'react-sizeme';
import { Header } from '../components/complicated';
import { Footer } from '../components/complicated';
import Head from 'next/head';

import '../styles/tailwind.css';

function MyApp({ Component, pageProps, router }) {

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
            <div className={`flex flex-col w-full min-h-screen overflow-hidden justify-between`}>
              <Header lgView={newProps.lgView} />
              <LazyMotion features={domAnimation}>
                <AnimatePresence exitBeforeEnter>
                  <m.div
                    key={router.route.concat(animations[6].name)}
                    className='page-wrap'
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    variants={animations[6].variants}
                    transition={animations[6].transition}
                  >
                    <Component {...newProps} />
                  </m.div>
                </AnimatePresence>
              </LazyMotion>
              <Footer lgView={newProps.lgView} />
            </div>
          </div>
        );
      }}
    </SizeMe>
  );
}

export default MyApp;
