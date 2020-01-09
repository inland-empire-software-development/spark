const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const auth: any = {}; // TODO: Find a suitable type

auth.verifyPassword = (password: string, hash: string) => bcrypt.compareSync(password, hash);

auth.tokenize = (username: string) => jwt.sign({username}, process.env.JWTKEY, {
  algorithm: 'HS256',
  expiresIn: 300,
});

export default auth;
