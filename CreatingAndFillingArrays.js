'use strict';

// Fill Method MUTATE the original ARRAY

const arr = [1, 3, 78, 32, 89];
arr.fill(5, 2, 4);   // (value, startIndex, endIndex) endIndex not Included
console.log(arr);    

// Empty Arrays + Fill Method
const x = new Array(7);  
x.fill(2);
x.fill(11, 3, 5); 
console.log(x);   // [2, 2, 2, 11, 11, 2, 2]

// Array.from
const y = Array.from({length: 7}, () => 1);
console.log(y);   // [1, 1, 1, 1, 1, 1, 1]

const z = Array.from({length: 7}, (cur, i) => i + 1);
console.log(z);   // [1, 2, 3, 4, 5, 6]

