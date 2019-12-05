import '../sass/index.scss';
import App from 'next/app';
import Context from '../src/components/context';
import Redirects from '../src/redirects';
import fetch from "isomorphic-unfetch";

import Spinner from "../src/components/global/Spinner";
import Unauthorized from "../src/components/global/Unauthorized";
import Redirect from "../src/components/animation/Redirect";

export default class Portal extends App {
  state = {
    user: null,
    access: null,
    redirect: null,
    public: null,
  };

  componentDidMount() {
    const {pathname} = this.props.router;
    const redirect = Redirects[pathname] ? Redirects[pathname].redirect : false;

    fetch(`http://localhost:3000/api/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({pathname, redirect}),
    })
        .then((res) => res.json())
        .then((data) => {
          this.setState({...data, redirect});
        });
  };

  sendToLogin(redirect) {
    setTimeout(() => {
      if (document) {
        document.location.href = redirect;
      }
      console.log('redirecting...');
    }, 1000);
  }

  render() {
    const {Component, pageProps} = this.props;
    const {access, user, redirect} = this.state;

    // if access and user values have a value now
    if (access !== null && user !== null && redirect !== null) {
      // if user has access to page but there is a redirect
      if (access && redirect) {
        // send user to proper page if they're logged in
        this.sendToLogin(redirect);

        return <Redirect />;
      } else if (access) {
        return (
          <Context.Provider value={{...this.state}}>
            <Component {...pageProps} />
          </Context.Provider>
        );
      } else if (!access) {
        return <Unauthorized/>;
      } else {
        return 'error';
      }
    } else {
      return <Spinner />;
    }
  }
}
