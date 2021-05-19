function abbrevName(name) {

  // code away

  return name.split(' ').map(name => name.charAt(0)).join('.').toUpperCase()
}