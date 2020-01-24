import * as React from 'react';
import {withA11y} from '@storybook/addon-a11y';
import "../../../style/index.scss";
import "./Redirect.scss";
import Redirect from './Redirect';

export default {
  title: 'Redirect',
  decorators: [withA11y],
};

export const DefaultRedirect = () => <Redirect/>;

DefaultRedirect.story = {
  parameters: {
    notes: 'Use this component while a whole page is redirecting.',
  },
};

