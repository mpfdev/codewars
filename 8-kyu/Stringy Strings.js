function stringy(size) {
  let answer = [];
  for (let i = 1; i <= size; i++) {
    answer.push(i % 2);
  }
  return answer.join('');
}
