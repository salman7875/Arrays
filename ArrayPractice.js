'use strict'

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111
}

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222
}

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333
}

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444
}

const accounts = [account1, account2, account3, account4]

// 1. Calculating The TOTAL amount deposited in the Bank.
const bankDepositSum = accounts
    .flatMap(acc => acc.movements)
    .filter(deposit => deposit > 0)
    .reduce((sum, deposit) => sum + deposit, 0);
console.log(bankDepositSum);

console.log('--------------------------------------------');

// 2. Count How Many deposit there have been in a Bank with atleast $1,000.
// const numDeposits1000 = accounts
//     .flatMap(acc => acc.movements)
//     .filter(deposit => deposit >= 1000).length

const numDeposits1000 = accounts
    .flatMap(acc => acc.movements)
    // .reduce((count, cur) => cur >= 1000 ? count + 1 : count, 0) // It works
    // .reduce((count, cur) => cur >= 1000 ? count++ : count, 0) // Return 0
    .reduce((count, cur) => cur >= 1000 ? ++count : count, 0)
console.log(numDeposits1000);

// Prefixed ++ operator
let a = 10;
console.log(++a);
console.log(a);

// 3. Create an OBJECT which contains the sum of the deposits and of the withdrawls
const sums = accounts
    .flatMap(acc => acc.movements)
    .reduce((sum, cur) => {
        // cur > 0 ? sum.deposits += cur : sum.withdrawals += cur;
        sum[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
        return sum;
    }, {deposits: 0, withdrawals: 0});
console.log(sums);

// 4. Function to CONVERT any String to a TITLE CASE
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function(title) {
    const capitilize = str => str[0].toUpperCase() + str.slice(1);

    const exception = ['or', 'an', 'a', 'with', 'the', 'but', 'on', 'in'];
    const titleCase = title
        .toLowerCase()
        .split(' ')
        .map(word => exception.includes(word) ? word : capitilize(word))
        .join(' ');
    return capitilize(titleCase);
}
console.log(convertTitleCase('this is a nice title case'));
console.log(convertTitleCase('this is a nice title case AND IT is ABsolUTely WOrst'));
console.log(convertTitleCase('anD this is a nice title case AND IT is ABsolUTely WOrst'));

// Random 100 dice roll with Array.from()

let ranNum = Array.from({ length: 100 }, (cur, i) => i);
console.log("Random Number: " + ranNum);