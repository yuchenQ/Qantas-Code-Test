/** @format */

import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import sinon from 'sinon';
import { SortSelect } from './SortSelect';
import { SORT_TYPE } from '../App/sortOffers';

describe('SortSelect', () => {
  const onSelectSpy = sinon.spy();
  const options = Object.values(SORT_TYPE);

  const data = {
    options,
    onSelect: ({ target: { value } }) => onSelectSpy(value),
    sortType: options[0],
  };

  let getByTestId;
  let getAllByTestId;

  beforeEach(() => {
    ({ getAllByTestId, getByTestId } = render(
      <SortSelect
        options={data.options}
        onSelect={data.onSelect}
        sortType={data.sortType}
      />,
    ));
  });

  afterEach(cleanup);

  test('should show label', () => {
    expect(getByTestId('label')).toHaveTextContent('Sort by');
  });

  test('should have all input options', () => {
    getAllByTestId('option').forEach((element, i) => {
      expect(element.value).toBe(data.options[i]);

      expect(element).toHaveTextContent(`Price ${element.value}`);
    });
  });

  test('should see default option first', () => {
    const { value } = getByTestId('select');

    expect(value).toBe(data.sortType);
  });

  test('onChange & value', () => {
    const select = getByTestId('select');

    expect(select.value).toBe(data.sortType);

    const { value } = getAllByTestId('option')[0];

    fireEvent.change(select, { target: { value } });
    sinon.assert.calledWith(onSelectSpy, data.sortType);
  });
});
