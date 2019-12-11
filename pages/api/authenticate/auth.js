import client from '../../../lib/redis';

export default async (req, res) => {
  const token = req.cookies['portal-token'];
  const user = req.cookies['portal-user'];
  const access = await client.checkToken(user, token);

  const data = {
    user, // user that will be rendered on the front-end
    access, // is user authenticated / valid?
  };

  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.status(200);
  res.send(data);
};
