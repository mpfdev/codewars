function fakeBin(x) {
  return Array.from(x)
    .map((num) => (num < 5 ? (num = 0) : (num = 1)))
    .join('')
    .toString();
}
