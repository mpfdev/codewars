function evenOrOdd(str) {
  const even = str
    .split('')
    .filter((x) => x % 2 === 0)
    .reduce((a, b) => a + Number(b), 0);
  const odd = str
    .split('')
    .filter((x) => x % 2 !== 0)
    .reduce((a, b) => a + Number(b), 0);

  return even > odd
    ? 'Even is greater than Odd'
    : odd > even
    ? 'Odd is greater than Even'
    : 'Even and Odd are the same';
}
