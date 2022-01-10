import React from 'react';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import { useRouter } from 'next/router';
import { animations } from '../styles/animations';
import { SizeMe } from 'react-sizeme';
import { Header, Footer, Head, AppContext } from '../components/complicated';
import '../styles/tailwind.css';

import pages from '../data/pages.json';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <SizeMe>
      {({ size }) => {
        console.log('🚀 ~ file: _app.js ~ line 13 ~ MyApp ~ router', router);
        const newProps = {
          lgView: size.width >= 900,
          input: pages.find((item) => item.path === (router.asPath === '/' ? '/main' : router.asPath)),
          ...pageProps,
        };
        return (
          <div>
            <Head head={newProps.input.head}>
              <script async='' src='https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js'></script>
              <link rel='shortcut icon' href='/favicon.ico' />
              <link rel='apple-touch-icon' sizes='57x57' href='/apple-icon-57x57.png' />
              <link rel='apple-touch-icon' sizes='60x60' href='/apple-icon-60x60.png' />
              <link rel='apple-touch-icon' sizes='72x72' href='/apple-icon-72x72.png' />
              <link rel='apple-touch-icon' sizes='76x76' href='/apple-icon-76x76.png' />
              <link rel='apple-touch-icon' sizes='114x114' href='/apple-icon-114x114.png' />
              <link rel='apple-touch-icon' sizes='120x120' href='/apple-icon-120x120.png' />
              <link rel='apple-touch-icon' sizes='144x144' href='/apple-icon-144x144.png' />
              <link rel='apple-touch-icon' sizes='152x152' href='/apple-icon-152x152.png' />
              <link rel='apple-touch-icon' sizes='180x180' href='/apple-icon-180x180.png' />
              <link rel='icon' type='image/png' sizes='192x192' href='/android-icon-192x192.png' />
              <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
              <link rel='icon' type='image/png' sizes='96x96' href='/favicon-96x96.png' />
              <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
              <link rel='manifest' href='/manifest.json' />
              <meta name='msapplication-TileColor' content='#ffffff' />
              <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
              <meta name='theme-color' content='#ffffff'></meta>
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
                    <Component content={newProps.input.content} {...newProps} />
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
