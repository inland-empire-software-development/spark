import fetch from 'isomorphic-unfetch';
import cookie from 'js-cookie';
import client from '../../lib/redis';

export default async (req,res) => {
  const {token, user} = req.body;

  if (client.checkToken(user, token)) {
    res.status(200);
    res.send({
      access: true,
      message: 'access granted!'
    })
  } else {
    res.status(400);
    res.send({
      access: false,
      message: "access denied!"
    })
  }
}
