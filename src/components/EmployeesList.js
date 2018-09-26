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

  selectEmployee({ e, id }) {
    e.currentTarget.blur(); // Remove focus outline on click, but keep for accessibility
    // If box clicked again... (checking here because e is lost in the callback below)
    const sameElem = e.currentTarget === e.target;
    this.setState((prevState) => {
      let select = id;
      if (sameElem && prevState.selectedEmployee === id) select = null;
      return { selectedEmployee: select };
    });
  }

  render() {
    const { items, onClickBio } = this.props;
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
            onClickBio={onClickBio}
          />
        ))}
      </div>
    );
  }
}

EmployeeList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(employeeItemType))
    .isRequired,
  onClickBio: PropTypes.func.isRequired,
};
