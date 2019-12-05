import App from 'next/app';
import Context from '../src/components/context';
import Redirects from '../src/redirects';
import '../sass/index.scss';
import fetch from "isomorphic-unfetch";
import Spinner from "../src/components/global/Spinner";

export default class Portal extends App {
  state = {
    user: null,
    secure: true, // assume all pages are secure by default
    access: null,
    redirect: null,
  };

  componentDidMount() {
    const {pathname} = this.props.router;
    const redirect = Redirects[pathname] ? Redirects[pathname].redirect : false;

    if (process.env.DEBUG) {
      console.log('redirect: ', redirect);
    }

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

  render() {
    const {Component, pageProps} = this.props;
    const {access} = this.state;

    if (access) {
      return (
        <Context.Provider value={{...this.state}}>
          <Component {...pageProps} />
        </Context.Provider>
      );
    } else {
      return <Spinner />;
    }
  }
}
