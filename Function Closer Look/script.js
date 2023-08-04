'use strict';
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('NA123', 2, 800);
createBooking('NA123', 2);
createBooking('NA123', 5);
*/

/*
const flight = 'NA256';
const nishant = {
  name: 'Nishant Joshi',
  passport: 258963147,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'NA789';
  passenger.name = 'Mr ' + passenger.name;

  if (passenger.passport === 258963147) {
    alert('Good to go.');
  } else {
    alert('Not Good to go.');
  }
};

checkIn(flight, nishant);
console.log(flight);
console.log(nishant);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 784646523);
// };
*/

// newPassport(nishant);
// checkIn(flight.nishant);

/*
const onwWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirst = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

//Higher Order Function
const transformer = function (str, fn) {
  console.log(`Trasformed ${str}`);
  console.log(`Trasformed ${fn(str)}`);

  console.log(`trasnformed by ${fn.name}`);
};

transformer('JavaScript best', upperFirst);
transformer('JavaScript best', onwWord);
*/

/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
*/
/*
// Same function as above but using arrow function
const greet = greeting => name => {
  console.log(`${greeting} ${name}`);
};

const greeterHey = greet('Hey');

greeterHey('Nishant');
greeterHey('Joshi');

greet('Hello')('Zoc');
*/

const nepalanza = {
  airlines: 'Nepal',
  iataCode: 'NP',
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat in ${this.airlines} flight ${this.iataCode} ${flightNum}.`
    );
    this.booking.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

nepalanza.book(222, 'Nishant Joshi');
nepalanza.book(269, 'Paras Joshi');
console.log(nepalanza);

const nepalFli = {
  airlines: 'NepalFli',
  iataCode: 'NF',
  booking: [],
};

const book = nepalanza.book;

// Doesnot work
// book(23, 'NJ');

// Call Method
book.call(nepalFli, 23, 'NJ');
console.log(nepalFli);

book.call(nepalanza, 256, 'Parass');
console.log(nepalanza);

const nepalFly = {
  airlines: 'NepalFly',
  iataCode: 'NFy',
  booking: [],
};

book.call(nepalFly, 223, 'NJz');
console.log(nepalFly);

// Apply Method
const flightData = [586, 'Pasa Joshi'];
book.apply(nepalFly, flightData);
console.log(nepalFly);

book.call(nepalFly, ...flightData);
console.log(nepalFly);

// Bind Method

const bookNFy = book.bind(nepalFly);
const bookNP = book.bind(nepalanza);
const bookNF = book.bind(nepalFli);
bookNFy(5678, 'Chove Bro');
bookNP(1234, 'Ma Dude');
bookNF(91011, 'Pasa Bro');

const bookNFy123 = book.bind(nepalFly, 123);
bookNFy123('Jassee Pinkman');

// With Event Listeners
nepalanza.planes = 300;
nepalanza.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
  console.log(this);
};

document
  .querySelector('.buy')
  .addEventListener('click', nepalanza.buyPlane.bind(nepalanza));

// Partial Application

const addTax = (rate, value) => {
  return value + value * rate;
};
console.log(addTax(0.1, 10));

const addVAT = addTax.bind(null, 0.13);
console.log(addVAT(50));
