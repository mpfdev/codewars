function fakeBin(x) {
  //P: string of digits as input
  //R: string of 0's and 1's
  //E: fakeBin('45385593107843568'), '01011110001100111'
  //   fakeBin('509321967506747'), '101000111101101'
  //P: Transform in an array of chars
  //   transform each string in a number and replace

  x = Array.from(x)
  return x.map(elem => elem < 5 ? '0' : '1').join('')
}