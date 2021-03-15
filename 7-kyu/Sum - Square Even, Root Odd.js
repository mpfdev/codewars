const sumSquareEvenRootOdd = (nums) => {
  return Number(
    nums
      .map((num) => (num % 2 === 0 ? num * num : Math.sqrt(num)))
      .reduce((a, b) => a + b, 0)
      .toFixed(2)
  );
};
