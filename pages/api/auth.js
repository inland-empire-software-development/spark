import client from '../../lib/redis';

export default async (req, res) => {
  const token = req.cookies['portal-token'];
  const user = req.cookies['portal-user'];
  const access = await client.checkToken(user, token);
  const redirect = req.body.hasOwnProperty("redirect") ? req.body.redirect : false;
  const secure = req.body.hasOwnProperty("secure") ? req.body.secure : true;

  const data = {
    user,
    access,
    secure,
    redirect,
  };

  // if no authentication is required
  // check if there is a page to redirect to

  //
  // // if logged in but reverse is false - render
  // // if logged out but reverse is true, render
  // if ((access && !noAuthRequired) || (!access && noAuthRequired) ) return content;
  //
  // // if you have access and reverse is set to true,
  // // redirect - default = dashboard
  // if (access && reverse) {
  //   Router.push(url);
  //   return <Spinner/>;
  // }
  //
  // // user is not authorized
  // if (!access && !reverse) return <Unauthorized/>;

  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.status(200);
  res.send(data);
};
