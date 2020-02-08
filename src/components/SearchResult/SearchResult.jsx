/** @format */

import React from 'react';
import PropTypes from 'prop-types';

export function SearchResult({ count, location }) {
  return (
    <div data-testid="search-result">
      <strong data-testid="count">{count}</strong>
      &nbsp;
      <i>hotels in</i>
      &nbsp;
      <strong data-testid="location">{location}</strong>
    </div>
  );
}

SearchResult.propTypes = {
  count: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
};
