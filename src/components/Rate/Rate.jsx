/** @format */

import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Circle, CircleHalf, Star, StarHalf } from '../Icons';

const TYPE = {
  STAR: 'STAR',
  CIRCLE: 'CIRCLE',
};

const StyledRate = styled.div`
  color: ${({ color }) => color && color};
`;

export function Rate({ type, value, color }) {
  const Icon = {
    [TYPE.CIRCLE]: {
      full: Circle,
      half: CircleHalf,
    },
    [TYPE.STAR]: {
      full: Star,
      half: StarHalf,
    },
  }[type];

  if (!Icon) {
    return null;
  }

  const characters = [];

  for (let index = 0; index < value; index += 1) {
    if (value - index >= 1) {
      characters.push(<Icon.full key={index} />);
    } else {
      characters.push(<Icon.half key={index} />);
    }
  }

  return (
    <StyledRate data-testid="rate-wrapper" color={color}>
      {characters}
    </StyledRate>
  );
}

Rate.defaultProps = {
  color: '',
};

Rate.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  color: PropTypes.string,
};

Rate.type = TYPE;
