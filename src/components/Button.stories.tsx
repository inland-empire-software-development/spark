import * as React from 'react';
import {withA11y} from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';

export default {
  title: 'button',
  decorators: [withA11y, centered],
};

export const ButtonWithText = () => {
  return <button>hello</button>;
};

export const ButtonWithEmoji = () => {
  return <button>😂</button>;
};

