import fetch from 'isomorphic-unfetch';
import {FormEvent} from 'react';
import notify from '../utility/Notify';
import {Message} from '../../..';

function Login(): JSX.Element {
  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const username: HTMLSelectElement | null = document.querySelector('[name="login-username"]');
    const password: HTMLSelectElement | null = document.querySelector('[name="login-password"]');
    const spinner: HTMLElement | null = document.getElementById('spinner');

    // show spinner while working
    if (spinner) spinner.classList.remove('uk-hidden');

    // API route that will handle signing in
    const url = '/api/authenticate/login';
    const data = {
      username: username ? username.value : null,
      password: password ? password.value : null,
    };


    fetch(url, {
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
              timeout: 5000,
            });
          }
        });
  };

  return (
    <section className="auth-login">
      <p className="uk-text-center">Sign in to your account</p>
      <form onSubmit={(event: any) => handleLogin(event)}>
        <div className="uk-margin">
          <div className="uk-inline uk-width-1-1">
            <i className="uk-form-icon fa fa-user" />
            <input className="uk-input uk-form-large" name="login-username" type="text" autoComplete="username"
              placeholder="username" required />
          </div>
        </div>
        <div className="uk-margin">
          <div className="uk-inline uk-width-1-1">
            <i className="uk-form-icon fa fa-lock" />
            <input className="uk-input uk-form-large" name="login-password" type="password"
              autoComplete="current-password" placeholder="password" required />
          </div>
        </div>
        <div className="uk-margin uk-text-right@s uk-text-center uk-text-small">
          <a href="#" uk-switcher-item="2">Forgot Password?</a>
        </div>
        <div className="uk-margin">
          <button type="submit" className="uk-button bg-primary black uk-button-large uk-width-1-1">Login</button>
        </div>
        <div className="uk-text-small uk-text-center">
          Not registered? <a href="#" uk-switcher-item="1">Create an account</a>
        </div>
      </form>
    </section>
  );
}

export default Login;
