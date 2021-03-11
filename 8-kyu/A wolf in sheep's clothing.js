function warnTheSheep(queue) {
  let whereWolf = queue.reverse().findIndex((wolf) => wolf === 'wolf') + 1;
  return whereWolf === 1
    ? `Pls go away and stop eating my sheep`
    : `Oi! Sheep number ${whereWolf - 1}! You are about to be eaten by a wolf!`;
}
