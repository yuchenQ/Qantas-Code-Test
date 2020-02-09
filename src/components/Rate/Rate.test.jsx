/** @format */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Rate } from './Rate';

describe('Rate', () => {
  afterEach(cleanup);

  test('should render Circle', () => {
    const { queryAllByTestId } = render(
      <Rate value={5} type={Rate.type.CIRCLE} />,
    );

    expect(queryAllByTestId('circle').length).toBe(5);
    expect(queryAllByTestId('circle-half').length).toBeFalsy();
  });

  test('should render Star', () => {
    const { queryAllByTestId } = render(
      <Rate value={3} type={Rate.type.STAR} />,
    );

    expect(queryAllByTestId('star').length).toBe(3);
    expect(queryAllByTestId('star-half').length).toBeFalsy();
  });

  test('should render a half icon', () => {
    const { queryAllByTestId } = render(
      <Rate value={4.5} type={Rate.type.STAR} />,
    );

    expect(queryAllByTestId('star').length).toBe(4);
    expect(queryAllByTestId('star-half').length).toBe(1);
  });
});
