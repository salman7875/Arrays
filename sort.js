'use strict'

// SORT(): It converts EVERYTHING to STRING and then it does the sorting.
// It MUTATES the ORIGINAL Array

const owners = ['Salman', 'Umar', 'Aman', 'Albar', 'Sufiyan']
console.log(owners.sort())
console.log(owners)

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
// console.log(movements.sort());
console.log(movements)

// return < 0 A, B (Keep order)
// return > 0 B, A (Switch order)
const sorting = movements.sort((a, b) => {
  if (a > b) {
    return 1
  }
  if (a < b) {
    return -1
  }
});
console.log(sorting);
// movements.sort((a, b) => a - b);