function areYouPlayingBanjo(name) {
  if (name.toLowerCase().startsWith('r')) {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }
}
