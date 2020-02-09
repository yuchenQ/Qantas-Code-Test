/** @format */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import mapCurrencyToSymbol from '../../../helpers/mapCurrencyToSymbol';
import { COLOR_VENETIAN_RED } from '../../../styles/variables';
import { Quote as QuotePropType } from '../../../propTypes/Offer';

const StyledQuote = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-rows: repeat(2, auto) 1.5rem;
`;

const Label = styled.small``;

const Price = styled.div`
  font-size: xx-large;
  display: grid;
  align-items: top;
  grid-template-columns: auto 1fr;
`;

const Symbol = styled.div`
  font-size: medium;
`;

const Promotion = styled.div`
  color: ${COLOR_VENETIAN_RED};
  font-size: large;
`;

export function Quote({ className, quote: { price, currency, promotion } }) {
  return (
    <StyledQuote className={className}>
      <Label data-testid="label">{`1 night total (${currency})`}</Label>
      <Price>
        <Symbol data-testid="symbol">{mapCurrencyToSymbol(currency)}</Symbol>
        <span data-testid="price">{price}</span>
      </Price>
      {promotion && (
        <Promotion data-testid="promotion">
          {' '}
          Save&nbsp;
          {mapCurrencyToSymbol(currency)}
          {promotion.saving.amount}~
        </Promotion>
      )}
    </StyledQuote>
  );
}

Quote.defaultProps = {
  className: '',
};

Quote.propTypes = {
  className: PropTypes.string,
  quote: PropTypes.shape(QuotePropType).isRequired,
};
