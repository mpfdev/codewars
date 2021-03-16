function sumCubes(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    count += i ** 3;
  }
  return count;
}
