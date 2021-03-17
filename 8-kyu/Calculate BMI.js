function bmi(weight, height) {
  if (weight / height ** 2 <= 18.5) {
    return 'Underweight';
  } else if (weight / height ** 2 <= 25) {
    return 'Normal';
  } else if (weight / height ** 2 <= 30) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}
