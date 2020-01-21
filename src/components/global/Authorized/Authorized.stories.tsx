import * as React from 'react';
import {withA11y} from '@storybook/addon-a11y';
import "./Authorized.scss";
import Authorized from '../Authorized/Authorized';

export default {
  title: 'Authorized',
  decorators: [withA11y],
};

export const Default = () =>
  <section className="uk-margin-large-top">
    <Authorized/>
  </section>;

Default.story = {
  parameters: {
    notes: 'This component is used whenever a user has been access granted to something globally.',
  },
};
