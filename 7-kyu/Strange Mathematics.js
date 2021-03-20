function strangeMath(n, k) {
  let arr = new Array();
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr.sort().findIndex((num) => num === k) + 1;
}
