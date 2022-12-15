'use strict';

const checkDogs = function(dogsJulia, dogsKate) {
    // 1.Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
    const juliaCopy = dogsJulia.slice();
    juliaCopy.splice(0, 0);
    juliaCopy.splice(-2);
    console.log(juliaCopy);

    // 2. Create an array with both Julia's (corrected) and Kate's data.
    const correctedData = juliaCopy.concat(dogsKate);
    console.log(correctedData);

    // 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy � ")
    correctedData.forEach(function(dog, i, arr) {
        if (dog >= 3) {
            console.log(`Dog number ${i + 1} is an Adult, and is ${dog} years Old.`);
        } else {
            console.log(`Dog number ${i + 1} is still a Puppy, and is ${dog} years Old.`);
        }
    });
}
checkDogs([3, 5, 2, 12, 7],  [4, 1, 15, 8, 3]);
console.log('----------------');
checkDogs( [9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);