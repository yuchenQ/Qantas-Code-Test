/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR_DUSTY_GRAY } from '../../styles/variables';
import { Preview } from './Preview';
import { Detail } from './Detail';
import { Quote } from './Quote';
import { Hotel, PreviewImage } from '../../propTypes/Offer';

const StyledOffer = styled.div`
  --gap: 1rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  position: relative;
  grid-column-gap: var(--gap);

  & ~ & {
    ::before {
      content: '';
      border-top: 1px solid ${COLOR_DUSTY_GRAY};
      position: absolute;
      right: 0;
      left: 0;
      top: calc(var(--gap) * -1);
    }
  }
`;

const StyledQuote = styled(Quote)`
  align-self: end;
`;

export function Offer({
  hotel,
  quote,
  cancellation,
  previewImage: { url: imageUrl, caption, tag },
}) {
  return (
    <StyledOffer data-testid="offer">
      <Preview imageUrl={imageUrl} caption={caption} tag={tag} />
      <Detail hotel={hotel} cancellation={cancellation} />
      <StyledQuote quote={quote} />
    </StyledOffer>
  );
}

Offer.propTypes = {
  hotel: PropTypes.shape(Hotel).isRequired,
  quote: PropTypes.shape(Quote).isRequired,
  cancellation: PropTypes.string.isRequired,
  previewImage: PropTypes.shape(PreviewImage).isRequired,
};
