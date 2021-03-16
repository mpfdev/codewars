function noOdds(values) {
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 !== 0) {
      values.splice(i, 1);
    }
  }
  return values;
}
