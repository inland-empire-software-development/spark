import * as React from 'react';
import {withA11y} from '@storybook/addon-a11y';

import LogIn from './LogIn';
import Spinner from "../../global/Spinner/Spinner";
import ContentContainer from '../../global/ContentContainer/ContentContainer';

export default {
  title: 'Log in',
  decorators: [withA11y],
};

export const LogInForm = () => {
  return (
    <section className="uk-position-center">
      <ContentContainer content={
        <div>
          <Spinner ratio={3} classes="uk-hidden"/>
          <div className="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body">
            <ul className="uk-tab uk-flex-center">
              <li><a>Log In</a></li>
            </ul>
            <ul className="uk-list uk-margin">
              <li>
                <LogIn/>
              </li>
            </ul>
          </div>
        </div>
      }/>
    </section>
  );
};

LogInForm.story = {
  parameters: {
    notes: "Basic log in form.",
  },
};
