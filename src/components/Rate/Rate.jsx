/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import {
  FaCircle as Circle,
  FaAdjust as HalfCircle,
  FaStar as Star,
  FaStarHalf as HalfStar,
} from 'react-icons/fa';
import styled from 'styled-components';
import { COLOR_BUTTER_YELLOW } from '../../styles/variables';

const TYPE = {
  STAR: 'STAR',
  CIRCLE: 'CIRCLE',
};

const StyledRate = styled.div`
  color: ${COLOR_BUTTER_YELLOW};
`;

export function Rate({ type, value }) {
  const Icon = {
    [TYPE.CIRCLE]: {
      full: Circle,
      half: HalfCircle,
    },
    [TYPE.STAR]: {
      full: Star,
      half: HalfStar,
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

  return <StyledRate>{characters}</StyledRate>;
}

Rate.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
