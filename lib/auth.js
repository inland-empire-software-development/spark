const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const auth = {};

auth.verifyPassword = (password, hash) => bcrypt.compareSync(password, hash);

auth.tokenize = (username) => jwt.sign({username}, process.env.JWTKEY, {
  algorithm: 'HS256',
  expiresIn: 300,
});

export default auth;
