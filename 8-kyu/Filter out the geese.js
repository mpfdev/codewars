//.filter() elem from the birds array looking for a match
//.includes() a certain value : true or false

function gooseFilter(birds) {
  var geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];

  // return an array containing all of the strings in the input array except those that match strings in geese
  return birds.filter((elem) => !geese.includes(elem));
}
