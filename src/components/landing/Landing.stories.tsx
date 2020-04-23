import React from 'react';
import {storiesOf} from '@storybook/react';
import Landing from '../landing/Landing';

storiesOf('Landing', module).add('landing page', () => {
  return <Landing />;
});
