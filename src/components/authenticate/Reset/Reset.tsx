import React from 'react';
import notify from '../../utility/Notify';

function Reset(): JSX.Element {
  const handleReset = (e: any) => {
    e.preventDefault();

    // API route that will handle initiating password reset process.
    const url = '/api/authenticate/reset';
    const email = document.getElementById('email') as HTMLInputElement;
    const spinner: HTMLElement | null = document.getElementById('spinner');

    // show spinner while working
    if (spinner) spinner.classList.remove('uk-hidden');

    const data = {
      email: email.value,
      action: "initiate",
    };

    fetch(process.env.HOST + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json())
        .then((response) => {
          const {status, message} = response;
          // hide spinner as work is essentially done
          if (spinner) spinner.classList.add('uk-hidden');

          notify({
            message,
            status: status ? 'success' : 'danger',
            pos: 'top-left',
            timeout: 5000,
          });
        }).catch((error) => {
          console.log(error);
        });
  };

  return (
    <section className="auth-recovery">
      <h3 className="uk-text-center">Forgot your password?</h3>
      <p className="uk-text-center uk-width-medium@s uk-margin-auto">Enter account email address and we will send you an email to reset your password.</p>
      <form onSubmit={(event) => handleReset(event)}>
        <div className="uk-margin">
          <div className="uk-inline uk-width-1-1">
            <i className="uk-form-icon fa fa-envelope"/>
            <input id="email" className="uk-input uk-form-large" type="email" placeholder="Email address" required/>
          </div>
        </div>
        <div className="uk-margin">
          <button type="submit" className="uk-button bg-primary black uk-button-large uk-width-1-1">Send Email</button>
        </div>
        <div className="uk-text-small uk-text-center">
          <a href="#" uk-switcher-item="0">Back to login</a>
        </div>
      </form>
    </section>
  );
}

export default Reset;
