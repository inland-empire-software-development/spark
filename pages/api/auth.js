import client from '../../lib/redis';

export default async (req, res) => {
  const token = req.cookies['portal-token'];
  const user = req.cookies['portal-user'];

  console.log(req);
  const access = await client.checkToken(user, token);

  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.status(200);
  res.send({
    access,
  });
};
