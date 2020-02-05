/** @format */

import React from 'react';
import PropTypes from 'prop-types';

export function Select({ prefix, options, onSelect, defaultOption }) {
  return (
    <select onChange={onSelect} defaultValue={defaultOption}>
      {options.map(option => (
        <option key={option} value={option}>
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
  defaultOption: PropTypes.string.isRequired,
};
