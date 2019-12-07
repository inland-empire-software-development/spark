import Login from '../src/components/Login';
import Signup from '../src/components/Signup';
import Recovery from '../src/components/Recovery';
import {useContext} from 'react';
import Context from '../src/context';
import Spinner from '../src/components/global/Spinner';

function Authenticate() {
  const {user, access, redirect, secure} = useContext(Context);
  console.log('user: ', user, ' access: ', access, ' secure: ', secure, ' redirect: ', redirect);
  return (
    <div className="uk-container">
      <div id="login-container" className="uk-section uk-position-top uk-flex uk-flex-middle uk-animation-fade" uk-height-viewport="true">
        <div className="uk-width-1-1 login-section">
          <div className="uk-container">
            <div className="uk-grid-margin uk-grid uk-grid-stack" uk-grid="true">
              <div className="uk-width-1-1@m">
                <img id="login-logo" src="/icon/icon-no-bg.svg" alt="Portal logo"/>
                <Spinner ratio={3} classes="uk-hidden"/>
                <div className="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body">
                  <ul className="uk-tab uk-flex-center" uk-grid="true" uk-switcher="animation: uk-animation-fade">
                    <li><a href="#">Log In</a></li>
                    <li><a href="#">Sign Up</a></li>
                    <li className="uk-hidden">Forgot Password?</li>
                  </ul>
                  <ul className="uk-switcher uk-margin">
                    <li>
                      <Login/>
                    </li>
                    <li>
                      <Signup/>
                    </li>
                    <li>
                      <Recovery/>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authenticate;
