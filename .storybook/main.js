/** @format */

module.exports = {
  stories: ['../src/components/**/*.stories.jsx'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-notes/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-backgrounds/register',
  ],
};
