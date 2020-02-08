/** @format */

import { SORT_TYPE, sortOffers } from './sortOffers';

const offers = [
  {
    quote: {
      price: 300,
    },
  },
  {
    quote: {
      price: 100,
    },
  },
  {
    quote: {
      price: 200,
    },
  },
];

describe('sortOffers', () => {
  test('should sort offers in ascending order', () => {
    const sortedOffer = sortOffers(offers, SORT_TYPE.ASC);

    expect(sortedOffer[0]).toBe(offers[1]);
    expect(sortedOffer[1]).toBe(offers[2]);
    expect(sortedOffer[2]).toBe(offers[0]);
  });

  test('should sort offers in descending order', () => {
    const sortedOffer = sortOffers(offers, SORT_TYPE.DESC);

    expect(sortedOffer[0]).toBe(offers[0]);
    expect(sortedOffer[1]).toBe(offers[2]);
    expect(sortedOffer[2]).toBe(offers[1]);
  });
});
