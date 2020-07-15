import React from 'react';
import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import Panel from './panel';

// This has been forked from the public versions addon to add support storybook 4

const ADDON_ID = 'versions';
const PARAM_KEY = 'versions-panel';
const PANEL_ID = `${ADDON_ID}/panel`;

interface IRenderProps {
  key: string;
  active: boolean;
}

addons.register('versions', () => {
  console.log('REGISTERING');
  const render = ({ active, key }: IRenderProps) => (
    <AddonPanel active={active} key={key}>
      <Panel location={window.parent.location} active={active} />
    </AddonPanel>
  );
  const title = PARAM_KEY;

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title,
    render,
    paramKey: PARAM_KEY,
  });
});
