/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-tabindex */

import React from 'react';
import PropTypes from 'prop-types';

import { employeeItemType } from '../utils/types';

const keyDown = ({ e, id, callback }) => {
  // If ENTER or SPACE
  if (e.keyCode === 13 || e.keyCode === 32) {
    e.stopPropagation();
    callback({ e, id });
  }
};

export default function EmployeeItem(props) {
  const {
    id,
    name,
    bio,
    avatar,
    selectEmployee,
    selectedEmployee,
    backgroundColor,
    onClickBio,
  } = props;
  const selected = selectedEmployee === id;

  return (
    <button
      type="button"
      role={selected ? 'presentation' : 'button'}
      className="box employee-item clickable"
      onClick={e => selectEmployee({ e, id })}
      onKeyDown={e => keyDown({ e, id, callback: selectEmployee })}
      style={{ backgroundColor }}
    >
      {/* If selected, default cursor over content */}
      <div className={`media ${selected ? 'no-clickable' : ''}`}>
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
              <button
                type="button"
                className="clickable hover-highlight no-button"
                onClick={e => onClickBio({ e, id })}
                onKeyDown={e => keyDown({ e, id, callback: onClickBio })}
              >
                {bio}
              </button>
            ) : <p className="text-ellipsis">{bio}</p>}
          </div>
        </div>
      </div>
    </button>
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
