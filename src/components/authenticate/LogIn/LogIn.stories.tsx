import * as React from 'react';
import {withA11y} from '@storybook/addon-a11y';

import './../../../style/pages/_authenticate.scss';
import LogIn from './LogIn';
import Spinner from "../../global/Spinner/Spinner";

export default {
  title: 'Log in',
  decorators: [withA11y],
};

export const LogInForm = () => {
  return (
    <section>
      <div id="login-container" className="uk-section uk-flex uk-flex-middle uk-animation-fade">
        <Spinner ratio={3} classes="uk-hidden"/>
        <div className="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body">
          <ul className="uk-tab uk-flex-center">
            <li><a>Log In</a></li>
          </ul>
          <ul className="uk-list uk-margin">
            <li>
              <LogIn/>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

LogInForm.story = {
  parameters: {
    notes: "Basic log in form.",
  },
};
