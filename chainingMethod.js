'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// We can only chain a METHOD after another one, if the first one returns an ARRAY. You can think of it as PIPELINE
// Pipeline
const euroToUSD = 1.1;
const totalDepositsUSD = movements
  .filter((mov, i, arr) => {
    return mov > 0;
  })
  .map((mov, i, arr) => {
    // console.log(arr);  // For checking the ARRAY that was return by the FILTER
    return mov * euroToUSD;
  })
  .reduce((acc, mov, i, arr) =>  {
    return acc + mov;
  }, 0);
// labelSumIn.textContent = Math.trunc(totalDepositsUSD);
console.log(totalDepositsUSD);