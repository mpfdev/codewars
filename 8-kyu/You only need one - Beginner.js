function check(a, x) {
  //P: input array and value
  //R: boolean as output
  //E: check([66, 101], 66), true
  //   check(['what', 'a', 'great', 'kata'], 'kat'), false
  //P: Verify using indexOf() method if the value can be 
  //   found in the array

  return a.indexOf(x) > -1
}