import { configure, addParameters } from '@storybook/react';

addParameters({});

configure(require.context('../example', false, /\.stories\.tsx$/), module);
