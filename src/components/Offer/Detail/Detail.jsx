/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DUSTY_GRAY } from '../../../styles/variables';
import { Rate } from '../../Rate/Rate';
import { Hotel } from '../../../propTypes/Offer';

const StyledDetail = styled.section`
  --gap: 0.5rem;

  display: grid;
  grid-gap: 2rem;
  padding: var(--gap);
  grid-template-rows: repeat(2, auto) 1fr;
`;

const Heading = styled.div`
  display: grid;
  grid-gap: var(--gap);
`;

const NameLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 1rem;
  align-items: center;
`;

const HotelName = styled.h2`
  margin: 0;
  max-width: 25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Address = styled.div`
  color: ${DUSTY_GRAY};
  font-style: normal;
`;

const RoomType = styled.div``;

const Policy = styled.div``;

export function Detail({
  hotel: {
    name,
    address,
    rate: { type, value },
    room,
  },
  cancellation,
}) {
  return (
    <StyledDetail>
      <Heading>
        <NameLayout>
          <HotelName>{name}</HotelName>
          <Rate type={type} value={value} />
        </NameLayout>
        <Address>{address.join(' ')}</Address>
      </Heading>
      <RoomType>{room}</RoomType>
      <Policy>{cancellation}</Policy>
    </StyledDetail>
  );
}

Detail.propTypes = {
  hotel: PropTypes.shape(Hotel).isRequired,
  cancellation: PropTypes.string.isRequired,
};
