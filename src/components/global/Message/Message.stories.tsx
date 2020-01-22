import * as React from 'react';
import {withA11y} from '@storybook/addon-a11y';
import "../../../style/index.scss";
import "./Message.scss";
import Message from '../Message/Message';

export default {
  title: 'Message',
  decorators: [withA11y],
};

// ['dark-gray', 'light-gray', 'snow', 'blue', 'green', 'yellow', 'red', 'primary', 'secondary', 'tertiary']
export const BasicMessage = () =>
  <section className="uk-margin-large-top">
    <Message message="This is a basic message. Index (0)." priority={0} hidden={false}/>
  </section>;

export const ReminderMessage = () =>
  <section className="uk-margin-large-top">
    <Message message="This is a reminder message. Index (1)." priority={1} hidden={false}/>
  </section>;


export const ReminderAltMessage = () =>
  <section className="uk-margin-large-top">
    <Message message="This is an alternate reminder message. Index (2)." priority={2} hidden={false}/>
  </section>;

export const ConfirmationMessage = () =>
  <section className="uk-margin-large-top">
    <Message message="This is a confirmation message. Index (3)." priority={3} hidden={false}/>
  </section>;


