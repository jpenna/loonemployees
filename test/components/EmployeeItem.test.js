/* eslint import/no-extraneous-dependencies: "off" */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import EmployeeItem from '../../src/components/EmployeeItem';

describe('<EmployeeItem />', () => {
  const notSelectedEmployee = 99;
  let shallowed;
  let props;
  let e;
  const resetVars = () => {
    props = {
      id: 1,
      name: 'name',
      bio: 'My bio',
      avatar: 'xxx',
      selectedEmployee: 1,
      backgroundColor: 'red',
      onClickBio: sinon.fake(),
      selectEmployee: sinon.fake(),
    };
    e = {
      stopPropagation: sinon.fake(),
    };
  };

  before(() => {
    shallowed = shallow(<EmployeeItem {...props} />);
  });

  beforeEach(() => {
    resetVars();
    shallowed.setProps(props);
  });

  describe('Button container', () => {
    it('should select employee when clicking on box', () => {
      shallowed.simulate('click');
      expect(props.selectEmployee.callCount).to.equal(1);
      const args = { id: props.id, e: undefined };
      const calledArgs = props.selectEmployee.getCall(0).args;
      expect(calledArgs).to.deep.equal([args]);
    });

    it('should select employee when pressing ENTER (and stopPropagation)', () => {
      const event = { ...e, keyCode: 13 };
      shallowed.simulate('keyDown', event);

      expect(props.selectEmployee.callCount).to.equal(1);
      expect(event.stopPropagation.callCount).to.equal(1);

      const args = { id: props.id, e: event };
      const calledArgs = props.selectEmployee.getCall(0).args;
      expect(calledArgs).to.deep.equal([args]);
    });

    it('should select employee when pressing SPACE (and stopPropagation)', () => {
      const event = { ...e, keyCode: 32 };
      shallowed.simulate('keyDown', event);

      expect(props.selectEmployee.callCount).to.equal(1);
      expect(event.stopPropagation.callCount).to.equal(1);

      const args = { id: props.id, e: event };
      const calledArgs = props.selectEmployee.getCall(0).args;
      expect(calledArgs).to.deep.equal([args]);
    });

    it('should NOT call selectEmployee when pressing any other key', () => {
      const event = { ...e, keyCode: 999 };
      shallowed.simulate('keyDown', event);

      expect(props.selectEmployee.callCount).to.equal(0);
      expect(event.stopPropagation.callCount).to.equal(0);
    });

    it('should have role=button if NOT selected', () => {
      shallowed.setProps({ selectedEmployee: notSelectedEmployee });
      expect(shallowed.render().attr('role')).to.equal('button');
    });

    it('should have role=presentation if selected', () => {
      expect(shallowed.render().attr('role')).to.equal('presentation');
    });

    it('should change background color based on props', () => {
      const bgString1 = `background-color:${props.backgroundColor}`;
      expect(shallowed.render().attr('style')).to.include(bgString1);
      const newColor = 'blue';
      const bgString2 = `background-color:${newColor}`;
      shallowed.setProps({ backgroundColor: newColor });
      expect(shallowed.render().attr('style')).to.include(bgString2);
    });
  });

  describe('Media', () => {
    it('should have class `no-clickable` if selected', () => {
      const media = shallowed.render().find('.media');
      expect(media).to.have.length(1);
      expect(media.first().attr('class')).to.include('no-clickable');
    });

    it('should NOT have class `no-clickable` if NOT selected', () => {
      shallowed.setProps({ selectedEmployee: notSelectedEmployee });
      const media = shallowed.render().find('.media');
      expect(media).to.have.length(1);
      expect(media.first().attr('class')).to.not.include('no-clickable');
    });

    it('should show avatar if set', () => {
      const figure = shallowed.render().find('figure');
      expect(figure).to.have.length(1);
      expect(figure.find('img').attr('src')).to.equal(props.avatar);
      expect(figure.find('img').attr('alt')).to.equal(props.name);
    });

    it('should hide avatar if NOT set', () => {
      shallowed.setProps({ avatar: undefined });
      const figure = shallowed.render().find('figure');
      expect(figure).to.have.length(0);
    });

    it('should expand text to occupy avatar space', () => {
      shallowed.setProps({ avatar: undefined });
      const mediaContent = shallowed.render().find('.media-content');
      expect(mediaContent).to.have.length(1);
      expect(mediaContent.first().attr('class')).to.include('expand');
    });

    it('should NOT expand text to occupy avatar space', () => {
      const mediaContent = shallowed.render().find('.media-content');
      expect(mediaContent).to.have.length(1);
      expect(mediaContent.first().attr('class')).to.not.include('expand');
    });

    it('should show summary text if NOT selected', () => {
      shallowed.setProps({ selectedEmployee: notSelectedEmployee });
      const p = shallowed.render().find('.text-ellipsis');
      expect(p).to.have.length(1);
      expect(p.text()).to.equal(props.bio);
    });

    it('should show button if selected', () => {
      const mediaContent = shallowed.find('.media-content').render();
      const button = mediaContent.find('button');
      const p = mediaContent.find('.text-ellipsis');
      expect(p).to.have.length(0);
      expect(button).to.have.length(1);
      expect(button.text()).to.equal(props.bio);
    });

    describe('Bio button', () => {
      let bioButton;

      beforeEach(() => {
        bioButton = shallowed.find('.media-content').find('button');
      });

      it('should call clickBio when clicking on box', () => {
        bioButton.simulate('click');
        expect(props.onClickBio.callCount).to.equal(1);
        const args = { id: props.id, e: undefined };
        const calledArgs = props.onClickBio.getCall(0).args;
        expect(calledArgs).to.deep.equal([args]);
      });

      it('should call clickBio when pressing ENTER (and stopPropagation)', () => {
        const event = { ...e, keyCode: 13 };
        bioButton.simulate('keyDown', event);

        expect(props.onClickBio.callCount).to.equal(1);
        expect(event.stopPropagation.callCount).to.equal(1);

        const args = { id: props.id, e: event };
        const calledArgs = props.onClickBio.getCall(0).args;
        expect(calledArgs).to.deep.equal([args]);
      });

      it('should call clickBio when pressing SPACE (and stopPropagation)', () => {
        const event = { ...e, keyCode: 32 };
        bioButton.simulate('keyDown', event);

        expect(props.onClickBio.callCount).to.equal(1);
        expect(event.stopPropagation.callCount).to.equal(1);

        const args = { id: props.id, e: event };
        const calledArgs = props.onClickBio.getCall(0).args;
        expect(calledArgs).to.deep.equal([args]);
      });

      it('should NOT call onClickBio when pressing any other key', () => {
        const event = { ...e, keyCode: 999 };
        bioButton.simulate('keyDown', event);

        expect(props.onClickBio.callCount).to.equal(0);
        expect(event.stopPropagation.callCount).to.equal(0);
      });
    });
  });
});
