/* eslint import/no-extraneous-dependencies: "off" */

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import App from 'src/app';
import HelloWorld from 'src/components/hello-world';

describe('<App />', () => {
  let shallowed;

  beforeAll(() => {
    shallowed = shallow(<App />);
  });

  it('should have <HelloWorld /> component', () => {
    expect(shallowed.contains(<HelloWorld />)).toBeTruthy();
  });

  it('should render correctly', () => {
    const rendered = renderer.create(<App />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
