import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import Context from '../src/components/context';
import Redirects from '../src/constants';

import fetch from "isomorphic-unfetch";

export default class MyApp extends App {
  state = {
    user: null,
    access: false
  }

  componentDidMount() {
    const {pathname} = this.props.router;
    const {redirect} = Redirects[pathname] || false;
    fetch(`http://localhost:3000/api/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({pathname, redirect}),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  signIn = (username, password) => {
    localStorage.setItem('coolapp-user', username);

    this.setState(
      {
        user: username
      },
      () => {
        Router.push('/');
      }
    );
  };

  signOut = () => {
    localStorage.removeItem('coolapp-user');
    this.setState({
      user: null
    });
    Router.push('/signin');
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Context.Provider value={{ user: this.state.user, signIn: this.signIn, signOut: this.signOut }}>
        <Component {...pageProps} />
      </Context.Provider>
    );
  }
}
