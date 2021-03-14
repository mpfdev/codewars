/**
 * the substraction of the both sums, will be the missing number in sequence
 */

function findDeletedNumber(arr, mixArr) {
  if (!arr.length) {
    return 0;
  }

  arr = arr.reduce((a, b) => a + b);
  mixArr = mixArr.reduce((a, b) => a + b);

  return arr.length < 1 ? 0 : arr - mixArr;
}
