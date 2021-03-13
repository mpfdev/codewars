//bool ==> truth-ish => func1 => if not, func2

function _if(bool, func1, func2) {
  return bool ? func1() : func2();
}
