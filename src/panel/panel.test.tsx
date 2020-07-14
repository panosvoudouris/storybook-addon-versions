import React from 'react';
import renderer, { act } from 'react-test-renderer';

import Panel from './';

jest.mock('../utils/config');

const location = {
  pathname: '/0.2.5/',
  hash: '',
  search: '',
};

describe('Panel', () => {
  it('renders correctly, no versions', () => {
    const tree = renderer
      .create(<Panel location={location} active={true} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  xit('renders versions', () => {
    let tree;
    act(() => {
      tree = renderer
        .create(<Panel location={location} active={true} />)
        .toJSON();
    });
    expect(tree).toMatchSnapshot();
  });
});
