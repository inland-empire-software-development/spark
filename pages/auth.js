import '../sass/index.scss';
import Login from '../src/components/pages/auth/Login';
import Signup from '../src/components/pages/auth/Signup';
import Recovery from '../src/components/pages/auth/Recovery';
import Spinner from '../src/components/global/Spinner';

function Authenticate() {
  return (
    <div id="login-container" className="uk-section uk-position-top uk-flex uk-flex-middle uk-animation-fade" uk-height-viewport="true">
      <Spinner/>
      <div className="uk-width-1-1 login-section">
        <div className="uk-container">
          <div className="uk-grid-margin uk-grid uk-grid-stack" uk-grid="true">
            <div className="uk-width-1-1@m">
              {/* <img id="login-logo" src="/icon/icon-no-bg.svg" />*/}
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
  );
}

export default Authenticate;
