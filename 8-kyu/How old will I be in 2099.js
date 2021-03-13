function calculateAge(birthYear, actualYear) {
  let difference = actualYear - birthYear;
  if (difference > 1) {
    return `You are ${actualYear - birthYear} years old.`;
  } else if (difference === 0) {
    return `You were born this very year!`;
  } else if (difference === 1) {
    return `You are 1 year old.`;
  } else if (difference < -1) {
    return `You will be born in ${difference * -1} years.`;
  } else {
    return `You will be born in ${difference * -1} year.`;
  }
}
