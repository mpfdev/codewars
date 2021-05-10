function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false
  } else {
    let ns = 0;
    let ew = 0;

    walk.forEach(dir => {
      if (dir === 'n') ns += 1
      if (dir === 's') ns -= 1
      if (dir === 'w') ew += 1
      if (dir === 'e') ew -= 1
    })

    if (ns === 0 && ew === 0) {
      return true
    } else {
      return false
    }
  }
}