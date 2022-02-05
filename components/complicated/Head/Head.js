import React from 'react';
import Head from 'next/head';

export default function HeadComponent({ head, children }) {
  return (
    <Head>
      <title>{head.title}</title>
      <meta name='theme-color' content='#ffffff'></meta>
      <script async='' src='https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js'></script>
      <link rel='shortcut icon' type="image/x-icon" href='/favicon.ico' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
      <link
        href='https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap'
        rel='stylesheet'
      ></link>
      {head.meta.map((item, index) => (
        <meta name={item.name} content={item.content} key={`META${index}`} />
      ))}
      {children && children}
    </Head>
  );
}
