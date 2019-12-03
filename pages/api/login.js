import db from '../../lib/db';
import auth from '../../lib/auth';
import client from '../../lib/redis';

export default async (req, res) => {
  // set headers
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.setHeader("Content-Type", "application/javascript");

  // messages
  const invalid = {
    message: "invalid request",
  };
  const valid = {
    message: "valid request",
  };

  // Get credentials from JSON body
  const {username, password} = req.body;

  // get the user - initial check
  db.getUser(escape(username)).then((user) => {
    res.status(200);

    // if user is not found, return early
    if (!user) {
      res.send(invalid);
      return false;
    }

    // if user found, verify password matches
    if (auth.verifyPassword(password, user.password)) {
      // password matched
      // create new token
      const token = auth.tokenize(username);

      // set token in redis
      client.setToken(username, token);

      // set HttpOnly cookie
      res.setHeader('Set-Cookie', [`portal-token=${token}; HttpOnly`, `portal-user=${username}`]);
      res.send(valid);
      return true;
    } else {
      // let user know this was an invalid request
      res.send(invalid);
      return false;
    }
  });
};
