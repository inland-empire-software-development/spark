import fetch from 'isomorphic-unfetch';
import cookie from 'js-cookie';
import client from '../../lib/redis';

export default async (req,res) => {
  const {token, user} = req.body;

  console.log('shit', await client.checkToken(user, token));
  if (client.checkToken(user, token)) {
    console.log('access granted - auth API');
    res.status(200);
    res.send({
      access: true,
      message: 'access granted!'
    })
    return true;
  } else {
    console.log('access denied - auth API');
    res.send({
      access: false,
      message: "access denied!"
    })

    return false;
  }
}
