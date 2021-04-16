function duplicateCount(text) {
  //P: string as input
  //R: number as output, count of distinct case-insensitive
  //E: duplicateCount(""), 0
  //   duplicateCount("aabBcde"), 2,"should ignore case")
  //P: turns string in lower case
  //   split, sort, and join
  //   look for match

  return (
    text
      .toLowerCase()
      .split('')
      .sort()
      .join('')
      .match(/([^])\1+/g) || []
  ).length;
}
