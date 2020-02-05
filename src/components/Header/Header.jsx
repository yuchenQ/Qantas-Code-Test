/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Select } from '../Select';

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

export function Header({ count, location }) {
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
        <Select prefix="Price" options={['high to low', 'low to high']} onChange={e => e} />
      </SortSelect>
    </StyledHeader>
  );
}

Header.propTypes = {
  count: PropTypes.number.isRequired,
  location: PropTypes.number.isRequired,
};
