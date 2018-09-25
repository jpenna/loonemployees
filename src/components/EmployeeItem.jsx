import React from 'react';

import { EmployeeItemType } from '../utils/types';

export default function EmployeeItem({ name, bio, avatar }) {
  return (
    <div className="media">
      <figure className="media-left">
        <p className="image is-64x64">
          <img src={avatar} alt={name} />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <h3 className="title is-5">{name}</h3>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
}

EmployeeItem.propTypes = EmployeeItemType;
