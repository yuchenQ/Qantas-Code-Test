/** @format */

import React from 'react';
import PropTypes from 'prop-types';

export function Select({ prefix, options, onChange }) {
  return (
    <select onChange={onChange}>
      {options.map(option => (
        <option key={option}>
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
  onChange: PropTypes.func.isRequired,
};
