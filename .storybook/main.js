module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-notes/register',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y/register',
    '@storybook/addon-viewport/register',
  ],
};