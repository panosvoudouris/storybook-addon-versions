const configFile = require('../../../.storybook/storybook-config.json'); // eslint-disable-line

const getConfig = () =>
  new Promise((resolve) => {
    resolve(configFile.storybook.versions);
  });

export default getConfig;
