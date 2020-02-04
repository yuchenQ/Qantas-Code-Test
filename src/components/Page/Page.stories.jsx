/** @format */

import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Page } from './Page';
import logoUrl from '../../assets/qantas-logo.png';

export default {
  title: 'Page',
  component: Page,
  decorators: [withKnobs],
  parameters: {
    notes: 'The boilerplate of Page format',
  },
  includeStories: ['Default'], // if some data exported as well, or use excludeStories: /.*Data$/,
};

export function Default() {
  return (
    <Page logoUrl={text('logoUrl', logoUrl)} header={text('header', 'header')}>
      {text('children', 'children')}
    </Page>
  );
}
