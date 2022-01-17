import React from 'react';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import { useRouter } from 'next/router';
import { animations } from '../styles/animations';
import { SizeMe } from 'react-sizeme';
import { Header, Footer, Head, AppContext } from '../components/complicated';
import '../styles/tailwind.css';

import pages from '../data/pages.json';
import app from '../data/app.json';

function MyApp({ Component, pageProps }) {
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
    app: app,
    input: pages.find((item) => item.path === (router.asPath === '/' ? '/main' : router.asPath)),
    ...pageProps,
  };

  return (
    <div>
      <Head head={newProps.input.head}>
        <script async='' src='https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js'></script>
        <link rel='shortcut icon' href='/images/logo.png' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <div className={`flex flex-col w-full min-h-screen overflow-hidden justify-between`}>
        <Header {...newProps} />
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
}

export default MyApp;
