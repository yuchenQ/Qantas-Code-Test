/** @format */

import React from 'react';
import '../../styles/index.css';
import { Page } from '../Page';
import { Header } from '../Header';
import { offers, location } from '../../data.json';
import logoUrl from '../../assets/qantas-logo.png';

export function App() {
  return (
    <Page logoUrl={logoUrl} header={<Header count={offers.length} location={location} />}>
      <div data-testid="hello-world">Hello World!</div>
    </Page>
  );
}
