import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '..';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../../utils/config');

const location = {
  pathname: '/0.2.5/',
  hash: '',
  search: '',
};

describe('Panel', () => {
  it('renders correctly, no versions (dev true)', () => {
    const storybook = {
      getQueryParam: () => 'true',
      setQueryParams: () => {},
    };

    const tree = mount(<Panel storybook={storybook} location={location} />);
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly, no versions (dev false)', () => {
    const storybook = {
      getQueryParam: () => 'false',
      setQueryParams: () => {},
    };

    const tree = mount(<Panel storybook={storybook} location={location} />);
    expect(tree).toMatchSnapshot();
  });

  it('renders versions (dev false)', async () => {
    const storybook = {
      getQueryParam: () => 'false',
      setQueryParams: () => {},
    };

    const wrapper = await shallow(<Panel storybook={storybook} location={location} />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('renders versions (dev true)', async () => {
    const storybook = {
      getQueryParam: () => 'true',
      setQueryParams: () => {},
    };

    const wrapper = await shallow(<Panel storybook={storybook} location={location} />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('toggles dev mode', async () => {
    const storybook = {
      getQueryParam: () => 'true',
      setQueryParams: () => {},
    };

    const wrapper = await shallow(<Panel storybook={storybook} location={location} />);
    const linksFound = wrapper.find('button').length;
    wrapper.find('#versionsAddonDevMode').simulate('change');
    expect(wrapper.find('button').length).toBe(linksFound - 1);
    wrapper.find('#versionsAddonDevMode').simulate('change');
    expect(wrapper.find('button').length).toBe(linksFound);
  });
});
