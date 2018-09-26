import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import EmployeesList from '../../src/components/EmployeesList';
import EmployeeItem from '../../src/components/EmployeeItem';

describe('<EmployeesList />', () => {
  let shallowed;
  let props;
  const resetVars = () => {
    props = {
      items: [{ id: 0, name: 'name' }, { id: 1, name: 'others' }],
      onClickBio: sinon.fake(),
    };
  };

  before(() => {
    resetVars();
    shallowed = shallow(<EmployeesList {...props} />);
  });

  afterEach(() => {
    resetVars();
    shallowed.setProps(props);
  });

  describe('Componenent', () => {
    it('should start with no selected employee', () => {
      expect(shallowed.state('selectedEmployee')).to.equal(null);
    });

    describe('selectEmployee()', () => {
      let func;
      let instance;
      const currentTarget = { blur: sinon.fake() };
      const id = 1;
      const args = {
        id,
        e: {
          currentTarget,
          target: 'other',
        },
      };

      before(() => {
        instance = shallowed.instance();
        sinon.spy(instance, 'selectEmployee');
        func = instance.selectEmployee;
      });

      afterEach(() => {
        instance.selectEmployee.resetHistory();
      });

      it('should remove focus from element', () => {
        func(args);
        expect(args.e.currentTarget.blur.callCount).to.equal(1);
      });

      it('should select employee`s ID if different from previous selected', () => {
        func(args);
        expect(instance.state.selectedEmployee).to.equal(id);
      });

      it('should clear selected employee if clicked on box and ID is not new', () => {
        func(args);
        const newArgs = { ...args, e: { ...args.e, target: currentTarget } };
        func(newArgs);
        expect(instance.state.selectedEmployee).to.equal(null);
      });
    });
  });

  describe('Render', () => {
    it('should render <EmployeeItem> for each employee', () => {
      expect(shallowed.find(EmployeeItem)).to.have.length(props.items.length);
    });

    it('should pass expected params to each <EmployeeItem>', () => {
      const passedProps = shallowed.find(EmployeeItem).first().props();
      const item = props.items[0];
      expect(passedProps).to.include({
        ...item,
        selectEmployee: shallowed.instance().selectEmployee,
        selectedEmployee: shallowed.state('selectedEmployee'),
        onClickBio: props.onClickBio,
      });
    });
  });
});
