import React from 'react';
import Head from 'next/head';

export default function HeadComponent({ head, children }) {
  return (
    <Head>
      <title>{head.title}</title>
      <meta name='theme-color' content='#2b7801'></meta>
      <script async='' src='https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js'></script>
      <link rel='shortcut icon' href='/svg/beltermo.svg' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
      <link
        href='https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@700&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap'
        rel='stylesheet'
      ></link>
      <link
        href='https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap'
        rel='stylesheet'
      ></link>
      <link
        href='https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap'
        rel='stylesheet'
      ></link>
      {head.meta.map((item, index) => (
        <meta name={item.name} content={item.content} key={`META${index}`} />
      ))}
      {children && children}
    </Head>
  );
}
