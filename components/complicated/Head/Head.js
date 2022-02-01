import React from 'react';
import Head from 'next/head';

export default function HeadComponent({ head, children }) {
  return (
    <Head>
      <title>{head.title}</title>
      <meta name='theme-color' content='#2b7801'></meta>
      <script async='' src='https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js'></script>
      <link rel='shortcut icon' href='/svg/beltermo.svg' />
     
      {head.meta.map((item, index) => (
        <meta name={item.name} content={item.content} key={`META${index}`} />
      ))}
      {children && children}
    </Head>
  );
}
