'use strict';

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());   // [1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());  // [Array(2), 3, 4, Array(2), 7, 8]
console.log(arrDeep.flat(2));  // [1, 2, 3, 4, 5, 6, 7, 8]