import * as React from 'react';
import {withA11y} from '@storybook/addon-a11y';
//Logout component

import LogOut from './LogOut';

export default {
  title: 'Log Out',
  decorators: [withA11y],
};

export const LogOutForm = () =>
  <section className="uk-position-center">
    <LogOut/>
  </section>;

LogOutForm.story = {
  parameters: {
    notes: 'Basic log out form',
  },
};
