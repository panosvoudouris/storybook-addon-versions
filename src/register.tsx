import React from 'react';
import addons from '@storybook/addons';
import Panel from './panel';

// This has been forked from the public versions addon to add support storybook 4

addons.register('versions', (api) => {
  const channel = addons.getChannel();

  addons.addPanel('versions', {
    title: 'versions',
    render: (
      { active } // eslint-disable-line
    ) => (
      <Panel
        channel={channel}
        storybook={api}
        key="versions-panel"
        location={window.parent.location}
        active={active}
      />
    ),
  });
});
