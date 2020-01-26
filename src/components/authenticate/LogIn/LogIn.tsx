import fetch from 'isomorphic-unfetch';
import React from 'react';
import notify from '../../utility/Notify';
import {Message} from '../../../../index';

import './Login.scss';
import Button from '../../global/Button/Button';

function LogIn(): JSX.Element {
  const handleLogin = () => {
    const username: HTMLSelectElement | null = document.querySelector('[name="login-username"]');
    const password: HTMLSelectElement | null = document.querySelector('[name="login-password"]');
    const spinner: HTMLElement | null = document.getElementById('spinner');

    // show spinner while working
    if (spinner) spinner.classList.remove('uk-hidden');

    // API route that will handle signing in
    const url = 'api/authenticate/login';
    const data = {
      username: username ? username.value : null,
      password: password ? password.value : null,
    };


    fetch(process.env.HOST + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
        .then((response: { json: () => any }) => response.json())
        .then((response: Message) => {
          const {status, message} = response;

          // hide spinner as work is essentially done
          if (spinner) spinner.classList.add('uk-hidden');

          if (status) {
            if ((process as any).browser && document && UIkit) {
              document.location.href = "/dashboard";
            }
          } else {
            notify({
              message,
              status: 'danger',
              pos: 'top-left',
              timeout: 1500,
            });
          }
        });
  };

  return (
    <section className="auth-login">
      <p className="uk-text-center">Sign in to your account</p>
      <form id="login-form" onSubmit={(e) => e.preventDefault()}>
        <div className="uk-margin">
          <div className="uk-inline uk-width-1-1">
            <i className="uk-form-icon fal fa-user" />
            <input className="uk-input uk-form-large" name="login-username" type="text" autoComplete="username"
              placeholder="username" required />
          </div>
        </div>
        <div className="uk-margin">
          <div className="uk-inline uk-width-1-1">
            <i className="uk-form-icon fal fa-lock-alt" />
            <input className="uk-input uk-form-large" name="login-password" type="password"
              autoComplete="current-password" placeholder="password" required />
          </div>
        </div>
        <div className="uk-margin uk-text-right@s uk-text-center uk-text-small">
          <a href="#" uk-switcher-item="2">Forgot Password?</a>
        </div>

        <Button
          label="login"
          callback={handleLogin}
          form="login-form"
          width="3"
        />

        <div className="uk-text-small uk-text-center">
          Not registered? <a href="#" uk-switcher-item="1">Create an account</a>
        </div>
      </form>
    </section>
  );
}

export default LogIn;
