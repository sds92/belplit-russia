import React from 'react';
import { AnimatePresence, domAnimation, LazyMotion, m, motion } from 'framer-motion';
import { useRouter } from 'next/router';

import { animations } from '../styles/animations';
import { Header, Footer, Head } from '../components/complicated';
import { normalizeDataSTUPID } from '../utils/functions';
import '../styles/tailwind.css';

import initProducts from '../data/products.json';
import pages from '../data/pages.json';
import app from '../data/app.json';

const products = normalizeDataSTUPID(initProducts);

function MyApp({ Component, pageProps }) {
  const [w, setW] = React.useState(1400);
  const router = useRouter();

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

  const newProps = {
    menu: [
      ['Главная', '#Main'],
      ['Цены', '#Catalog'],
      ['Преимущества', '#Advantages'],
      ['Применение', '#Gallery'],
      ['Контакты', '#Contacts'],
    ],
    lgView: w >= 1200,
    mdView: w >= 900 && w < 1200,
    w: w,
    app: app,
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
    <div>
      <Head head={newProps.data.head} />
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
        <Footer lgView={newProps.lgView} />
      </div>
      <script
        type='text/javascript'
        dangerouslySetInnerHTML={{
          __html: `
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
      ></script>
    </div>
  );
}

export default MyApp;
