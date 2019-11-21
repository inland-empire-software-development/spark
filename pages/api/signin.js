import {auth} from '../../utils/auth';
import {db} from '../../lib/db';
const jwt = require('jsonwebtoken');

const jwtKey = 'my_secret_key';
const jwtExpirySeconds = 300;

const users = {
  user1: 'password1',
  user2: 'password2',
};

export default (req, res) => {
  const users = db('SELECT * FROM iesd_portal.users');
  console.log(users);

  // Get credentials from JSON body
  const {username, password} = req.body;
  console.log("req body: ", req.body);
  if (!username || !password || users[username] !== password) {
    // return 401 error is username or password doesn't exist, or if password does
    // not match the password in our records
    return res.status(401).end();
  }

  // Create a new token with the username in the payload
  // and which expires 300 seconds after issue
  const token = jwt.sign({username}, jwtKey, {
    algorithm: 'HS256',
    expiresIn: jwtExpirySeconds,
  });


  // set the cookie as the token string, with a similar max age as the token
  // here, the max age is in milliseconds, so we multiply by 1000
  res.send({
    token,
    expiry: jwtExpirySeconds * 1000
  });

  res.statusCode = 200;
  res.end();
}
