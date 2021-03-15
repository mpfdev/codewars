function twiceAsOld(dadYearsOld, sonYearsOld) {
  let solve = dadYearsOld - sonYearsOld * 2;
  return solve < 0 ? solve * -1 : solve;
}
