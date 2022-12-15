'use strict';

// We can use FIND method to retrieve one element of an ARRAY based on a condition. It will NOT return a NEW ARRAY, but it RETURN the FIRST ELEMENT in the ARRAY that satisfy the CONDITION.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawl =  movements.find((mov, i, arr) => {
    return mov < 0;
})

console.log(movements);
console.log(firstWithdrawl);