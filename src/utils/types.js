/* eslint-disable import/prefer-default-export */

import PropTypes from 'prop-types';

export const employeeItemType = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string,
  avatar: PropTypes.string,
};
