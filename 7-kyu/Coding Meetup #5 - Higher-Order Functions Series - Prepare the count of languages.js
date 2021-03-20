function countLanguages(list) {
  // thank you for checking out the Coding Meetup kata :)
  let obj = new Object();
  list.forEach((elem) => (obj[elem.language] = (obj[elem.language] || 0) + 1));
  return obj;
}
