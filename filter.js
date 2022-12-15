'use strict';

// It use to filter element that satisfy certain condition.
// It has access to CURRENT ELEMENT, INDEX and ENTIRE ARRAY

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits =  movements.filter(function(mov, i, arr) {
    return mov > 0;
});

const withdrawl = movements.filter(function(mov) {
    return mov < 0;
});

console.log(deposits);
console.log(withdrawl);

// With forOf loop
const deposits1 = [];   
const withdrawl1 = [];   
for (const mov of movements) {
    if (mov > 0) {
        deposits1.push(mov);
    }
}

for (const mov of movements) {
    if (mov < 0) {
        withdrawl1.push(mov);
    }
}

console.log(deposits1);
console.log(withdrawl1);