import client from '../../lib/redis';
import {pages} from '../../lib/config';
import Spinner from '../../components/global/Spinner';
import Router from 'next/router';
import Unauthorized from '../../components/global/Unauthorized';

export default async (req, res) => {
  const token = req.cookies['portal-token'];
  const user = req.cookies['portal-user'];
  const access = await client.checkToken(user, token);
  const {pathname} = req.body;
  const noAuthRequired = pages.hasOwnProperty("shit");
  const data = {
    user,
    access
  };

  // if no authentication is required
    // check if there is a page to redirect to
    if (access && noAuthRequired && pages[pathname]) {
      data.redirect = pages[pathname];
    } else if (noAuthRequired && !pages[pathname]) {
      data.access = true;
      data.redirect = false;
    }
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
  res.send({
    access,
    user
  });
};
