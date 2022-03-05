import React from 'react';
import Head from 'next/head';

export default function HeadComponent({ app, head, children }) {
  return (
    <Head>
      <title>{head?.title ? head.title : 'Белтермо. Страница не найдена'}</title>
      <meta name='theme-color' content='#ffffff'></meta>
      <script
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
      ></script>
      <script
        type='text/javascript'
        dangerouslySetInnerHTML={{
          __html: `
          <!-- Google Tag Manager -->
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${app.api.gtm}');
          <!-- End Google Tag Manager -->
            `,
        }}
      ></script>
      {head?.meta.map((item, index) => (
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
