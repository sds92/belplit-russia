import { Header, Products } from '../components/complicated/Admin';
import { withIronSessionSsr } from 'iron-session/next';
import { sessionOptions } from 'lib/session';
// redux
import { Provider } from 'react-redux';
import { store } from 'redux/store';

function Admin({ user }) {
  return (
    <>
      <Header />
      {user?.isLoggedIn && (
        <>
          <Provider store={store}>
            <Products />
          </Provider>
        </>
      )}
    </>
  );
}

export default Admin;

export const getServerSideProps = withIronSessionSsr(async function ({ req, res }) {
  const user = req.session.user;
  //

  if (user === undefined) {
    return {
      props: {
        user: { isLoggedIn: false, pass: '' },
      },
    };
  }

  return {
    props: { user: req.session.user },
  };
}, sessionOptions);
