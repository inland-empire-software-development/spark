import '../sass/index.scss';
import App from 'next/app';
import Context from '../src/context';
import {redirects, unprotected} from '../src/pages';
import fetch from "isomorphic-unfetch";
import {DefaultSeo} from 'next-seo';
import SEO from '../next-seo.config';
import Unauthorized from "../src/components/global/Unauthorized";
import Redirect from "../src/components/animation/Redirect";
import Loader from "../src/components/animation/Loader";

export default class Portal extends App {
  state = {
    user: null,
    access: null,
    redirect: null,
    isPublic: null,
  };

  componentDidMount() {
    const {pathname} = this.props.router;
    const redirect = redirects[pathname] ? redirects[pathname].redirect : false;
    const isPublic = unprotected.includes(pathname);

    fetch(`http://localhost:3000/api/authenticate/auth`, {
      method: 'POST',
    })
        .then((res) => res.json())
        .then((data) => {
          this.setState({...data, redirect, isPublic});
        });
  };

  sendToLogin(redirect) {
    setTimeout(() => {
      if (document) {
        document.location.href = redirect;
      }
      console.log('redirecting...');
    }, 2000);
  }


  render() {
    const {Component, pageProps} = this.props;
    const {access, redirect, isPublic} = this.state;

    // if access and user values have a value now
    if (access !== null && redirect !== null) {
      // if user has access to page but there is a redirect
      if (access && redirect) {
        // send user to proper page if they're logged in
        this.sendToLogin(redirect);

        return <Redirect />;
      } else if (access || isPublic) {
        return (
          <Context.Provider value={{...this.state}}>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </Context.Provider>
        );
      } else if (!access) {
        return <Unauthorized/>;
      } else {
        return 'error';
      }
    } else {
      return <Loader/>;
    }
  }
}
