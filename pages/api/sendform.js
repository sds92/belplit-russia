export default function (req, res) {
  require('dotenv').config();
  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: parseInt(req.body.EMAIL_PORT || process.env.EMAIL_PORT),
    host: `${req.body.EMAIL_HOST || process.env.EMAIL_HOST}`,
    auth: {
      user: `${req.body.EMAIL_SENDER || process.env.EMAIL_SENDER}`,
      pass: `${req.body.EMAIL_SENDER_PASS || process.env.EMAIL_SENDER_PASS}`,
    },
    secure: true,
    tls: {
      rejectUnauthorized: false,
    },
  });

  let html = `<h1>Вы получили обращение от клиента ${req.body.clientName} с сайта ${req.body.fromSite}</h1><h2>Информация о клиенте</h2><ul><li>Имя: ${req.body.clientName}</li><li>Телефон: ${req.body.clientPhone}</li><li>Email: ${req.body.clientEmail}</li></ul><h2>Текст обращения</h2><p>${req.body.body}</p> `;
  console.log('🚀 html', req.body.to);
  console.log('🚀 html', html);

  let text = `${JSON.stringify(req.body)}`;

  const mailData = {
    from: `${req.body.EMAIL_SENDER || process.env.EMAIL_SENDER}`,
    to: `helloworld1823@gmail.com`,
    subject: `Новое сообщение от ${req.body.clientName}`,
    text: text,
    html: html,
  };
  transporter.sendMail(mailData, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200);
}
