'use strict';

// Array Destructuring
/*
const resturant = {
  name: 'Paras',
  location: 'Kathmandu',
  categories: ['Nepali', 'Pizzeria', 'Organic'],
  starterMenu: ['Momo', 'Pasta', 'Cheese'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const num = [2, 3, 4];
const a = num[0];
const b = num[1];
const c = num[2];

const [x, y, z] = num;
console.log(x, y, z);
console.log(num);

let [main, , secondary] = resturant.categories;

//Switching Variables

// const temp = main;
// main = secondary;
// secondary = temp;

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 return values from a function
const [starter, mainCourse] = resturant.order(2, 0);
console.log(starter, mainCourse);

//Nested Destructing
const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

// Destructuring Objects

const resturant = {
  name: 'Paras',
  location: 'Kathmandu',
  categories: ['Nepali', 'Pizzeria', 'Organic'],
  starterMenu: ['Momo', 'Pasta', 'Cheese'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = 20,
    address,
  }) {
    console.log(starterIndex, mainIndex, time, address);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Pasta ${(ing1, ing2, ing3)}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

// this is spread because it is written in the right side of =
// const arr = [1, 2, ...arr];

// this is rest because it is written in the left side of =
const [a, b, ...others] = [1, 2, 3, 5, 2, 3, 52, 62, 14, 78];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...resturant.mainMenu,
  ...resturant.starterMenu,
];
console.log(pizza, risotto, otherFood);

const { sat, ...weekDays } = resturant.openingHours;
console.log(weekDays);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(sum);
  }
};

add(2, 3);
add(2, 3, 8);
add(2, 3, 8, 8, 65, 356);

const x = [23, 5, 7];
add(...x);

resturant.orderPizza('chicken', 'tomato', 'onion', 'olive');

/*
const ingredients = [
  // prompt('Lets make pasta! ing1'),
  // prompt('Lets make pasta! ing2'),
  // prompt('Lets make pasta! ing3'),
];
console.log(ingredients);
resturant.orderPasta(...ingredients);

// Objects
const newResturant = { ...resturant, founder: 'Nishant' };
console.log(newResturant);

resturant.orderDelivery({
  time: 12,
  address: 'AC',
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = resturant;
console.log(name, openingHours, categories);

const {
  name: resturantName,
  openingHours: hours,
  categories: tags,
} = resturant;
console.log(resturantName, hours, tags);

//Default Values
const { menu = [], starterMenu: starters = [] } = resturant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// Spread Operator

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...resturant.mainMenu, 'MOMO'];
console.log(newMenu);

// Copy Array

const mainMenuCopy = [...resturant.mainMenu];

// Join 2 array or more
const menuu = [...mainMenuCopy, ...resturant.starterMenu];
console.log(menuu);

//

const str = 'Nishant';
const letters = [...str, ' ', 's.'];
console.log(letters);
*/
