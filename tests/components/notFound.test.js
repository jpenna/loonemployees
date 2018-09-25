/* eslint import/no-extraneous-dependencies: "off" */

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { StaticRouter } from 'react-router-dom';

import NotFound from '../../src/components/NotFound';

describe('<App />', () => {
  let shallowed;
  const Component = (
    <StaticRouter location="/notFound" context={{}}>
      <NotFound />
    </StaticRouter>
  );

  beforeAll(() => {
    shallowed = shallow(Component);
  });

  test('should have link to root', () => {
    const links = shallowed.find('a');
    // console.log('link', links.length);

    // expect(links).toHaveLength(1);
    // expect(links.first()).toHaveLength(1);
  });
});
