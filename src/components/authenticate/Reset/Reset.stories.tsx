import * as React from 'react';
import {withA11y} from '@storybook/addon-a11y';

import Reset from './Reset';

export default {
    title: 'Reset',
    decorators: [withA11y],
};

export const ResetForm = () => {
    return (
        <section>
            <div id="login-container" className="uk-section uk-flex uk-flex-middle uk-animation-fade">
                <div className="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body">
                    <ul className="uk-tab uk-flex-center" >
                        <li><a>Log In</a></li>
                        <li><a>Sign Up</a></li>
                        <li className="uk-hidden">Forgot Password?</li>
                    </ul>
                    <ul className="uk-list uk-margin">
                        <li>
                            <Reset/>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

ResetForm.story = {
    parameters: {
        notes: "Basic reset form.",
    },
};
