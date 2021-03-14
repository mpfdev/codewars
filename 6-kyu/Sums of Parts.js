/**
 * The first test is a empty array, check it to return with 0 element.
 *
 * .reduce() to sum all elements of the array, as your first element
 *
 *  A solution i took was using REST PARAMETERS, the idea was to create a new array as output
 * mapping to sum all elements and substracting the first one.
 */

function partsSums(ls) {
  if (ls.length === 0) {
    return [0];
  }

  let sumTotalArray = ls.reduce((a, b) => a + b);
  return [sumTotalArray, ...ls.map((elem) => (sumTotalArray -= elem))];
}
