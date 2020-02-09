/** @format */
/** @format */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Detail } from './Detail';
import { FREE_CANCELLATION } from './isCancellable';

describe('Detail', () => {
  const hotel = {
    id: 'P107801',
    name: 'Courtyard by Marriott Sydney-North Ryde',
    address: ['7-11 Talavera Rd', 'North Ryde'],
    rate: {
      type: 'CIRCLE',
      value: 4.5,
    },
    room: 'Deluxe Balcony Room',
  };

  afterEach(cleanup);

  test('should show detail', () => {
    const { getByTestId } = render(
      <Detail hotel={hotel} cancellation={FREE_CANCELLATION} />,
    );

    expect(getByTestId('hotel-name')).toHaveTextContent(hotel.name);
    expect(getByTestId('rate-wrapper')).toBeTruthy();
    expect(getByTestId('address')).toHaveTextContent(hotel.address.join(', '));
    expect(getByTestId('room-type')).toHaveTextContent(hotel.room);
    expect(getByTestId('free-cancellation')).toHaveTextContent(
      'Free cancellation',
    );
  });

  test('should not see free cancellation if not allowed', () => {
    const { queryByTestId } = render(
      <Detail hotel={hotel} cancellation="something else" />,
    );

    expect(queryByTestId('free-cancellation')).toBeFalsy();
  });
});
