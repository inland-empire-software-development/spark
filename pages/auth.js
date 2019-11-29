import '../sass/index.scss';
import React, {useState, useEffect} from 'react';
import Link from 'next/link';

function Auth(){
  return(
      <div id="login-container" className="uk-section bg-offwhite uk-flex uk-flex-middle uk-animation-fade" uk-height-viewport="true">
        <div className="uk-width-1-1">
          <div className="uk-container">
            <div className="uk-grid-margin uk-grid uk-grid-stack" uk-grid="true">
              <div className="uk-width-1-1@m">
                <img id="login-logo" src="/images/login/logo.png" />
                <div className="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body">
                  <ul className="uk-tab uk-flex-center" uk-grid="true" uk-switcher="animation: uk-animation-fade">
                    <li><a href="#">Log In</a></li>
                    <li><a href="#">Sign Up</a></li>
                    <li className="uk-hidden">Forgot Password?</li>
                  </ul>
                  <ul className="uk-switcher uk-margin">
                    <li>
                      <h3 className="uk-card-title uk-text-center">Sign in to your account</h3>
                      <form>
                        <div className="uk-margin">
                          <div className="uk-inline uk-width-1-1">
                            <span className="uk-form-icon" uk-icon="icon: user"></span>
                            <input className="uk-input uk-form-large" type="text" placeholder="username" />
                          </div>
                        </div>
                        <div className="uk-margin">
                          <div className="uk-inline uk-width-1-1">
                            <span className="uk-form-icon" uk-icon="icon: lock"></span>
                            <input className="uk-input uk-form-large" type="password" placeholder="password" />
                          </div>
                        </div>
                        <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                          <label>
                            <input className="uk-checkbox" type="checkbox" /> Remember me
                          </label>
                        </div>
                        <div className="uk-margin uk-text-right@s uk-text-center uk-text-small">
                          <a href="#" uk-switcher-item="2">Forgot Password?</a>
                        </div>
                        <div className="uk-margin">
                          <button className="uk-button bg-primary white uk-button-large uk-width-1-1">Login</button>
                        </div>
                        <div className="uk-text-small uk-text-center">
                          Not registered? <a href="#" uk-switcher-item="0">Create an account</a>
                        </div>
                      </form>
                    </li>
                    <li>
                      <h3 className="uk-card-title uk-text-center">Sign up today. It's free!</h3>
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
                        <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                          <label>
                            <input className="uk-checkbox" type="checkbox" /> I agree the Terms and Conditions.
                          </label>
                        </div>
                        <div className="uk-margin">
                          <button className="uk-button bg-primary white uk-button-large uk-width-1-1">Login</button>
                        </div>
                        <div className="uk-text-small uk-text-center">
                          Already have an account? <a href="#" uk-switcher-item="1">Log in</a>
                        </div>
                      </form>
                    </li>
                    <li>
                      <h3 className="uk-card-title uk-text-center">Forgot your password?</h3>
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
                          <a href="#" uk-switcher-item="1">Back to login</a>
                        </div>
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

)
}

export default Auth;
