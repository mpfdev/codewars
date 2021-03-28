//forEach return undefined

function greetDevelopers(list) {
  list.forEach(
    (person) =>
      (person.greeting = `Hi ${person.firstName}, what do you like the most about ${person.language}?`)
  );
  return list;
}
