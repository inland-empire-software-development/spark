import * as React from 'react';
import {withA11y} from '@storybook/addon-a11y';

import SignUp from './SignUp';

export default {
  title: 'Sign Up',
  decorators: [withA11y],
};

export const SignUpForm = () => {
  return (
    <section>
      <div id="login-container" className="uk-section uk-flex uk-flex-middle uk-animation-fade">
        <div className="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body">
          <ul className="uk-tab uk-flex-center" uk-switcher="animation: uk-animation-fade">
            <li><a href="#">Sign Up</a></li>
          </ul>
          <ul className="uk-switcher uk-margin">
            <li>
              <SignUp/>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

SignUpForm.story = {
  parameters: {
    notes: "Basic sign up form.",
  },
};
