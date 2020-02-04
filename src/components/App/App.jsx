/** @format */

import React from 'react';
import '../../styles/index.css';
import { Page } from '../Page';
import logoUrl from '../../assets/qantas-logo.png';

function App() {
  return (
    <Page logoUrl={logoUrl} header={<div>Hello World!</div>}>
      <div data-testid="hello-world">Hello World!</div>
    </Page>
  );
}

export { App };
