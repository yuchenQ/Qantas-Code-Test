/** @format */

import React, { useState } from 'react';
import '../../styles/index.css';
import { Page } from '../Page';
import { Header } from '../Header';
import { offers, location } from '../../data.json';
import logoUrl from '../../assets/qantas-logo.png';
import { sortOffers, SORT_TYPE } from './sortOffers';
import { Offers } from '../Offers';

export function App() {
  const [sortType, setSortType] = useState(SORT_TYPE.DESC);

  function onSelect({ target: { value } }) {
    if (value) setSortType(value);
  }

  return (
    <Page
      logoUrl={logoUrl}
      header={
        <Header
          count={offers.length}
          location={location}
          options={Object.values(SORT_TYPE)}
          onSelect={onSelect}
        />
      }>
      <Offers offers={sortOffers(offers, sortType)} />
    </Page>
  );
}
