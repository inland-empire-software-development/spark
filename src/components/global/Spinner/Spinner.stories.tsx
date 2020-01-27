import * as React from 'react';
import {withA11y} from '@storybook/addon-a11y';
import "../../../style/index.scss";
import "./Spinner.scss";
import Spinner from '../Spinner/Spinner';

export default {
  title: 'Spinner',
  decorators: [withA11y],
};

export const DefaultSpinner = () => <Spinner ratio={3}/>;

DefaultSpinner.story = {
  parameters: {
    notes: 'This component is used whenever a user has to wait for something to finish loading.',
  },
};

