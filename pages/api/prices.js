import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from 'lib/session';
import fs from 'fs';

export default withIronSessionApiRoute(async (req, res) => {
  require('dotenv').config();
  if (req.session.user.pass !== process.env.PASS) {
    res.status(500).json({ message: 'AUTH FAILED' });
  }

  if (req.method === 'POST') {
    fs.writeFile(`data/products.json`, req.body, (err) => {
      if (err) throw err;
      res.json({ status: 'ok' });
      console.log('The file has been saved!');
    });
  }
  if (req.method === 'GET') {
    const products = require('../../data/products.json');
    res.json(products);
  }
}, sessionOptions);
