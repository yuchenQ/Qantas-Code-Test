/** @format */

import React from 'react';
import { withKnobs, color, number, select } from '@storybook/addon-knobs';
import { Rate } from './Rate';
import { COLOR_BUTTER_YELLOW } from '../../styles/variables';

const options = Object.values(Rate.type);

export default {
  title: 'Rate',
  component: Rate,
  decorators: [withKnobs],
  parameters: {
    notes: 'The boilerplate of function of Rating',
  },
  includeStories: ['Default'], // if some data exported as well, or use excludeStories: /.*Data$/,
};

export function Default() {
  return (
    <Rate
      type={select('type', options, options[0])}
      value={number('value', 5)}
      color={color('color', COLOR_BUTTER_YELLOW)}
    />
  );
}
