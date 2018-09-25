import React from 'react';
import PropTypes from 'prop-types';

import { employeeItemType } from '../utils/types';

export default function EmployeeItem(props) {
  const { id, name, bio, avatar, selectEmployee, selectedEmployee } = props;
  const showBio = selectedEmployee === id;

  return (
    <button type="button" className="box employee-item" onClick={e => selectEmployee(e, id)}>
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
            <h3 className="title is-5">{name}</h3>
            <p className={`${showBio ? '' : 'text-ellipsis'}`}>{bio}</p>
          </div>
        </div>
      </div>
    </button>
  );
}

EmployeeItem.propTypes = {
  ...employeeItemType,
  selectEmployee: PropTypes.func.isRequired,
  selectedEmployee: PropTypes.number,
};

EmployeeItem.defaultProps = {
  selectedEmployee: -1,
};
