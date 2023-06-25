import type { Preview } from '@storybook/react';

import { themes, ensure } from '@storybook/theming';

const backgrounds = {
  values: [
    { name: 'Red', value: '#f00' },
    { name: 'Green', value: '#0f0' },
    { name: 'Blue', value: '#00f' },
    { name: 'Yellow', value: 'yellow' },
  ],
};

const docs = {
  theme: ensure(themes.dark), // The replacement theme to use
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    //backgrounds,
    //docs,
  },
};

export default preview;
