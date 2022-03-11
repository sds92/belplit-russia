import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";

export default withIronSessionApiRoute(async (req, res) => {
    require('dotenv').config();
    if (req.session.user.pass !== process.env.PASS) {
        res.status(500).json({ message: 'AUTH FAILED' });
    }
    const products = require('../../data/products.json')
    res.json(products)


    //   console.log("🚀 ~ file: prices.js ~ line 9 ~ withIronSessionApiRoute ~ products", products)
    //   try {
    //     if (username === 'qwerty') {
    //       const login = 'qwerty'
    //       const user = { isLoggedIn: true, pass};
    //       req.session.user = user;
    //       await req.session.save();
    //       res.json(user);
    //     }

    //   } catch (error) {
    //     res.status(500).json({ message: error.message });
    //   }
}, sessionOptions);
