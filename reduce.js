'use strict';

// We Use REDUCE method to boil down all the elements in the ARRAY to a SINGLE value.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// accumulator -> SNOWBALL
const balance = movements.reduce(function(acc, cur, i, arr) {
    console.log(`Iteration ${i}: Accumulator = ${acc}`);
    return acc + cur;
}, 0);   // This '0' is a 2nd PARAMETER. It is the Initial Value of the accumulator
console.log(balance);

console.log('-------------------------------');

// Maximum value
const maxVal = movements.reduce((acc, cur, i, arr) => {
    console.log(`Iteration ${i}: Accumulator = ${acc}`);

    if (acc > cur) {
        return acc;
    } else {
        return cur;
    }
}, movements[0]);
console.log(`Maximum value with 'REDUCE method': ${maxVal}`);

console.log('-------------------------------');

// Minimum value
const minVal = movements.reduce((acc, cur, i, arr) => {
    console.log(`Iteration ${i}: Accumulator = ${acc}, Current = ${cur}`);

    if (acc > cur) {
        return cur;
    } else {
        return acc;
    }
}, movements[0]);
console.log(`Minimum value with 'REDUCE method': ${minVal}`);

console.log('-------------------------------');

// With forOf loop
// let balance2 = 0;
// for (const mov of movements) {
//     balance2 += mov;
// }
// console.log(balance2);

console.log('-------------------------------');

// Max value with forOf
let max = movements[0];
for (const val of movements) {
    if (max < val) {
        max = val;
    }
} 
console.log(`Maximum value with 'forOf': ${max}`);

console.log('-------------------------------');

// Min value with forOf
let min = movements[0];
for (const val of movements) {
    if (min > val) {
        min = val;
    }
}
console.log(`Minimum value with 'forOf': ${min}`);

console.log('-------------------------------');