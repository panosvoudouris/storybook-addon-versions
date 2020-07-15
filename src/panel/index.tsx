import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getConfig from '../utils/config';
import generateLink from '../utils/generateLink';

export interface IPanelProps {
  location: any;
  active?: boolean;
}

const Panel = ({ location, active }: IPanelProps): JSX.Element => {
  const [availableVersions, setAvailableVersions] = useState([]);
  const [currentVersion, setCurrentVersion] = useState('');
  const [hostname, setHostName] = useState('');
  const [localhost, setLocalhost] = useState('');

  useEffect(() => {
    getConfig()
      .then((data: any) => {
        const { availableVersions, regex, hostname, localhost } = data; // eslint-disable-line

        if (availableVersions) {
          setAvailableVersions(availableVersions.reverse());
        }

        const url = location;
        let curVer = '';
        const path = url.pathname;
        if (path && path !== '/' && regex) {
          const r = new RegExp(regex, 'i');
          const result = r.exec(path);
          if (result && result.length > 0) {
            curVer = result[1]; // eslint-disable-line
          }
        }

        setCurrentVersion(curVer);
        setHostName(hostname);
        setLocalhost(localhost);
      })
      .catch(() => {
        // Ignore, we're not showing anything anyway.
      });
  }, []);

  const handleVersionClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // We need to handle clicks dynamically so we get all the correct query strings
    const version = e.currentTarget.value;
    const targetHost = version
      ? hostname || `${location.hostname}:${location.port}`
      : localhost;
    const target: string = generateLink(
      location,
      currentVersion,
      version,
      targetHost
    );
    window.parent.location.href = target;
  };

  let versionsList: React.ReactNode = <p>No versions found</p>;

  if (availableVersions) {
    let keyCounter = 0;

    versionsList = availableVersions.map((version: string) => {
      if (currentVersion === version) {
        return (
          <span className="dark-bg with-border" key={keyCounter++}>
            {version}
          </span>
        );
      }
      return (
        <button
          type="button"
          key={keyCounter++}
          onClick={handleVersionClick}
          className="light-bg with-border"
          value={version}
        >
          {version}
        </button>
      );
    });
  }

  console.log(active);

  return active ? (
    <div className="versions-panel-container">
      <div className="versions-panel-list">{versionsList}</div>
    </div>
  ) : null;
};

export default Panel;
