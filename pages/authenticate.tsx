import Login from '../src/components/authenticate/Login';
import Signup from '../src/components/authenticate/Signup';
import Recovery from '../src/components/authenticate/Reset';
import Spinner from '../src/components/global/Spinner/Spinner';
import SEO from "../next-seo.config";
import {DefaultSeo} from "next-seo";

function Authenticate() {
  return (
    <main className="uk-container">
      <Spinner ratio={5} classes="uk-hidden"/>
      <DefaultSeo {...Object.assign(SEO, {
        title: `Authenticate`,
      })}
      />
      <section className="uk-position-center">
        <ContentContainer content={
          <div>

            <div className="uk-margin uk-margin-auto uk-card uk-card-default uk-card-body">
              <ul className="uk-tab uk-flex-center" uk-switcher="animation: uk-animation-fade">
                <li><a href="#">Log In</a></li>
                <li><a href="#">Sign Up</a></li>
                <li className="uk-hidden">Forgot Password?</li>
              </ul>
              <ul className="uk-switcher uk-margin">
                <li>
                  <LogIn/>
                </li>
                <li>
                  <SignUp/>
                </li>
                <li>
                  <Reset/>
                </li>
              </ul>
            </div>
          </div>
        }/>
      </section>
    </main>
  );
}

export default Authenticate;
