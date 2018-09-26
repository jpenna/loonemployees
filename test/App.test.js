/* eslint import/no-extraneous-dependencies: "off" */

import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { StaticRouter } from 'react-router-dom';

import { AppComponent } from '../src/App';
import Footer from '../src/components/Footer';

describe.skip('<App />', () => {
  let mounted;
  const Component = (
    <StaticRouter location="/" context={{}}>
      <AppComponent />
    </StaticRouter>
  );

  before(() => {
    mounted = mount(Component);
  });

  it('should have <Footer /> component', () => {
    console.log(mounted);

    expect(mounted.contains(<Footer />)).to.be.equal(true);
  });
});
