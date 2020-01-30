import * as React from 'react';
import {withA11y} from '@storybook/addon-a11y';
import marked from 'marked';

import "./Authorized.scss";
import Authorized from '../Authorized/Authorized';

const intro = require("./_note_intro.md");
const design = require('./_note_design.md');

export default {
  title: 'Authorized',
  decorators: [withA11y],
};

export const AccessGranted = () => <Authorized/>;

AccessGranted.story = {
  parameters: {
    notes: {"Introduction": marked(intro.default), 'Design Notes': marked(design.default)},
  },
};
