import React from 'react';
import { AnimatePresence, domAnimation, LazyMotion, m, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import TagManager from 'react-gtm-module';

import { AppContext } from 'components/complicated/Context/AppContext';
import { animations } from '../styles/animations';
import { Header, Footer, Head } from '../components/complicated';
import { normalizeDataSTUPID } from '../utils/functions';
import '../styles/tailwind.css';

import initProducts from '../data/products.json';
import pages from '../data/pages.json';

const products = normalizeDataSTUPID(initProducts);

function MyApp({ Component, pageProps }) {
  const [w, setW] = React.useState(1400);
  const router = useRouter();
  React.useEffect(() => {
    TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_SITE_URL === 'belplit-russia.ru' ? 'GTM-NP9FQ74' : 'GTM-PNMWMTQ'});
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

  return (
    <AppContext.Consumer>
      {(app) => {
        const newProps = {
          app: app,
          lgView: w >= 1200,
          mdView: w >= 900 && w < 1200,
          w: w,
          data: pages.find((item) => {
            let acv = /\#/.test(router.asPath)
              ? router.asPath.slice(0, router.asPath.indexOf('#'))
              : router.asPath === '/'
              ? '/main'
              : router.asPath;

            if (acv === '/') {
              acv = '/main';
            }
            return item.path === acv;
          }),
          products: products,
          ...pageProps,
        };
        
        return (
          <>
            <div>
              <Head app={app} head={newProps.data?.head} />
              {/* <script
                type='text/javascript'
                dangerouslySetInnerHTML={{
                  __html: `
            <!--Yandex metrika -->
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js", "ym");
            
            ym(${app.api.ym}, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true,
                trackHash:true
            });
            `,
                }}
              ></script> */}
              <div className={`flex flex-col w-full min-h-screen overflow-hidden justify-between`}>
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
