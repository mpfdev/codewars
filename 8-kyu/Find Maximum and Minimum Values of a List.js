//Sort numbers in an array in ascending order

var min = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};

//Sort numbers in an arra in descending order
var max = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};
