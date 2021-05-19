function smallEnough(a, limit) {
  return a.every(a => a <= limit)
}