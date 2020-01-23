import * as React from 'react';
import {withA11y} from '@storybook/addon-a11y';

import Password from './Password';

export default {
  title: 'Password',
  decorators: [withA11y],
};

export const PasswordForm = () => {
  return (
    <div id="login-container" className="uk-section uk-flex uk-flex-middle uk-animation-fade uk-margin-large-top">
      <div className="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body">
        <Password/>
      </div>
    </div>
  );
};

PasswordForm.story = {
  parameters: {
    notes: "Basic password form.",
  },
};
