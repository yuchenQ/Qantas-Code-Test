/** @format */

import React from 'react';
import { withKnobs, text, array } from '@storybook/addon-knobs';
import { actions } from '@storybook/addon-actions';
import { Select } from './Select';

export default {
  title: 'Select',
  component: Select,
  decorators: [withKnobs],
  parameters: {
    notes: 'The boilerplate of function of selection',
  },
  includeStories: ['Default'], // if some data exported as well, or use excludeStories: /.*Data$/,
};

const options = ['option_1', 'option_2', 'option_3'];

const { onSelect } = actions('onSelect');

export function Default() {
  return (
    <Select
      prefix={text('prefix', 'prefix')}
      options={array('options', options)}
      onSelect={onSelect}
      defaultOption={text('defaultOption', options[0])}
    />
  );
}
