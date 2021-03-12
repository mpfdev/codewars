//Math.max.apply(null, array) ==> Return the largest number in the array
//.split(' ') ==> split to make it an array
//.map() ==> to take the length of an array on each element

function findLongest(str) {
  return Math.max.apply(
    null,
    str.split(' ').map((elem) => elem.length)
  );
}
