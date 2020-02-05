/** @format */

export const SORT_TYPE = {
  DESC: 'high-low',
  ASC: 'low-high',
};

export function sortOffers(offers, sortType) {
  const newOffers = [...offers];

  return newOffers.sort((a, b) => {
    return sortType === SORT_TYPE.ASC
      ? a.price.amount - b.price.amount
      : b.price.amount - a.price.amount;
  });
}
