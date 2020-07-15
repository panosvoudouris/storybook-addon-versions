import { configure, addParameters } from '@storybook/react';

addParameters({
  options: {
    isToolshown: true,
    showPanel: true,
    panelPosition: 'bottom',
  },
});

configure(require.context('../example', false, /\.stories\.tsx$/), module);
