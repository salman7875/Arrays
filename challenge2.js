'use strict';

/*
Let's go back to Julia and kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average of dogs in their study.

Create a function 'calcAverageHumanAge', which accept an arrays of dog's ages ('ages'), and does the following thing in order:

1: Calculate the dog age in human years using the following formula: 
if the dog is <= 2 years old, humanAge = 2 * dogAge. 
If the dog is > 2 years old, humanAge = 16 + dogAge * 4.

2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at atleast 18 years old)

3. Calculate the average human age of all adult dogs.

4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

*/

const calcAverageHumanAge = function(ages) {
    console.log(ages);

    // 1.
    const humanAges = ages.map(function(age) {
        if (age <= 2) {
            return 2 * age;
        } else {
            return 16 + age * 4;
        }
    })
    console.log(humanAges);

    // 2.
    const adult = humanAges.filter(function(age) {
        return age >= 18;
    });
    console.log(adult);

    // 3.

    /* 1st Method
    const average = adult.reduce(function(acc, age, i, arr) {
        return (acc + age / arr.length);
    }, 0);
    */

    // 2nd Method
    const average = adult.reduce(function(acc, age, i, arr) {
        return acc + age;
    }, 0) / adult.length;
    return average

}
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]); 

console.log('-----------------------');
console.log(avg1, avg2);