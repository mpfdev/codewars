/**
 *
 * Spray Operators to make a new array with two other arrays
 * .sort() to sort the elements
 * new Set to remove the duplicate elements
 */

function mergeArrays(arr1, arr2) {
  let mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
  return [...new Set(mergedArray)];
}
