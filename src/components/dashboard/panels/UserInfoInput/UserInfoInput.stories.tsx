import * as React from 'react';
import {withA11y} from '@storybook/addon-a11y';
import "../../../../style/index.scss";
import "./UserInfoInput.scss";
import UserInfoInput from './UserInfoInput';

export default {
  title: 'User Information Input Form',
  decorators: [withA11y],
};

export const UserInfoInputForm = () => <UserInfoInput />;

UserInfoInputForm.story = {
  parameters: {
    notes: 'User information input form',
  },
};

