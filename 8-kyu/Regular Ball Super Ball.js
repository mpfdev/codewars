//Use of Ternary Operators
//If ballType is used as parameter >> return ballType: super
//If not >> return ballType: regular

var Ball = function (ballType) {
  return ballType ? { ballType: 'super' } : { ballType: 'regular' };
};
