'use strict';

// Functions

/*
function logger() {
    console.log("My Function");
}

logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

//Function Declaration

/*
function calcAge1(birthYear) {
    return 2023 - birthYear;
}

const age1 = calcAge1(1997);
console.log(age1);

//function expression
const calcAge2 = function(birthYeah) {
    return 2023 - birthYeah;
}

const age2 = calcAge2(1998);
console.log(age2);
*/


// Arrow Function
/*
const calcAge3 = birthYeah => 2023 - birthYeah;

const age3 = calcAge3(1999);
console.log(age3)


const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2023 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires  in ${retirement} years.`
}



console.log(yearsUntilRetirement(1999, 'Nishant'));
console.log(yearsUntilRetirement(1997, 'Syani'));
*/

// Function calling other function
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} and ${orangePieces}.`
    return juice;
}

console.log(fruitProcessor(2,3));
*/
/*
function calcAge(birthYeah) {
    return 2023 - birthYeah;
}

const yearsUntilRetirement = function(birthYeah, firstName){
    const age = calcAge(birthYeah);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires  in ${retirement} years.`);
        return retirement;
    }else {
        return -1;
    }
}

console.log(yearsUntilRetirement(1998, 'Nisha'));
console.log(yearsUntilRetirement(1997, 'Nishant'));
console.log(yearsUntilRetirement(1930, 'ishant'));

*/

// Arrays
/*
const friends = ['Nishant', 'Nisha', 'Nish'];
console.log(friends[2]);

const yearsS = new Array(1997, 1998, 1999, 2000);
console.log(yearsS[0]);

console.log(friends.length);
console.log(friends[friends.length-1]);

const firstName = 'Nishant'
const nishant = [firstName, 'Joshi', 2023 - 1998, friends];
console.log(nishant);

// Exercise
const calcAge = function (birthYeah) {
    return 2023 - birthYeah;
}

const years = [1990, 1992, 1996, 1997, 2000];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[years.length-1]);

console.log(age1, age2, age3, age4);

const ages = [age1, age2, calcAge(years[2]), calcAge(years[years.length-1])];
console.log(ages);
*/

//Array Methods

const friends = ['N', 'I', 'S', 'H'];
friends.push('A');
console.log(friends)