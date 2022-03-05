import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />

          <link
            href='https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap'
            rel='stylesheet'
          ></link>
        </Head>
        <body>
          {process.env.NEXT_PUBLIC_SITE_URL === 'belplit-russia.ru' && (
            <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NP9FQ74"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          ></noscript>
          )}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
