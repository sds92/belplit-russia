import React from 'react';
import Head from 'next/head';

export default function HeadComponent({ script, head, children }) {
  return (
    <Head>
      <title>{head?.title ? head.title : 'Страница не найдена'}</title>
      <meta name='theme-color' content='#ffffff'></meta>
      {script && script}
      {head?.meta.map((item, index) => (
        <meta name={item.name} content={item.content} key={`META${index}`} />
      ))}
      {!head && (
        <>
          <meta name={'keywords'} content={'Белтермо'} key={`META${index}`} />
          <meta name={'description'} content={'Белтермо'} key={`META${index}`} />
        </>
      )}
      {children && children}
    </Head>
  );
}
