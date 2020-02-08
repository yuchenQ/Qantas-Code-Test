/** @format */
/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Select } from '../Select';
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

export function SortSelect({ options, onSelect }) {
  return (
    <StyledSortSelect>
      <strong>Sort by</strong>
      <Select
        prefix="Price"
        options={options}
        onSelect={onSelect}
        defaultOption={options[0]}
      />
    </StyledSortSelect>
  );
}

SortSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(Object.values(SORT_TYPE)))
    .isRequired,
  onSelect: PropTypes.func.isRequired,
};
