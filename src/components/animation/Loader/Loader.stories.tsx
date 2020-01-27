import * as React from 'react';
import {withA11y} from '@storybook/addon-a11y';
import "../../../style/index.scss";
import "./Loader.scss";
import Loader from './Loader';

export default {
  title: 'Loader',
  decorators: [withA11y],
};

export const DefaultLoader = () => <Loader/>;

DefaultLoader.story = {
  parameters: {
    notes: 'Use this component while a whole page is loading.',
  },
};

