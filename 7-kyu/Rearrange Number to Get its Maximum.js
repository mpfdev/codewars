var maxRedigit = function(num) {
  // Do yor magic :)
  
  if ((''+num).length!==3) return null
  
  return Number(num.toString().split('').map(x => Number(x)).sort((a,b) => b-a).join(''))
};