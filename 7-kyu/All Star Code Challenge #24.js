function hypotenuse(a, b) {
  //two integers as input
  //one integer
  //3, 4 => 5
  //square root of a^2 + b^2
  return Math.sqrt(a ** 2 + b ** 2);
}

function leg(c, a) {
  //two integers as input
  //one integer
  //5, 3 => 4
  //square root of abs (a^2 - b^2)
  return Math.sqrt(Math.abs(c ** 2 - a ** 2));
}
