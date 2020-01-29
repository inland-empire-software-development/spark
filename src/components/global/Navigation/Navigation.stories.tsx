import * as React from 'react';
import {withA11y} from '@storybook/addon-a11y';
import "../../../style/index.scss";
import "./Navigation.scss";
import Navigation from './Navigation';

export default {
  title: 'Navigation',
  decorators: [withA11y],
};

export const BasicNavigation = () =>
  <Navigation/>;
