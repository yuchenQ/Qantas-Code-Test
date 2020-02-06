/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DUSTY_GRAY } from '../../styles/variables';
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
      border-top: 1px solid ${DUSTY_GRAY};
      position: absolute;
      right: 0;
      left: 0;
      top: calc(var(--gap) * -1);
    }
  }
`;

export function Offer({
  offer: {
    hotel,
    quote,
    cancellation,
    previewImage: { url: imageUrl, caption, tag },
  },
}) {
  return (
    <StyledOffer>
      <Preview imageUrl={imageUrl} caption={caption} tag={tag} />
      <Detail hotel={hotel} cancellation={cancellation} />
      <Quote quote={quote} />
    </StyledOffer>
  );
}

Offer.propTypes = {
  offer: PropTypes.shape({
    hotel: PropTypes.shape(Hotel),
    quote: PropTypes.shape(Quote),
    cancellation: PropTypes.string,
    previewImage: PropTypes.shape(PreviewImage),
  }).isRequired,
};
