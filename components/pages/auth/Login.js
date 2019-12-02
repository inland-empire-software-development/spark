import React, {useEffect, useState} from 'react';
import fetch from 'isomorphic-unfetch';
import cookie from 'js-cookie';
import Router from 'next/router';

function Login() {

  const handleLogin = e => {
    e.preventDefault();

    const username = document.querySelector('[name="login-username"]').value;
    const password = document.querySelector('[name="login-password"]').value;

    // API route that will handle signing in
    const url = '/api/login';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, password}),
    }).then(response => response.json()).then(response => {
      const {token, message, state} = response;

      if (state) {
        cookie.set('auth-token', token, {expires: 7});
        cookie.set('auth-token-user', username, {expires: 7});

        Router.push('/profile');
      } else {
        // let user know failed user/pass
      }

    });

  };

  return (
      <section className="auth-login">
        <p className="uk-text-center">Sign in to your account</p>
        <form onSubmit={e => handleLogin(e)}>
          <div className="uk-margin">
            <div className="uk-inline uk-width-1-1">
              <i className="uk-form-icon fal fa-user"/>
              <input className="uk-input uk-form-large" name="login-username" type="text" autoComplete="username"
                     placeholder="username"/>
            </div>
          </div>
          <div className="uk-margin">
            <div className="uk-inline uk-width-1-1">
              <i className="uk-form-icon fal fa-lock-alt"/>
              <input className="uk-input uk-form-large" name="login-password" type="password"
                     autoComplete="current-password" placeholder="password"/>
            </div>
          </div>
          <div className="uk-margin uk-text-right@s uk-text-center uk-text-small">
            <a href="#" uk-switcher-item="2">Forgot Password?</a>
          </div>
          <div className="uk-margin">
            <button className="uk-button bg-primary white uk-button-large uk-width-1-1">Login</button>
          </div>
          <div className="uk-text-small uk-text-center">
            Not registered? <a href="#" uk-switcher-item="1">Create an account</a>
          </div>
        </form>
      </section>
  );
}

export default Login;
