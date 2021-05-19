function digitize(n) {
  return n.toString().split('').reverse().map(char => Number(char))
}