import cookie from 'js-cookie';

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const auth = {};

auth.verifyPassword = (password, hash) => bcrypt.compareSync(password, hash);

auth.tokenize = username => jwt.sign({username}, process.env.JWTKEY, {
  algorithm: 'HS256',
  expiresIn: 300,
});

auth.getInfo = () => {
  const token = cookie.get('auth-token');
  const user = cookie.get('auth-token-user');

  return token && user ? {token, user} : false;
};

export default auth;
