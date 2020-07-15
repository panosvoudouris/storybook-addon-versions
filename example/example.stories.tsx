import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './Button';
import Component from './Component';

export default {
  title: 'Example components',
};

export const aButton = (): JSX.Element => <Button />;
export const aComponent = (): JSX.Element => <Component />;
