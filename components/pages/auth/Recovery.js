import React from 'react';

function Recovery(){
  return(
      <section className="auth-recovery">
        <h3 className="uk-text-center">Forgot your password?</h3>
        <p className="uk-text-center uk-width-medium@s uk-margin-auto">Enter your email address and we will send you a link to reset your password.</p>
        <form>
          <div className="uk-margin">
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon" uk-icon="icon: mail" />
              <input className="uk-input uk-form-large" type="text" placeholder="Email address" />
            </div>
          </div>
          <div className="uk-margin">
            <button className="uk-button bg-primary white uk-button-large uk-width-1-1">Send Email</button>
          </div>
          <div className="uk-text-small uk-text-center">
            <a href="#" uk-switcher-item="0">Back to login</a>
          </div>
        </form>
      </section>
  );
}

export default Recovery;
