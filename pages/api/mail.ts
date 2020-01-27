import ReactDOMServer from 'react-dom/server';
import confirmationEmail from './../../email/templates/main/confirmationEmail';
import resetPasswordEmail from './../../email/templates/main/resetPasswordEmail';
import {Message} from '../..';
import {NextApiRequest, NextApiResponse} from "next";

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

const handleAction = (options: { action: string; username: string; email: string; data?: any }) => {
  const {action, username, email, data} = options;

  // handle the action requested
  switch (action) {
    case "confirm":
      return {
        subject: "Confirm your email.",
        html: ReactDOMServer.renderToStaticMarkup(confirmationEmail( {
          username,
          url: (process as any).env.HOST,
          token: data.token,
          title: "Comfirm your email.",
        })),
      };
    case "reset":
      return {
        subject: "Reset your password.",
        html: ReactDOMServer.renderToStaticMarkup(resetPasswordEmail( {
          username,
          email,
          url: (process as any).env.HOST,
          token: data.token,
          title: "Reset your password.",
        })),
      };
  }
};

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  // set headers
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.setHeader("Content-Type", "json/javascript");

  const {action, username, email, data} = req.body;

  if (!action || !username || !email) {
    res.send({
      status: false,
      message: "Invalid input",
    } as Message);
    return;
  }

  const mailOptions= Object.assign({
    from: '"Administrator" <' + process.env.MAILUSER + '>',
    to: String(email),
  }, handleAction({action, username, email, data}));


  transporter.sendMail(mailOptions, (err: any, info: string) => {
    if (err) {
      res.send({
        status: false,
        message: "Email failed to send.",
      } as Message);
    }

    console.log("Email log: ", info);
    res.send({
      status: true,
      message: "Email successfully sent.",
    } as Message);
  });
};
