function countDevelopers(list) {
  return list.filter(
    (person) =>
      person.continent === 'Europe' && person.language === 'JavaScript'
  ).length;
}
