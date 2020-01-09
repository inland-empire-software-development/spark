import Login from '../src/components/authenticate/Login';
import Signup from '../src/components/authenticate/Signup';
import Recovery from '../src/components/authenticate/Reset';
import Spinner from '../src/components/global/Spinner';
import SEO from "../next-seo.config";
import {DefaultSeo} from "next-seo";

function Authenticate() {
  return (
    <main>
      <DefaultSeo {...Object.assign(SEO, {
        title: `Authenticate`,
      })}
      />
      <section>
        <div id="login-container" className="uk-section uk-flex uk-flex-middle uk-animation-fade">

          <Spinner ratio={3} classes="uk-hidden"/>
          <div className="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body">
            <ul className="uk-tab uk-flex-center" uk-switcher="animation: uk-animation-fade">
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
      </section>
    </main>
  );
}

export default Authenticate;
