function first(arr, n = 1) {
  if (n == 0) {
    return [];
  } else if (n > 0) {
    return arr.slice(0, n);
  }
}