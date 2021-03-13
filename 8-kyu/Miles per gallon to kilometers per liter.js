function converter(mpg) {
  let convert = ((1.609344 / 4.54609188) * mpg).toFixed(2);
  convert = Number(convert);
  if (convert[convert.length - 1] === 0) {
    return convert.toFixed(1);
  } else {
    return convert;
  }
}
