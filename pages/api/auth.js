import client from '../../lib/redis';

export default async (req, res) => {
  const {token, user} = req.body;
  const access = await client.checkToken(user, token);

  res.setHeader("Cache-Control", "no-store, no-cache," +
    " must-revalidate, proxy-revalidate");
  res.setHeader("Content-Type", "application/javascript");
  res.setHeader("Service-Worker-Allowed", "/");
  res.statusCode = 200;

  res.send({
    access,
  });
};
