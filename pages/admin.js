import { SWRConfig } from "swr";
import fetchJson from "lib/fetchJson";
import useUser from "lib/useUser";
import useEvents from "lib/useEvents";
import { Header, ProductsSetter } from '../components/complicated/Admin'
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "lib/session";


function Admin({user}) {
    // console.log("🚀 ~ file: admin.js ~ line 11 ~ Admin ~ user", user)
    // console.log("🚀 ~ file: admin.js ~ line 11 ~ Admin ~ user", user)
    // const { user } = useUser({
    //     redirectTo: "/login",
    // });
    // const { events } = useEvents(user);
    

    return (
        <>
            <Header />
            <div>ПАНЕЛЬ УПРАВЛЕНИЯ</div>
            {user?.isLoggedIn && (
                <>
                    <ProductsSetter />
                </>
            )}
        </>
    );
}

export default Admin;

export const getServerSideProps = withIronSessionSsr(async function ({
    req,
    res,
}) {
    const user = req.session.user;

    if (user === undefined) {
        return {
            props: {
                user: { isLoggedIn: false, pass: "" },
            },
        };
    }

    return {
        props: { user: req.session.user },
    };
},
    sessionOptions);
