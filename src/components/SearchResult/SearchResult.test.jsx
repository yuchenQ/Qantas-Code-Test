/** @format */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { SearchResult } from './SearchResult';

describe('SearchResult', () => {
  const data = {
    count: 5,
    location: 'Sydney',
  };

  let getByTestId;

  beforeEach(() => {
    ({ getByTestId } = render(
      <SearchResult count={data.count} location={data.location} />,
    ));
  });

  afterEach(cleanup);

  test('should render right words', () => {
    expect(getByTestId('search-result')).toHaveTextContent(
      '5 hotels in Sydney',
    );
  });

  test('should render right count', () => {
    expect(getByTestId('count')).toHaveTextContent('5');
  });

  test('should render right location', () => {
    expect(getByTestId('location')).toHaveTextContent('Sydney');
  });
});
