import React from 'react';
import { AnimatePresence, domAnimation, LazyMotion, m, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import TagManager from 'react-gtm-module';
import { SWRConfig } from "swr";
import fetchJson from "lib/fetchJson";

import { AppContext } from 'components/complicated/Context/AppContext';
import { animations } from '../styles/animations';
import { Header, Footer, Head } from '../components/complicated';
import '../styles/tailwind.css';

import pages from '../data/pages.json';

function MyApp({ Component, pageProps }) {
  const [w, setW] = React.useState(1400);
  const router = useRouter();
  React.useEffect(() => {
    TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_SITE_URL === 'beltermo-russia.ru' ? 'GTM-NP9FQ74' : 'GTM-PNMWMTQ' });
  }, []);
  React.useEffect(() => {
    setW(window.innerWidth);

    window.addEventListener(
      'resize',
      () => {
        setW(window.innerWidth);
      },
      []
    );
  }, []);
  if (router.route === '/admin' || router.route === '/login' ) {
    return (
      <SWRConfig
        value={{
          fetcher: fetchJson,
          onError: (err) => {
            console.error(err);
          },
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    );
  }
  return (
    <AppContext.Consumer>
      {(app) => {
        const newProps = {
          app: app,
          lgView: w >= 1200,
          mdView: w >= 900 && w < 1200,
          w: w,
          data: pages.find((item) => {
            let acv = router.route

            if (router.route === '/') {
              acv = '/main';
            }
            if (router.query.productID) {
              acv = `/catalog/${router.query.productID}`
            }
            return item.path === acv;
          }),
          ...pageProps,
        };

        return (
          <>
            <div>
              <Head app={app} head={newProps.data?.head} />

              <div className={`font-fira flex flex-col w-full min-h-screen overflow-hidden justify-between`}>
                <Header {...newProps} />
                <LazyMotion features={domAnimation}>
                  <AnimatePresence exitBeforeEnter>
                    <motion.div
                      key={router.route.concat(animations.opacity.name)}
                      className='page-wrap'
                      initial='initial'
                      animate='animate'
                      exit='exit'
                      variants={animations.opacity.variants}
                      transition={animations.opacity.transition}
                    >
                      <Component {...newProps} />
                    </motion.div>
                  </AnimatePresence>
                </LazyMotion>
                <Footer lgView={newProps.lgView} w={w} />
              </div>
            </div>
          </>
        );
      }}
    </AppContext.Consumer>
  );
}

export default MyApp;
