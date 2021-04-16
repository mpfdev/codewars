function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }

  console.log(h, bounce, window);

  let result = 1;
  let current = h * bounce;

  while (current > window) {
    current *= bounce;
    result += 2;
  }

  return result;
}
