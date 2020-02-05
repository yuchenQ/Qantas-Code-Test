/** @format */

export function capitalize([first, ...rest], lowerRest = true) {
  return `${first.toUpperCase()}${lowerRest ? rest.join('').toLowerCase() : rest.join('')}`;
}
