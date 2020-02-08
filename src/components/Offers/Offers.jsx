/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
/* eslint-disable import/no-named-default */
import { default as OfferPropType } from '../../propTypes/Offer';
import { Offer } from '../Offer';

const StyledHotels = styled.div`
  display: grid;
  grid-row-gap: 2rem;
`;

export function Offers({ offers }) {
  return (
    <StyledHotels>
      {offers.map(({ uuid, hotel, quote, cancellation, previewImage }) => (
        <Offer
          key={uuid}
          hotel={hotel}
          quote={quote}
          cancellation={cancellation}
          previewImage={previewImage}
        />
      ))}
    </StyledHotels>
  );
}

Offers.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(OfferPropType)).isRequired,
};
