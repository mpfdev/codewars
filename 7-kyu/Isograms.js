function isIsogram(str) {
  //P: string as input
  //R: boolean as output
  //E: isIsogram("Dermatoglyphics") == true
  //   isIsogram("moOse") == false
  //P: transform str to lowercase
  //   uses the SET method, to store UNIQUE values
  //   compares if it is equal to input string

  return str.toLowerCase() === [...new Set(str.toLowerCase())].join('');
}
