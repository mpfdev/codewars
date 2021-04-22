function nameShuffler(str) {
  //P: string as input
  //R: swapped last name and first name as string
  //E: nameShuffler('john McClane'),'McClane john'
  //P: split in two words and reverse

  return str.split(' ').reverse().join(' ')
}