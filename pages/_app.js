import React from 'react';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import { useRouter } from 'next/router';
import { animations } from '../styles/animations';
import { Header, Footer, Head, AppContext } from '../components/complicated';
import '../styles/tailwind.css';

import pages from '../data/pages.json';
import app from '../data/app.json';

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(true);
  const [w, setW] = React.useState(undefined);

  React.useEffect(() => {
    setW(window.innerWidth);
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    window.addEventListener(
      'resize',
      () => {
        setW(window.innerWidth);
      },
      []
    );
  }, []);
  const router = useRouter();

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
    data: pages.find((item) => item.path === (router.asPath === '/' ? '/main' : router.asPath)),

    ...pageProps,
  };

  return (
    <div>
      <Head head={newProps.data.head} />
      <div className={`flex flex-col w-full min-h-screen overflow-hidden justify-between`}>
        <Header {...newProps} />
        <LazyMotion features={domAnimation}>
          <AnimatePresence exitBeforeEnter>
            <m.div
              key={router.route.concat(animations.opacity.name)}
              className='page-wrap'
              initial='initial'
              animate='animate'
              exit='exit'
              variants={animations.opacity.variants}
              transition={animations.opacity.transition}
            >
              <Component {...newProps} />
            </m.div>
          </AnimatePresence>
        </LazyMotion>
        <Footer lgView={newProps.lgView} />
      </div>
    </div>
  );
}

// MyApp.getInitialProps = async (ctx) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const res = await fetch('https://xn--j1ano.com/uploads/staticsites/beltermo.json').then((res) =>
//     res.json()
//   );
//   const normRes = normalizeData(res, products);
//   return { products: normRes };
// };

// MyApp;
