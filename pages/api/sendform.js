export default function (req, res) {
  require('dotenv').config();
  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: process.env.EMAIL_PORT,
    host: `${process.env.EMAIL_HOST}`,
    auth: {
      user: `${process.env.EMAIL_SENDER}`,
      pass: `${process.env.EMAIL_SENDER_PASS}`,
    },
    secure: true,
  });
  const mailData = {
    from: `${process.env.EMAIL_SENDER}`,
    to: `${process.env.EMAIL_SENDER}`,
    subject: `Запрос от ${req.body.clientName}`,
    text: `текст запроса: ${req.body.body} \n тел: ${req.body.clientPhone} \n email: ${req.body.clientEmail}`,
    html: <div></div>,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) res.status(500).json({ ok: false });
    else res.status(200).json({ ok: true });
  });
  
}
