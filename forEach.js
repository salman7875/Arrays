'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const index of movements) {
for (const [i, mov] of movements.entries()) {
    if (mov > 0) {
        console.log(`Movement ${i + 1}: You deposited ${mov}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
    }
}

console.log('----------------------');

// forEach call the callBack function
// And it first passes 'current element' then 'index' and then the 'entire array'
// CONTINUE & BREAK doest NOT work in forEach loop
movements.forEach((mov, i, arr) => {
    if (mov > 0) {
        console.log(`Movement ${i + 1}: You deposited ${mov}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
    }
})

console.log('----------------');

// ForEach with MAPS
// It first passes 'current element' then 'keys' and then the 'entire array'
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
    console.log(`${key}: ${value}`);
})

console.log('--------------------');

// forEach with SETS
// SETS do NOT have KEYS or INDEX
// It first passes 'current element' then '_' and then the 'entire array'
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
currenciesUnique.forEach((value, _, map) => {
    console.log(`${value}: ${value}`);
}) 