import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EmployeeItem from './EmployeeItem';
import { employeeItemType } from '../utils/types';

export default class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEmployee: null,
    };

    this.selectEmployee = this.selectEmployee.bind(this);
  }

  selectEmployee(e, id) {
    e.currentTarget.blur(); // hide the outline on click, but keep it for accessibility
    this.setState({ selectedEmployee: id });
  }

  render() {
    const { items } = this.props;
    const { selectedEmployee } = this.state;

    return (
      <div className="section">
        <div className="title is-3 has-text-centered">Employees List</div>
        {items.map(item => (
          <EmployeeItem
            key={item.id}
            {...item}
            selectEmployee={this.selectEmployee}
            selectedEmployee={selectedEmployee}
          />
        ))}
      </div>
    );
  }

}

EmployeeList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(employeeItemType))
    .isRequired,
};
