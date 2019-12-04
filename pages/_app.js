import React from 'react';
import App from 'next/app';

class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props;

    return (
      <UserContext.Provider value={{user: this.state.user, signIn: this.signIn, signOut: this.signOut}}>
        <Component {...pageProps} />
      </UserContext.Provider>
    );
  }
}

export default MyApp;
