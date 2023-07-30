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

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');

greeterHey('Nishant');
