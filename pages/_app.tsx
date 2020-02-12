import '../src/style/index.scss';
import App from 'next/app';
import Context from '../src/context';
import {redirects, unprotected} from '../src/pages';
import fetch from "isomorphic-unfetch";
import {DefaultSeo} from 'next-seo';
import SEO from '../next-seo.config';
import Unauthorized from "../src/components/global/Unauthorized/Unauthorized";
import Redirect from "../src/components/animation/Redirect/Redirect";
import Loader from "../src/components/animation/Loader/Loader";
import {MyAppContext} from "../";

interface MyAppState extends MyAppContext {
  isAccessFetched: boolean;
}

export default class MyApp extends App<{}, {}, MyAppState> {
  state: MyAppState = {
    user: undefined,
    access: false,
    redirect: undefined,
    isPublic: false,
    isAccessFetched: false,
    userID: undefined,
  }

  componentDidMount(): void {
    const {pathname} = this.props.router;
    const redirect = redirects[pathname] ? redirects[pathname].redirect : undefined;
    const isPublic = unprotected.includes(pathname);

    fetch(`${process.env.HOST}api/authenticate/auth`, {
      method: 'POST',
    })
        .then((res) => res.json())
        .then((data) => {
          this.setState({...data, redirect, isPublic, isAccessFetched: true});
        });
  };

  redirect(redirect: string) {
    setTimeout(() => {
      if ((process as any).browser) {
        document.location.href = redirect;
      }
      console.log('redirecting...');
    }, 2000);
  }

  render() {
    const {Component, pageProps} = this.props;
    const {access, redirect, isPublic, isAccessFetched} = this.state;

    if (isAccessFetched) {
      if (access && redirect) {
        // send user to proper page if they're logged in
        this.redirect(redirect);
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
        this.redirect("/authenticate");
        return <Redirect/>;
      }
    } else {
      return <Loader />;
    }
  }
}
