/** @format */

import { isCancellable, FREE_CANCELLATION } from './isCancellable';

describe('cancellable', () => {
  test('FREE_CANCELLATION', () => {
    const result = isCancellable(FREE_CANCELLATION);

    expect(result).toBe(true);
  });

  test('NOT_REFUNDABLE', () => {
    const result = isCancellable('something else');

    expect(result).toBe(false);
  });
});
