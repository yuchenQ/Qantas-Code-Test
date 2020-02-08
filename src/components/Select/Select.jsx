/** @format */

import React from 'react';
import PropTypes from 'prop-types';

export function Select({ prefix, options, onSelect, value }) {
  return (
    <select onChange={onSelect} value={value} data-testid="select">
      {options.map(option => (
        <option key={option} value={option} data-testid="option">
          {prefix && prefix}&nbsp;{option}
        </option>
      ))}
    </select>
  );
}

Select.defaultProps = {
  prefix: '',
};

Select.propTypes = {
  prefix: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
