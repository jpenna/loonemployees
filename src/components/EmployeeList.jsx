import React from 'react';
import PropTypes from 'prop-types';

import EmployeeItem from './EmployeeItem';
import { EmployeeItemType } from '../utils/types';

export default function EmployeeList({ items }) {
  return (
    <div>
      {items.map(item => <EmployeeItem key={item.name} {...item} />)}
    </div>
  );
}

EmployeeList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(EmployeeItemType))
    .isRequired,
};