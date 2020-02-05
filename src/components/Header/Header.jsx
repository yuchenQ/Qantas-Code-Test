/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Select } from '../Select';
import { SORT_TYPE } from '../App/sortOffers';

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  font-size: large;
`;

const SortSelect = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-column-gap: 1rem;
  align-items: center;

  select {
    font-size: medium;
  }
`;

export function Header({ count, location, options, onSelect }) {
  return (
    <StyledHeader>
      <div data-testid="search-result">
        <strong data-testid="count">{count}</strong>
        &nbsp;
        <i>hotels in</i>
        &nbsp;
        <strong data-testid="location">{location}</strong>
      </div>
      <SortSelect>
        <strong>Sort by</strong>
        <Select
          prefix="Price"
          options={options}
          onSelect={onSelect}
          defaultOption={options[0]}
        />
      </SortSelect>
    </StyledHeader>
  );
}

Header.propTypes = {
  count: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOf(Object.values(SORT_TYPE)))
    .isRequired,
  onSelect: PropTypes.func.isRequired,
};
