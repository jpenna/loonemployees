/* eslint-disable no-unused-expressions */

import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { StaticRouter, Route } from 'react-router-dom';
import sinon from 'sinon';

import { AppComponent } from '../src/App';
import Footer from '../src/components/Footer';
import EmployeesList from '../src/components/EmployeesList';
import NotFound from '../src/components/NotFound';

describe('<App />', () => {
  let dived;
  let mounted;

  before(() => {
    const Component = (
      <StaticRouter location="/" context={{}}>
        <AppComponent />
      </StaticRouter>
    );
    mounted = mount(Component);
    dived = shallow(Component).find(AppComponent).dive();
  });

  describe('onClickBio()', () => {
    let func;
    let instance;
    const items = [{ id: 0, name: 'name' }, { id: 1, name: 'others' }];
    const args = {
      id: items[0].id,
      e: {
        currentTarget: { blur: sinon.fake() },
        stopPropagation: sinon.fake(),
      },
    };

    before(() => {
      dived.setState({ items });
      instance = dived.instance();
      func = instance.onClickBio;
    });

    afterEach(() => {
      args.e.currentTarget.blur.resetHistory();
      args.e.stopPropagation.resetHistory();
    });

    it('should remove focus from element', () => {
      func(args);
      expect(args.e.currentTarget.blur.callCount).to.equal(1);
    });

    it('should stopPropagation()', () => {
      func(args);
      expect(args.e.stopPropagation.callCount).to.equal(1);
    });

    it('should change background color for only 1 item', () => {
      func(args);
      const localItems = dived.state('items');
      expect(localItems).to.not.deep.equal(items);
      delete localItems[0].backgroundColor;
      expect(localItems).to.deep.equal(items);
    });

    it('should set a new background color for item', () => {
      func(args);
      const items1 = dived.state('items');
      const bg1 = items1[0].backgroundColor;
      expect(bg1).to.include('hsla');
      // Second time
      func(args);
      const items2 = dived.state('items');
      const bg2 = items2[0].backgroundColor;
      expect(bg2).to.include('hsla');
      expect(bg1).to.not.equal(bg2);
    });
  });

  describe('Render', () => {
    it('should render EmployeesList if path = /', () => {
      const comp = mounted.find(Route).props().render();
      expect(comp.type).to.equal(EmployeesList);
    });

    it('should render EmployeesList with expected params', () => {

    });

    it('should render NotFound if route not found', () => {
      const Comp = (
        <StaticRouter location="/n0tF0un4" context={{}}>
          <AppComponent />
        </StaticRouter>
      );
      const localMounted = mount(Comp);
      const comp = localMounted.find(Route).props().component;
      expect(comp).to.equal(NotFound);
    });

    it('should have <Footer /> component', () => {
      expect(dived.contains(<Footer />)).to.be.true;
    });
  });
});
