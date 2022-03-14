import { SWRConfig } from 'swr';
import fetchJson from 'lib/fetchJson';
import useUser from 'lib/useUser';
import useEvents from 'lib/useEvents';
import { Header, ProductsSetter } from '../components/complicated/Admin';
import { withIronSessionSsr } from 'iron-session/next';
import { sessionOptions } from 'lib/session';

function Admin({ user }) {
  // console.log("🚀 ~ file: admin.js ~ line 11 ~ Admin ~ user", user)
  // console.log("🚀 ~ file: admin.js ~ line 11 ~ Admin ~ user", user)
  // const { user } = useUser({
  //     redirectTo: "/login",
  // });
  // const { events } = useEvents(user);

  return (
    <>
      <Header />
      <div className={`text-center font-bold py-2 text-xl`}>ПАНЕЛЬ УПРАВЛЕНИЯ</div>
      {user?.isLoggedIn && (
        <>
          <ProductsSetter />
        </>
      )}
    </>
  );
}

export default Admin;
// export const getStaticProps = async (context) => {
//   console.log('🚀 ~ file: ProductsSetter.js ~ line 155 ~ getServerSideProps ~ context', context);
//   const res2 = await fetch(`https://localhost:3000/data/products.json`)
//     .then((resp) => {
//       resp.json();
//       // console.log('🚀 ~ file: prices.js ~ line 23 ~ .then ~ res', res);
//     })
//     .catch((err) => {
//       console.log('🚀 ~ file: prices.js ~ line 26 ~ withIronSessionApiRoute ~ err', err);
//       return null;
//     });
//   console.log('🚀 ~ file: ProductsSetter.js ~ line 156 ~ getServerSideProps ~ res', res2);

//   return {
//     props: {
//       todo,
//     },
//   };
// };
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
