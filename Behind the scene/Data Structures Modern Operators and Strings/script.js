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
const weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const openingHours = {
  [weekdays[4]]: {
    open: 12,
    close: 22,
  },
  [weekdays[5]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const resturant = {
  name: 'Paras',
  location: 'Kathmandu',
  categories: ['Nepali', 'Pizzeria', 'Organic'],
  starterMenu: ['Momo', 'Pasta', 'Cheese'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //ES6 enhanced object literal
  openingHours,

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = 20, address }) {
    console.log(starterIndex, mainIndex, time, address);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Pasta ${(ing1, ing2, ing3)}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

const airline = 'Nepal Airlines Corporation';
console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

/*
const plane = '9NAC';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log(plane[3]);
console.log('u410'[2]);

console.log(airline.length);
console.log('u410'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('e'));
console.log(airline.indexOf('Airlines'));

//Slice method
console.log(airline.slice(4));
console.log(airline.slice(4, 10));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s == 'B' || s == 'E') {
    console.log('Middle Seat');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
checkMiddleSeat('22B');
*/

/*
// Maps
const rest = new Map();
rest.set('name', 'Classico Nepal');
rest.set(1, 'Ktm,Nepal');
console.log(rest.set(1, 'Pkr,Nepal'));

rest
  .set('categories', ['Nepali', 'Pizza', 'MOMO', 'Veg'])
  .set('open', 11)
  .set('close', 24)
  .set(true, 'We are opened')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
console.log(rest.size);

const question = new Map([
  ['question', 'Best Programming Language'],
  [1, 'C'],
  [2, 'JS'],
  [3, 'HTML'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try Again'],
]);

console.log(question);

//  Object to map
console.log(Object.entries(openingHours));
const hourMap = new Map(Object.entries(openingHours));
console.log(hourMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key == 'number') {
    console.log(key, value);
  }
}
*/

/*
// SETS -> Collection of unique values
const orderSets = new Set(['a', 'a', 'b', 'b', 'c', 'c']);
console.log(orderSets);
console.log(orderSets.size);
console.log(orderSets.has('Pizza'));
console.log(orderSets.has('a'));
orderSets.add('Paras');
orderSets.add('Paras');
orderSets.delete('Paras');
console.log(orderSets);

for (const order of orderSets) console.log(order);

// Exxample

const staff = ['Waiter', 'Chef', 'Waiter', 'manager', 'Chef'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
*/

/*
// Properties Name
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = properties.length;
for (const day of Object.keys(openingHours)) {
  openStr += `${day}`;
}

console.log(openStr);

// Properties Value
const values = Object.values(openingHours);
console.log(values);

// Entries objects
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/

/*
if (resturant.openingHours && resturant.openingHours.mon) {
  console.log(resturant.openingHours.mon.open);
}

// With optional chaining
console.log(resturant.openingHours.mon?.open);

// Example
const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

for (const day of days) {
  console.log(day);
  const open = resturant.openingHours[day]?.open ?? 'closed';
  console.log(day, open);
}

// Methods

console.log(resturant.order?.(0, 1) ?? 'Method No');
console.log(resturant.orderMoMo?.(0, 1) ?? 'Method No');

// Arrays
const user = [{ name: 'Paras', email: 'z@gmail.com' }];
console.log(user[0].name ?? 'Empty');
*/

//For Of loop
/*
const menu = [...resturant.starterMenu, ...resturant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(item);
}
*/

/*
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
*/
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

// Short circuiting
// Or operator returns the first truthy value it finds during short circuiting
/*
console.log('-----------OR----------');
console.log(3 || 'Nishant');
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Nishant' || null);

resturant.numGuests = 23;
const guest1 = resturant.numGuests ? resturant.numGuests : 10;
console.log(guest1);

const guest2 = resturant.numGuests || 10;
console.log(guest2);

// AND operator returns the first falsy value it finds during short circuiting
console.log('--------AND--------');

console.log(0 && 'Nishant');
console.log('' && 'Nishant');
console.log(true && 0);
console.log(undefined && 0 && '' && 'Nishant' && null);

if (resturant.orderPizza) {
  resturant.orderPizza('mushroom', 'spinach');
}

resturant.orderPizza && resturant.orderPizza('mooshroom', 'saag');
*/

//Nullish Coalescing Operator
//Works in the idea of nullish value instead of falsy values (0 or '')
/*
resturant.numGuest = 0;
const guests = resturant.numGuest || 10;
console.log(guests);

const guestCorrect = resturant.numGuest ?? 10;
console.log(guestCorrect);
*/
/*
//Logical Assignment Operator

const rest1 = {
  name: 'NJ',
  numGuests: 0,
};

const rest2 = {
  name: 'JN',
  owner: 'Paras',
};

// OR Assignment Operator

// rest1.numberGuests = rest1.numGuests || 10;
// rest2.numberGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && 'ANONYMOUS';
// rest2.owner = rest2.owner && 'ANONYMOUS';

rest1.owner &&= 'ANONYMOUS';
rest2.owner &&= 'ANONYMOUS';

console.log(rest1);
console.log(rest2);
*/
