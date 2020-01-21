import * as React from 'react';
import "./Button.scss";

import {withA11y} from '@storybook/addon-a11y';
import Button from '../Button/Button';

export default {
  title: 'Button',
  decorators: [withA11y],
};

export const DefaultButton = () =>
  <section className="uk-margin-large-top">
    <Button label="default button"/>
  </section>;

DefaultButton.story = {
  parameters: {
    notes: 'This is the default look for the button component.',
  },
};

export const GreenButton = () =>
  <section className="uk-margin-large-top">
    <Button label="green button" width="0" color="bg-green" border="border-green"/>
  </section>;

export const YellowButton = () =>
  <section className="uk-margin-large-top">
    <Button label="yellow button" width="0" color="bg-yellow" border="border-yellow"/>
  </section>;


export const BlueButton = () =>
  <section className="uk-margin-large-top">
    <Button label="blue button" width="0" color="bg-blue" border="border-blue"/>
  </section>;
