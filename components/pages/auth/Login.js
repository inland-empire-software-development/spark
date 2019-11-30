import React from 'react';

function Login(){
  return(
      <section className="auth-login">
        <p className="uk-text-center">Sign in to your account</p>
        <form>
          <div className="uk-margin">
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon" uk-icon="icon: user"/>
              <input className="uk-input uk-form-large" name="login-username" type="text" placeholder="username" />
            </div>
          </div>
          <div className="uk-margin">
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon" uk-icon="icon: lock"/>
              <input className="uk-input uk-form-large" name="login-password" type="password" placeholder="password" />
            </div>
          </div>
          <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
            <label>
              <input className="uk-checkbox" name="login-remember" type="checkbox" /> Remember me
            </label>
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
  )
}

export default Login;
