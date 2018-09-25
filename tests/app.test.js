/* eslint import/no-extraneous-dependencies: "off" */

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { AppComponent } from '../src/App';
import Footer from '../src/components/Footer';

describe('<App />', () => {
  let shallowed;

  beforeAll(() => {
    shallowed = shallow(<AppComponent />);
  });

  test('should have <Footer /> component', () => {
    expect(shallowed.contains(<Footer />)).toBeTruthy();
  });

  test('should render correctly', () => {
    const rendered = renderer.create(<AppComponent />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
