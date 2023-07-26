'use strict';

// Scoping in Practice
/*
function calcAge(birthYear) {
  const age = 2023 - birthYear;
  function printAge() {
    const output = `You are ${age},born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `${firstName}`;
      console.log(str);
    }
  }
  printAge();

  return age;
}

const firstName = 'Nishant';
calcAge(1997);
*/

// HOISTING
/*
console.log(me);
console.log(job);
console.log(year);

var me = 'Nishant';
let job = 'Kei na kei';
const year = 1991;

// Functions

console.log(addDec(1, 2));
console.log(addEcp(1, 2));
console.log(addArrow(1, 2));

function addDec(a, b) {
  return a + b;
}

const addEcp = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
*/

// Example

/*
if (!numProduct) deleteShoppingCart();

var numProduct = 10;

function deleteShoppingCart() {
  console.log('All product deleted');
}

var x = 1;
let y = 2;
const z = 3;
*/

/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this);
};

calcAge(this);

const calcAgeArrow = birthYear => {
  console.log(2023 - birthYear);
  console.log(this);
};

calcAge(this);

const nishant = {
  year: 1997,
  calcAge: function () {
    console.loh(this);
    console.log(2023 - this.year);
  },
};

nishant.calcAge();

const nepal = {
  year: 2080,
};

nepal.calcAge = nishant.calcAge;
*/
/*
const nishant = {
  firstName: 'Nishant',
  year: 1997,
  calcAge: function () {
    console.loh(this);
    console.log(2023 - this.year);
  },
  greet: () => {
    console.log(this.firstName);
  },
};

nishant.greet();
*/

// Arguments keyword
/*
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);

var addArrow = (a, b) => a + b;
*/

/*

let age = 30;
let oldAge = age;

age = 31;
console.log(oldAge);
console.log(age);

const me = {
  name: 'Nishant',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log(friend);
console.log(me);
*/

/*
//Primitive Types
let lastName = 'Joshi';

let oldLastName = lastName;

lastName = 'Paras';

console.log(lastName, oldLastName);

//Reference type
const nepal = {
  fistName: 'Nepal',
  lastName: 'Josi',
  age: 192222,
};

const marriedNepal = nepal;

marriedNepal.lastName = 'Nis';

console.log(nepal);
console.log(marriedNepal);

//COpying object

const jessica2 = {
  fistName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['a', 'b', 'c'],
};

const kessica = Object.assign({}, jessica2);
kessica.lastName = 'Nepal';

kessica.family.push('D');
kessica.family.push('E');

console.log(jessica2);
console.log(kessica);
*/
