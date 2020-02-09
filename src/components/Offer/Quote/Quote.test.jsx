/** @format */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Quote } from './Quote';
import mapCurrencyToSymbol from '../../../helpers/mapCurrencyToSymbol';

describe('Quote', () => {
  const quote = {
    price: 329.0,
    currency: 'AUD',
    promotion: {
      saving: {
        amount: 30.0,
      },
    },
  };

  afterEach(cleanup);

  test('should show quote', () => {
    const { getByTestId } = render(<Quote quote={quote} />);

    expect(getByTestId('label')).toHaveTextContent(
      `1 night total (${quote.currency})`,
    );
    expect(getByTestId('symbol')).toHaveTextContent(
      mapCurrencyToSymbol(quote.currency),
    );
    expect(getByTestId('price')).toHaveTextContent(quote.price);
    expect(getByTestId('promotion')).toHaveTextContent(
      `Save ${mapCurrencyToSymbol(quote.currency)}${
        quote.promotion.saving.amount
      }~`,
    );
  });

  test('should not see promotion if there is none', () => {
    const newQuote = { ...quote, promotion: null };

    const { queryByTestId } = render(<Quote quote={newQuote} />);

    expect(queryByTestId('promotion')).toBeFalsy();
  });
});
