/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-tabindex */

import React from 'react';
import PropTypes from 'prop-types';

import { employeeItemType } from '../utils/types';

const keyDown = (e, id, selectEmployee) => {
  // If ENTER
  if (e.keyCode === 13) selectEmployee({ id });
};

export default function EmployeeItem(props) {
  const { id, name, bio, avatar, selectEmployee, selectedEmployee, backgroundColor, onClickBio } = props;
  const selected = selectedEmployee === id;

  return (
    <div
      className={`box employee-item ${selected ? '' : 'clickable'}`}
      role={selected ? 'presentation' : 'button'}
      tabIndex={selected ? '' : '0'}
      onClick={e => selectEmployee({ e, id })}
      onKeyDown={e => keyDown(e, id, selectEmployee)}
      style={{ backgroundColor }}
    >
      <div className="media">
        {avatar ? (
          <figure className="media-left">
            <p className="image is-64x64">
              <img src={avatar} alt={name} />
            </p>
          </figure>
        ) : null}
        <div className={`media-content ${avatar ? '' : 'expand'}`}>
          <div className="content">
            <h3 className="title is-5 mb-1">{name}</h3>
            {selected ? (
              <div
                className="clickable hover-highlight"
                role="button"
                tabIndex={0}
                onClick={e => onClickBio({ e, id })}
                onKeyDown={e => onClickBio({ e, id })}
              >
                {bio}
              </div>
            ) : <p className="text-ellipsis">{bio}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

EmployeeItem.propTypes = {
  ...employeeItemType,
  selectEmployee: PropTypes.func.isRequired,
  onClickBio: PropTypes.func.isRequired,
  selectedEmployee: PropTypes.number,
};

EmployeeItem.defaultProps = {
  selectedEmployee: -1,
};
