import { SizeMe } from 'react-sizeme';
import { Header } from '../components/complicated';
import { Footer } from '../components/complicated';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps, size }) {
  const { width } = size || 900;
  let newProps = {
    lgView: width >= 900,
    ...pageProps,
  };

  return (
    <SizeMe>
      {({ size }) => {
        const { width } = size;
        const newProps = {
          lgView: width >= 900,
          ...pageProps,
        };
        return (
          <div>
            <div className={`flex flex-col w-full min-h-screen justify-between`}>
              <Header lgView={newProps.lgView} />
              <Component {...newProps} />
              <Footer lgView={newProps.lgView >= 900} />
            </div>
          </div>
        );
      }}
    </SizeMe>
  );
}

export default MyApp;
