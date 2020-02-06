/** @format */

export const SORT_TYPE = {
  DESC: 'high-low',
  ASC: 'low-high',
};

export function sortOffers(offers, sortType) {
  const newOffers = [...offers];

  return newOffers.sort((a, b) => {
    return sortType === SORT_TYPE.ASC
      ? a.quote.price - b.quote.price
      : b.quote.price - a.quote.price;
  });
}
