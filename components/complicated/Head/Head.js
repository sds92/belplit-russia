import React from 'react';
import Head from 'next/head';

export default function HeadComponent({ app, head, children }) {
  return (
    <Head>
      <title>{head ? head.title : 'Белтермо. Страница не найдена'}</title>
      <meta name='theme-color' content='#ffffff'></meta>
      
    
      {head && head?.meta.map((item, index) => (
        <meta name={item.name} content={item.content} key={`META${index}`} />
      ))}
      {!head && (
        <>
          <meta name={'keywords'} content={'Белтермо'} />
          <meta name={'description'} content={'Белтермо'} />
        </>
      )}
    </Head>
  );
}


// <script
// type='text/javascript'
// dangerouslySetInnerHTML={{
//   __html: `
//   <!-- Google Tag Manager -->
//   (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//   new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//   j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//   'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//   })(window,document,'script','dataLayer','${app.api.gtm}');
//   <!-- End Google Tag Manager -->
//     `,
// }}
// ></script>