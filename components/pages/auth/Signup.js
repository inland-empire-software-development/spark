import React from 'react';

function Signup(){
  return(
      <section className="auth-signup">
        <p className="uk-text-center">Sign up today. It's free!</p>
        <form>
          <div className="uk-margin">
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon" uk-icon="icon: user" />
              <input className="uk-input uk-form-large" type="text" placeholder="username" />
            </div>
          </div>
          <div className="uk-margin">
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon" uk-icon="icon: lock" />
              <input className="uk-input uk-form-large" type="password" placeholder="set password" />
            </div>
          </div>
          <div className="uk-margin">
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon" uk-icon="icon: lock" />
              <input className="uk-input uk-form-large" type="password" placeholder="confirm password" />
            </div>
          </div>
          <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
            <label>
              <input className="uk-checkbox" type="checkbox" /> I agree the Terms and Conditions.
            </label>
          </div>
          <div className="uk-margin">
            <button className="uk-button bg-primary white uk-button-large uk-width-1-1">Login</button>
          </div>
          <div className="uk-text-small uk-text-center">
            Already have an account? <a href="#" uk-switcher-item="0">Log in</a>
          </div>
        </form>
      </section>
  );
}

export default Signup;
