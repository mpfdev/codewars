function feast(beast, dish) {
  //P: two strings
  //R: boolean, true or false
  //E: feast("brown bear", "bear claw"), false
  //   feast("chickadee", "chocolate cake"), true
  //P: spliting the strings and comparing if the first/last element of the array are equals

  let beastArray = beast.split('')
  let dishArray = dish.split('')

  if (beastArray[0] === dishArray[0] && beastArray[beastArray.length - 1] === dishArray[dishArray.length - 1]) {
    return true
  } else {
    return false
  }
}