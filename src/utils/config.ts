let configFile: string = null;
let lastFilename: string = null;

const getConfig = (filename = 'storybook-config.json') =>
  new Promise((resolve, reject) => {
    if (lastFilename === filename && configFile) {
      resolve(configFile);
    } else if (window && window.parent) {
      lastFilename = filename;
      const url = window.parent.location;
      const location = `${url.protocol}//${url.hostname}:${url.port}/${filename}`;

      fetch(location)
        .then((response) => {
          if (response.ok) {
            response.json().then((data) => {
              if (data && data.storybook && data.storybook.versions) {
                configFile = data.storybook.versions;
                resolve(configFile);
              } else {
                reject(new Error('Invalid config'));
              }
            });
          } else {
            reject(new Error('Response not ok'));
          }
        })
        .catch(() => {
          reject(new Error('Error getting config'));
        });
    } else {
      reject(new Error('Window not found'));
    }
  });

export default getConfig;
