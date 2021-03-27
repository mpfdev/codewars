function reverseLetter(str) {
  return str.replace(/[^a-z]/g, '').split('').reverse().join('')
}