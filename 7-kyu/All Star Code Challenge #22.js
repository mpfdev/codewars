function toTime(seconds) {
  //P: integer in seconds
  //R: string many hours and minutes
  //E: toTime(3600), '1 hour(s) and 0 minute(s)'
  //takes the amount of seconds and divide by 60
  //if modulo is 0, its only hours
  //if not, the rest is minutes

  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds / 3600 - hours) * 60);
  if (seconds % 60 === 0) {
    return `${hours} hour(s) and 0 minute(s)`;
  } else {
    return `${hours} hour(s) and ${minutes} minute(s)`;
  }
}
