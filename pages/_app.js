import { SizeMe } from 'react-sizeme';
import { Header } from '../components/complicated';
import { Footer } from '../components/complicated';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps, size }) {
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
              <Footer lgView={newProps.lgView} />
            </div>
          </div>
        );
      }}
    </SizeMe>
  );
}

export default MyApp;
