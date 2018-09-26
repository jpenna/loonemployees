/* eslint import/no-extraneous-dependencies: "off" */

import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import { StaticRouter } from 'react-router-dom';

import NotFound from '../../src/components/NotFound';

describe('<NotFound />', () => {
  let rendered;
  const Component = (
    <StaticRouter location="/notFound" context={{}}>
      <NotFound />
    </StaticRouter>
  );

  before(() => {
    rendered = render(Component);
  });

  it('should have link to root', () => {
    const links = rendered.find('a');
    expect(links).to.have.length(1);
    expect(links.first().attr('href')).to.equal('/');
  });
});
