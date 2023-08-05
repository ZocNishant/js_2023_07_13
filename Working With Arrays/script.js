'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Nishant Joshi',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'A B',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'C D E',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'F G H',
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
/*
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let arr2 = ['k', 'p', 'l', 'm', 'o', 'n', 'i', 'j'];
*/
// SLice Method
/*
console.log(arr.slice(2));
console.log(arr.slice(-2));
console.log(arr.slice(2, -4));
console.log(arr.slice(2, 6));
console.log(arr.slice());
console.log([...arr]);
*/

// Splice method
/*
console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr.splice(1, 2));
console.log(arr);
*/

// Reverse
/*
console.log(arr2.reverse());
console.log(arr2);
*/

// Concat
/*
const letters = arr.concat(arr2);
console.log(letters);
console.log(...arr,...arr2);
*/

// JOIN
/*
console.log(arr.join(' - '));
*/

/*
const arr = [13, 45, 841];

console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);

console.log(arr.at(-1));

console.log('Nishant'.at(2));
*/

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`${i + 1}`);
  } else {
    console.log(`${i + 1}`);
  }
}

console.log('---------FOREACH----------');

movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`${movement} ${index} ${array}`);
  } else {
    console.log(`${movement} ${index} ${array}`);
  }
});
*/

/*
// Maps
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key} ${value} ${map}`);
});

// Sets
const currenciesUnique = new Set(['USD', 'NPR', 'NPR', 'GBP', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${_} ${value} ${map}`);
});
*/
