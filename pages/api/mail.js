const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.MAILHOST,
  port: process.env.MAILPORT,
  auth: {
    user: process.env.MAILUSER,
    pass: process.env.MAILPASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export default async (req, res) => {
  const mailOptions= {
    from: '"Administrator" <admin@iesd.com>',
    to: 'lloanalas@outlook.com',
    subject: "Email Test",
    text: "This is an email test",
  };


  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      res.send({
        message: "Email failed.",
      });
    }
    console.log("Info: ", info);
    res.send({
      message: "Email successfully sent.",
    });
  });
};
