'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

// EQUALITY
console.log(movements.includes(450));

// SOME: CONDITION
// If there is any value for which the condition is TRUE then the SOME Method will return TRUE
console.log(movements.some((cur, i, arr) => cur === 450));
const anyDeposit = movements.some((cur, i, arr) => {
    return cur > 0;
})
console.log(anyDeposit);

// EVERY
// It only return true when all of the element in the ARRAY satisfy the condition that we pass in.
console.log(movements.every((cur, i, arr) => cur > 0));

// Separate Callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));