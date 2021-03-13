//fix syntax errors

function myFirstKata(a, b) {
  if (typeof a !== typeof 1 || typeof b !== typeof 1) {
    return false;
  } else {
    return (a % b) + (b % a);
  }
}
