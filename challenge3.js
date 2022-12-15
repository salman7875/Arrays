'use strict'

/*
Rewrite a 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining.

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/

const calcAverageHumanAge = (ages) => {
  const humanAges = ages
    .map((age, i, arr) => {
      if (age <= 2) {
        return 2 * age
      } else {
        return 16 + age * 4
      }
    })
    .filter((age, i, arr) => {
        return age >= 18
    })
    .reduce((acc, age, i, arr) => {
        console.log(arr);
        return acc + age / arr.length;
    }, 0);
    console.log(humanAges);
}
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
