import React from 'react';
import Head from 'next/head';

export default function HeadComponent({ script, head, children }) {
  return (
    <Head>
      <title>{head?.title && head.title}</title>
      <meta name='theme-color' content='#ffffff'></meta>
      {script && script}
      {head?.meta.map((item, index) => (
        <meta name={item.name} content={item.content} key={`META${index}`} />
      ))}
      {children && children}
    </Head>
  );
}
