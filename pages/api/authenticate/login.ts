import db from '../../../lib/db';
import auth from '../../../lib/auth';
import client from '../../../lib/redis';
import {Response, Request, Message} from '../../..';

export default async (req: Request, res: Response) => {
  // set headers
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.setHeader("Content-Type", "json/javascript");

  // messages
  const invalid = {
    status: false,
    message: "invalid credentials",
  } as Message;
  const valid = {
    status: true,
    message: "access granted",
  } as Message;
  const unconfirmed = {
    status: false,
    message: "account has not been activated",
  } as Message;

  // Get credentials from JSON body
  const {username, password} = req.body;

  // get the user - initial check
  db.getUser(escape(username)).then((user: any) => {
    res.status(200);

    // if user is not found, return early
    if (!user) {
      res.send(invalid);
      return false;
    }

    // if user found, verify password matches
    if (auth.verifyPassword(password, user.password)) {
      if (user.confirmation === "active") {
        // password matched
      // create new token
        const token = auth.tokenize(username);

        // set token in redis
        client.setToken(username, token);

        // set HttpOnly cookie
        res.setHeader('Set-Cookie', [`portal-token=${token}; HttpOnly`, `portal-user=${username}; HttpOnly`]);
        res.send(valid);
        return true;
      } else {
        res.send(unconfirmed);
        return false;
      }
    } else {
      // let user know this was an invalid request
      res.send(invalid);
      return false;
    }
  });
};
