function pigLatin(phrase) {
  return phrase
    .toLowerCase()
    .split(' ')
    .map(([f, ...rest]) => rest.join('') + f + 'ay')
    .join(' ');
}
