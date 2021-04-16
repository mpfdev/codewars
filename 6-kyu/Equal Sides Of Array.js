function findEvenIndex(arr) {
  //P: array of integer as input
  //R: return index as output (can be -1, if not found)
  //E: findEvenIndex([1,2,3,4,5,6]),-1, "The array was: [1,2,3,4,5,6] \n")
  //   findEvenIndex([1,2,3,4,3,2,1]),3, "The array was: [1,2,3,4,3,2,1] \n")
  //P: The use of findIndex() method, to return the index of the condition, and return -1 if is not found
  //   Slice is a possibility to gather the elements through the array
  //   Reduce to sum
  //   Repeat the process for the element at right
  //   Verify if its equall

  return arr.findIndex((x, i) => {
    return (
      arr.slice(0, i).reduce((a, b) => a + b, 0) ===
      arr.slice(i + 1, arr.length).reduce((a, b) => a + b, 0)
    );
  });
}
