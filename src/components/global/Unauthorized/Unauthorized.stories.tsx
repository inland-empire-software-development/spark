import * as React from 'react';
import {withA11y} from '@storybook/addon-a11y';
import "./Unauthorized.scss";
import Unauthorized from '../Unauthorized/Unauthorized';

export default {
  title: 'Unauthorized',
  decorators: [withA11y],
};

export const AccessDenied = () => <Unauthorized/>;

AccessDenied.story = {
  parameters: {
    notes: 'This component is used whenever a user has been access granted to something globally.',
  },
};
