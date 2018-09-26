/* eslint import/no-extraneous-dependencies: "off" */

import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';

import Footer from '../../src/components/Footer';

describe('<Footer />', () => {
  let rendered;

  before(() => {
    rendered = render(<Footer />);
  });

  it('should export component', () => {
    expect(rendered).to.have.length(1);
  });
});
