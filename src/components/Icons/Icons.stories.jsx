/** @format */

import React from 'react';
import IconStar from './Star';
import IconStarHalf from './StarHalf';
import IconCircle from './Circle';
import IconCircleHalf from './CircleHalf';

export default {
  title: 'Icons',
  parameters: {
    notes: 'The Icons used in this project',
  },
};

export const Star = () => <IconStar />;
export const StarHalf = () => <IconStarHalf />;
export const Circle = () => <IconCircle />;
export const CircleHalf = () => <IconCircleHalf />;
