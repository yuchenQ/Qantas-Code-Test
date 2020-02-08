/** @format */
/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SORT_TYPE } from '../App/sortOffers';

const StyledSortSelect = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-column-gap: 1rem;
  align-items: center;

  select {
    font-size: medium;
  }
`;

export function SortSelect({ options, onSelect, sortType }) {
  return (
    <StyledSortSelect>
      <strong data-testid="label">Sort by</strong>
      <select onChange={onSelect} value={sortType} data-testid="select">
        {options.map(option => (
          <option key={option} value={option} data-testid="option">
            Price&nbsp;{option}
          </option>
        ))}
      </select>
    </StyledSortSelect>
  );
}

SortSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(Object.values(SORT_TYPE)))
    .isRequired,
  onSelect: PropTypes.func.isRequired,
  sortType: PropTypes.oneOf(Object.values(SORT_TYPE)).isRequired,
};
