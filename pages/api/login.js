import db from '../../lib/db';
import auth from '../../lib/auth';
import client from '../../lib/redis';

export default async (req, res) => {
  // Get credentials from JSON body
  const {username, password} = req.body;

  db.getUser(escape(username)).then(user => {
    if (!user) {
      res.status(400);
      res.send({message: "invalid user..."});
      return false;
    }

    // if user successfully logged in
    if (auth.verifyPassword(password,user.password)){
      // create new token
      const token = auth.tokenize(username);

      // set token in redis
      client.setToken(username, token);

      // set status
      res.status(200);

      // send token back to save as a cookie in browser
      res.send({token, username})
    } else {
      res.status(400);
      res.send({message: "unsuccessful login attempt!"})
    }

  });


}
