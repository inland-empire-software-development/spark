import * as React from 'react';
import {withA11y} from '@storybook/addon-a11y';
import "../../../style/index.scss";
import "./Message.scss";
import Message from '../Message/Message';

export default {
  title: 'Message',
  decorators: [withA11y],
};

export const BasicMessage = () =>
  <section className="uk-margin-large-top">
    <Message message="This is a basic message." priority={0} hidden={false}/>
  </section>;

export const ReminderAltMessage = () =>
  <section className="uk-margin-large-top">
    <Message message="This is a reminder message." priority={1} hidden={false}/>
  </section>;


export const ReminderMessage = () =>
  <section className="uk-margin-large-top">
    <Message message="This is an alternate reminder message." priority={2} hidden={false}/>
  </section>;

export const ConfirmationMessage = () =>
  <section className="uk-margin-large-top">
    <Message message="This is a confirmation message." priority={3} hidden={false}/>
  </section>;

export const SuccessMessage = () =>
  <section className="uk-margin-large-top">
    <Message message="This is a success message." priority={4} hidden={false}/>
  </section>;

export const WarningMessage = () =>
  <section className="uk-margin-large-top">
    <Message message="This is a warning message." priority={5} hidden={false}/>
  </section>;

export const ErrorMessage = () =>
  <section className="uk-margin-large-top">
    <Message message="This is an error message." priority={6} hidden={false}/>
  </section>;

export const PrimaryMessage = () =>
  <section className="uk-margin-large-top">
    <Message message="This is a sample primary message." priority={7} hidden={false}/>
  </section>;

export const SecondaryMessage = () =>
  <section className="uk-margin-large-top">
    <Message message="This is a sample secondary message." priority={8} hidden={false}/>
  </section>;

export const TertiaryMessage = () =>
  <section className="uk-margin-large-top">
    <Message message="This is a sample tertiary message." priority={9} hidden={false}/>
  </section>;
