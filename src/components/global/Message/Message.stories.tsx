import * as React from 'react';
import {withA11y} from '@storybook/addon-a11y';
import "../../../style/index.scss";
import "./Message.scss";
import Message from '../Message/Message';

export default {
  title: 'Message',
  decorators: [withA11y],
};

export const DefaultMessage = () =>
  <section className="uk-margin-large-top">
    <Message/>
  </section>;

DefaultMessage.story = {
  parameters: {
    notes: 'This component is used whenever a user has a message to be shown.',
  },
};
