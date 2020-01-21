import * as React from 'react';

import "./Button.scss";

import {withA11y} from '@storybook/addon-a11y';
import Button from '../Button/Button';

export default {
  title: 'Button',
  decorators: [withA11y],
};

export const DeleteButton = () =>
  <section className="uk-margin-large-top">
    <Button label="Remove Course"/>
  </section>;

DeleteButton.story = {
  parameters: {
    notes: 'This button can be used for actions like removing a course, deleting a student, etc.',
  },
};

export const SuccessButton = () =>
  <section className="uk-margin-large-top">
    <Button label="Add Course" width="0" color="bg-green" border="border-green"/>
  </section>;

export const WarningButton = () =>
  <section className="uk-margin-large-top">
    <Button label="Are you sure?" width="0" color="bg-yellow" border="border-yellow"/>
  </section>;


export const ConfirmationButton = () =>
  <section className="uk-margin-large-top">
    <Button label="Submit" width="0" color="bg-blue" border="border-blue"/>
  </section>;

export const PrimaryButton = () =>
  <section className="uk-margin-large-top">
    <Button label="Save" width="0" color="bg-primary" border="border-primary"/>
  </section>;


export const SecondaryButton = () =>
  <section className="uk-margin-large-top">
    <Button label="Upload" width="0" color="bg-secondary" border="border-secondary"/>
  </section>;


export const TertiaryButton = () =>
  <section className="uk-margin-large-top">
    <Button label="Update" width="0" color="bg-tertiary" border="border-tertiary"/>
  </section>;

export const DefaultButton = () =>
  <section className="uk-margin-large-top">
    <Button label="Reset" width="0" text="light-gray" color="bg-snow" border="border-snow"/>
  </section>;


