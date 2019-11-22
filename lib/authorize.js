import {useEffect} from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';
//
// export const auth = ({token, expires}) => {
//   cookie.set('token', token, {expires});
//   Router.push('/profile');
// };

export const authorize = ({token, expiry}) => {

  // If there's no token, it means the user is not logged in.
  if (!token) {
    // if front-end - send to login page
    if (typeof window !== 'undefined') {
      Router.push('/login');
    }

    // let callee know user is not authenticated
    return false;

  } else {
    cookie.set('authtoken', token + "", {expires: expiry});
    return {token, expiry};
  }
};

export const logout = () => {
  cookie.remove('token');
  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now());
  Router.push('/login');
};

export const withAuthSync = WrappedComponent => {
  const Wrapper = props => {
    const syncLogout = event => {
      if (event.key === 'logout') {
        console.log('logged out from storage!');
        Router.push('/login');
      }
    };

    useEffect(() => {
      window.addEventListener('storage', syncLogout);

      return () => {
        window.removeEventListener('storage', syncLogout);
        window.localStorage.removeItem('logout');
      };
    }, []);

    return <WrappedComponent {...props} />;
  };

  Wrapper.getInitialProps = async ctx => {
    const token = authorize(ctx);

    const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx));

    return {...componentProps, token};
  };

  return Wrapper;
};
