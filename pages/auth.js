import '../sass/index.scss';
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Login from '../components/pages/auth/Login';
import Signup from '../components/pages/auth/Signup';
import Recovery from '../components/pages/auth/Recovery';

function Auth(){
  return(
      <div id="login-container" className="uk-section uk-position-top uk-flex uk-flex-middle uk-animation-fade" uk-height-viewport="true">
        <div className="uk-width-1-1 login-section">
          <div className="uk-container">
            <div className="uk-grid-margin uk-grid uk-grid-stack" uk-grid="true">
              <div className="uk-width-1-1@m">
                <img id="login-logo" src="/icon/icon-no-bg.svg" />
                <div className="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body">
                  <ul className="uk-tab uk-flex-center" uk-grid="true" uk-switcher="animation: uk-animation-fade">
                    <li><a href="#">Log In</a></li>
                    <li><a href="#">Sign Up</a></li>
                    <li className="uk-hidden">Forgot Password?</li>
                  </ul>
                  <ul className="uk-switcher uk-margin">
                    <li>
                      {<Login/>}
                    </li>
                    <li>
                      {<Signup/>}
                    </li>
                    <li>
                      {<Recovery/>}
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
