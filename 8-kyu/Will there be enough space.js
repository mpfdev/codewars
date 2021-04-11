function enough(cap, on, wait) {
  return on + wait <= cap ? 0 : wait + on - cap;
}

//Ternary Operator
//Condition ? truthy : falsy
