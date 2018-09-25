import React from 'react';

import { EmployeeItemType } from '../utils/types';

export default function EmployeeItem({ name, bio, avatar }) {
  return (
    <div>
      <div>{avatar}</div>
      <div>{name}</div>
      <div>{bio}</div>
    </div>
  );
}

EmployeeItem.propTypes = EmployeeItemType;
