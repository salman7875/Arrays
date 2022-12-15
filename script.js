 'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// CALCULATING OVERALL BALANCE
/* Without SCOPE CHAINING
const accountMovement = accounts.map((cur, i, arr) => {
  return cur.movements;
})
const allMovements = accountMovement.flat();
const overallBalance = allMovements.reduce((acc, cur) => acc + cur, 0);
console.log(overallBalance);
*/

// FLAT 
// With SCOPE CHAINING 
const overallBalance = accounts
  .map(cur => cur.movements)
  .flat()
  .reduce((acc, cur) => acc + cur, 0);
console.log(overallBalance);

// FLATMAP: It only goes 1 depth Deeper
const overallBalance2 = accounts
  .flatMap(cur => cur.movements)
  .reduce((acc, cur) => acc + cur, 0)
console.log(overallBalance2);

const displayMovements = function(movements, sort = false) {
  // Emptying the container before adding the array
  containerMovements.innerHTML = '';   

  // Sorting
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  
  movs.forEach(function(mov, i) {
    const check = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${check}">${i + 1} ${check}</div>
    <div class="movements__value">${mov}€</div>
    </div>
    `
    containerMovements.insertAdjacentHTML("afterbegin", html);
  })
  
}


// Calculating Balance And Displaying it
const calcDisplayBalance = function(account) {
  account.balance = account.movements.reduce((acc, mov, i, arr) => {
    return acc + mov;
  }, 0);
  labelBalance.textContent = `${account.balance}€`;
}

// Calculating DEPOSITS, WITHDRAWL and INTEREST and displaying it.
const calcDisplaySummary = function(accounts) {
  const incomes = accounts.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}Є`; 

  const out = accounts.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}Є`;

  const interest = accounts.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * accounts.interestRate / 100)
    .filter((int, i,arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}Є`
}


// Computing username
const createUsernames = function(accs) {
  accs.forEach(function(acc) {
    acc.username = acc.owner.toLowerCase().split(' ').map((word) => {
      return word[0];
    }).join("");
  })
}
createUsernames(accounts);

// UPDATE UI (REFACTORING)
const updateUI = function(account) {
  // DISPLAY MOVEMENTS
  displayMovements(account.movements);

  // Calculate BALANCE and DISPLAY
  calcDisplayBalance(account);

  // Calculate SUMMARY and DISPLAY
  calcDisplaySummary(account);
}

// Login
let currentAccount;

btnLogin.addEventListener('click', function(e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find((account) => {
    return account.username === inputLoginUsername.value.trim();
  })
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and WELCOME MESSAGE
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = '100';

    // Clear INPUT fields
    // inputLoginUsername.value = '';
    // inputLoginPin.value = '';
    inputLoginUsername.value = inputLoginPin.value = '';  // 2nd METHOD
    inputLoginPin.blur();

    // Updating the UI
    updateUI(currentAccount);
  }
})

// Transfering money to Other Account
btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const recieverAccount = accounts.find((account) => {
    return account.username === inputTransferTo.value;
  }) 

  // Clearing the INPUT field
  inputTransferTo.value = '';
  inputTransferAmount.value = '';
  inputTransferAmount.blur();

  if (recieverAccount && recieverAccount?.username !== currentAccount.username && currentAccount.balance >= amount && amount > 0) {
    // Doing the TRANSFER
    currentAccount.movements.push(-amount);
    recieverAccount.movements.push(amount);

    // Updating The UI
    updateUI(currentAccount);
  } else {
    console.log('Fail');
  }
})

// REQUESTING LOAN
btnLoan.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  // console.log(amount);

  if (amount > 0 && currentAccount.movements.some(cur => cur >= amount / 10)) {
    // Add Movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  } else {
    console.log('fail');
  }
  // Clearing INPUT
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
})

// DELETING USER account by using FIND INDEX method
btnClose.addEventListener('click', function(e) {
  e.preventDefault();

  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    // Finding User
    const index = accounts.findIndex(acc => {
      return acc.username === currentAccount.username;
    })
    console.log(index);

    // Deleting User
    accounts.splice(index, 1);

    // Hiding UI
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Your Account is Deleted';
  }
  // Clearing INPUT
  inputCloseUsername.value = inputClosePin.value = '';
  inputClosePin.blur();
})

let sorted = false;
btnSort.addEventListener('click', function(e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);

  // Flipping the SORTED Variable
  sorted = !sorted;
})


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE: It returns new array with extracted parts
// console.log(arr.slice(2));  
// console.log(arr.slice(2, 4));  
// console.log(arr.slice(-2));  // ['d', 'e']  
// console.log(arr.slice());  // It can also be used to create a shallow copy of an array

// console.log('------------------------------------');

// SPLICE: It mutate/changes the original array
// console.log(arr.splice(2));
// console.log(arr.splice(2, 3));
// arr.splice(-1);   // last element would be removed
// console.log(arr);

// Reverse: It mutate/changes the original array
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// CONCAT: It does NOT mutate/changes the original array
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log(...arr, ...arr2);  // using spread operator

// JOIN
// console.log(letters.join(' '));


// -------------- FIND EXAMPLE --------------
const account = accounts.find(acc => {
  return acc.owner === 'Jessica Davis';
})
// console.log(account);

// With forOf loop
for (const account of accounts) {
  if (account.owner == 'Jessica Davis') {
    // console.log(account);
  }
}

// findIndex returns the INDEX of a found element and NOT the element itself.
const arr = [23, 76, 53, 38, 97];
const index = arr.findIndex((cur, i, arr) => {
  // console.log(cur);
  // console.log(i);
  // console.log(arr);
  return cur > 80;
})
// console.log(index);
// ------------------------------------------

// Creating Array from NODELIST(array-like object)
labelBalance.addEventListener('click', function() {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'), (el) => parseInt(el.textContent.replace('Є', '')));
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  console.log(movementsUI2.map(el => parseInt(el.textContent.replace('Є', ''))));
});