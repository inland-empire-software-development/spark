import * as React from 'react';
import {withA11y} from '@storybook/addon-a11y';

import "./Footer.scss";
import Footer from './Footer';

export default {
  title: 'Footer',
  decorators: [withA11y],
};

export const DefaultFooter = () => <Footer/>;

DefaultFooter.story = {
  parameters: {
    notes: "Footer component",

  },
};
