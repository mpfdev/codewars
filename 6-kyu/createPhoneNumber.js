function createPhoneNumber(numbers) {
  //P: array of numbers as input
  //R: string of numbers as output
  //E: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890"
  //P: create a format string (xxx) xxx-xxxx
  //   replace each x for the element of an array

  let format = '(xxx) xxx-xxxx';
  for (let i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  }
  return format;
}
