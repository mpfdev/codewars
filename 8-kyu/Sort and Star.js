function twoSort(s) {
  //P: array of srtings as input
  //R: first word alphabetically
  //E:  twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 
  //   'b***i***t***c***o***i***n' 
  //P: sort alphabetically, split the first one into chars
  //   and join with '***

  let first = ''
  s = s.sort()
  first = s[0].split('').join('***')
  return first
}