function well(x) {
  let counter = 0;
  x.map((innerArray) => {
    let result = innerArray.filter(
      (elem) => elem.toString().toLowerCase() === 'good'
    );
    counter += result.length;
  });
  if (counter > 2) {
    return 'I smell a series!';
  } else if (counter > 0) {
    return 'Publish!';
  } else {
    return 'Fail!';
  }
}
