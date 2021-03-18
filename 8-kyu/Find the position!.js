/**
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
 *
 */

function position(letter) {
  return `Position of alphabet: ${letter.charCodeAt(0) - 97 + 1}`;
}
