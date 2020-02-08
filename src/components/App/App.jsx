/** @format */

import React, { useState } from 'react';
import styled from 'styled-components';
import '../../styles/index.css';
import { Page } from '../Page';
import { SearchResult } from '../SearchResult';
import { offers, location } from '../../data.json';
import logoUrl from '../../assets/qantas-logo.png';
import { sortOffers, SORT_TYPE } from './sortOffers';
import { Offers } from '../Offers';
import { SortSelect } from '../SortSelect/SortSelect';

const HeaderLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  font-size: large;
`;

export function App() {
  const [sortType, setSortType] = useState(SORT_TYPE.DESC);

  function onSelect({ target: { value } }) {
    if (value) setSortType(value);
  }

  return (
    <Page
      logoUrl={logoUrl}
      header={
        <HeaderLayout>
          <SearchResult count={offers.length} location={location} />
          <SortSelect
            options={Object.values(SORT_TYPE)}
            onSelect={onSelect}
            sortType={sortType}
          />
        </HeaderLayout>
      }>
      <Offers offers={sortOffers(offers, sortType)} />
    </Page>
  );
}
