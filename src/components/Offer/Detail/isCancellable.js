/** @format */

export const FREE_CANCELLATION = 'FREE_CANCELLATION';

export function isCancellable(policy) {
  return policy === FREE_CANCELLATION;
}
