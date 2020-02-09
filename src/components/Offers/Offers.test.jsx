/** @format */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Offers } from './Offers';
import { offers } from '../../data.json';

describe('Offers', () => {
  let getAllByTestId;

  beforeEach(() => {
    ({ getAllByTestId } = render(<Offers offers={offers} />));
  });

  afterEach(cleanup);

  test('should render all offers', () => {
    expect(getAllByTestId('offer').length).toBe(offers.length);
  });
});
