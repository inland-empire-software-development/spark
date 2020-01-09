import db from '../../../lib/db';
import {Response, Request, Message} from '../../..';

export default (req: Request, res: Response): void => {
  // set headers
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.setHeader("Content-Type", "json/javascript");

  // Get credentials from JSON body
  const {email, token, user, action, password} = req.body;

  function handlePasswordVerification() {
    console.log(req.body);
    db.verifyPasswordToken(escape(email), escape(token))
        .then((data: any) => {
          res.send(data);
        })
        .catch((error: Error) => {
          console.log(error);
        });
  }

  function handlePasswordResetInitiation(message: any) {
    const user = message.data.username;

    // will send email to user, starting the process
    // will also update two columns for user - password_token, password_reset
    if (user !== undefined) {
      db.initiatePasswordReset(escape(user), escape(email))
          .then((data: Message) => {
            res.send(data);
            console.log(data);
          })
          .catch((error: Error) => {
            console.log(error);
          });
    } else {
      res.send({
        status: false,
        message: "Invalid email provided.",
      } as Message);
    }
  }

  function handlePasswordReset() {
    if (token !== undefined && user !== undefined) {
      console.log(password, escape(password));
      db.passwordReset(escape(user), escape(token), escape(password))
          .then((data: any) => {
            res.send(data);
          }).catch((error: Error) => {
            console.log(error);
          });
    }
  }

  if (email && action) {
    db.getUserByEmail(escape(email))
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then(async (data: any) => {
          switch (action) {
            case "verify":
              handlePasswordVerification();
              break;
            case "initiate":
              handlePasswordResetInitiation(data);
              break;
            case "reset":
              handlePasswordReset();
              break;
            default:
              res.send({
                status: false,
                message: "Request denied.",
              });
          }
        });
  } else {
    res.send({
      status: false,
      message: "Request denied.",
    });
  }
};
