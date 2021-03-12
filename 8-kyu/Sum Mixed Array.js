//.map(Number) =>> to convert everything in Number inside an array

function sumMix(x) {
  return x.map(Number).reduce((a, b) => a + b);
}
