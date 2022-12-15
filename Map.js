'use strict';

// Map is used to loop over arrays. Map will give us a brand new array, and this new Array will contain in each position the result of applying a callback function to the original array elements.

// Converting EUROS to US Dollars
const movements = [200, 400, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;

// const movementsUSD =  movements.map(function(mov) {
//     return mov * euroToUsd;
// })
const movementsUSD = movements.map(mov => mov * euroToUsd);

console.log(movements);
console.log(movementsUSD);

// With forOf Loop
const newArr = [];
for (const mov of movements) {
    newArr.push(mov * euroToUsd);
}
console.log(movements);
console.log(newArr);


const movementsDescription = movements.map((mov, i, arr) => {

    return `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`; 

    // if (mov > 0) {
    //     return `Movement ${i + 1}: You deposited ${mov}`;
    // } else {
    //     return `Movement ${i + 1}: You withdrew ${mov}`;
    // }
});
console.log(movementsDescription);