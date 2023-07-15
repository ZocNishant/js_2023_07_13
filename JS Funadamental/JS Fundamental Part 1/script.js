/*
// VALUES AND VARIABLES

let firstName = "Nishant";
let lastName = "Joshi";
console.log(firstName);
console.log(lastName);

// naming a variable
let n_joc = "NJ";
let $function = 27;

let myFirstJob = "IT Officer";
let myCurrentJob = "Software Engineer";
*/

// Assignment

/*
const country = "Nepal";
const continent = "Asia";
let population = 30300000;
console.log(country);
console.log(continent);
console.log(population);

if(population > 33000000) {
    console.log("Nepal's population is above average.")
}else {
    const remaningPop = 33000000 - population;
    console.log(`Nepal's popluation is ${remaningPop} below average.`);
}
const ne = population / 2;
const pal = population / 2;
console.log(ne, pal);
population += 1;
console.log(population);
const popFinland = 6000000;
console.log(popFinland > population);
const avgPopn = 33000000;
console.log(avgPopn >= population);

const description = "Portugal is in Europe, and its 11 million people speak portuguese";

const descriptionNew = `${country} is in ${continent} with ${population} which is bigger then Finland`;
console.log(descriptionNew);

const isIsland = false;
const language = "Nepali";
console.log(typeof isIsland);
console.log(typeof populaation);
console.log(typeof country);
console.log(typeof language);
*/

const numNeighbours = prompt("How many neighbour countries does your country have");

/*
// PRIMITIVE DATA TYPE

let isJSFun = true;
let age = 24;
let isCountry = "Nepal";
console.log(typeof(isJSFun));
console.log(typeof(age));
console.log(typeof(isCountry));

isJSFun = "Nepal";  //dynamic typing
console.log(typeof isJSFun);

//undefined
let emptyValue;
console.log(emptyValue);
console.log(typeof emptyValue);

emptyValue = 2080;
console.log(emptyValue);
console.log(typeof emptyValue);

console.log(typeof null)
*/

// let, const, var

//Arithmetic operator

/*
let now = 2037;

const ageParas = now - 1997;
const ageSarah = now - 2018;
console.log(ageParas, ageSarah);

console.log(ageParas * ageSarah, ageParas / 5, 4 ** 2);
// ** => exponentation

const firstNaam = "Nishant";
const lastNaam = "Joshi";
console.log(firstNaam + " " + lastNaam);

//Assignment operator
let x = 10 + 5;
x += 15; // x = x + 15
x--;
x++
console.log(x);

//comparision operator

console.log(ageParas > ageSarah);
console.log(ageSarah >= 18);
*/

//operator precedence
/*
const now = 2023;
const nowPasa = now - 1997;
const nowPasi = now - 2018;

console.log(now - 1991 > now - 2018);

let x,y;
x = y = 25 - 10 - 5;
console.log(x,y);

const averageAge = (nowPasa + nowPasi) / 2;
console.log(averageAge);
console.log(nowPasa, nowPasi);
*/

/*
const fName = "Nishant";
const job = 'Software Engineer / Hacker';
const birthYear = 1997;
const nowYear = 2023;

const nishant = "I'm " + fName + ', a ' + (nowYear - birthYear) + ' years old ' + job + '!';

const nishantNew = `I'm ${fName}, a ${(nowYear-birthYear)} years old ${job}!`;
console.log(nishantNew);

console.log(nishant);
*/

//Decision if..else
/*
const age = 19;

if(age >= 18) {
    console.log("I can drive ✅.");
} else {
    const yearsLeft = 18 - age;
    console.log(`I can't drive. I need to wait ${yearsLeft} year.`);
}

const janmekoBarsa = 1997;

let century;
if(janmekoBarsa <= 2000){
    century = 20;
}else {
    century = 21;
}

console.log(century);
*/

// Type conversion and coercion

//Type COnversion
/*
const inputYear = '1991';
console.log(Number(inputYear) + 18);

console.log(Number("Nishant"));
console.log(typeof NaN);
console.log(typeof String(23));

//Type Coercion
console.log(typeof ('I am ' + 23 + ' years old.'));
console.log('23' - '10' - 3);
console.log('23' * 2);
console.log('23' / 2);

let n = '1' + 1;
n = n - 1;
console.log(n)
*/


//Truthy and Falsy
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Nishant'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 1;
if(money) {
    console.log('NO NO No spending');
}else {
    console.log('You should get a job!!!');
}

let height;

if(height) {
    console.log('Yo bitch');
}else {
    console.log('NNNoo not defined')
}
*/

//Equality Operator
/*
const age = 18;

if(age === 18) {
    console.log('Pasa 18');
}else if(age < 18) {
    console.log('Bachha');
}else {
    console.log('Thulo raixa');
}

const favourite = Number(prompt("What's your favourite band?"));
console.log(typeof favourite);

if(favourite === 23) {
    console.log('Cool')
}else {
    console.log('🤣')
}
*/

//Logical Operator
/*
const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision); //true
console.log(hasDriverLicense && !hasGoodVision); //false
console.log(hasDriverLicense || hasGoodVision); //true
console.log(hasDriverLicense || !hasGoodVision); //true
console.log(!hasGoodVision); //false


const isTired = false;
console.log(hasDriverLicense || hasGoodVision || isTired) // true
console.log(hasDriverLicense || hasGoodVision || !isTired) //true
console.log(hasDriverLicense && hasGoodVision && isTired) // true
console.log(hasDriverLicense && hasGoodVision && !isTired) //false

if(hasDriverLicense && hasGoodVision && !isTired) {
    console.log('Can Drive');
}else {
    console.log('NOOOOO Driving')
};
*/

// Switch Statement
/*
const day = 'sunday';

switch (day) {
    case 'monday':
        console.log('Plan to sleep');
        console.log('Plan to sleep more');
        break;
    case 'tuesday':
        console.log("Khoi kei socheko xaina ni.");
        break;
        case 'wednesday':
    case 'thursday':
        console.log("Khoi kei sochnai sake xaina ni.");
        break;
        case 'friday':
            console.log("Khoi kei myan xaina ni.");
            break;
            case 'saturday':
                console.log("Khoi kei meeean xaina ni.");
                break;
                case 'sunday':
        console.log("Khoi kei toari para xaina ni.");
        break;
        default:
        console.log('Pasa');
    }
    
    if(day === 'monday') {
        console.log('Plan to sleep');
        console.log('Plan to sleep more');
    }else if(day === 'tuesday') {
        console.log("Khoi kei socheko xaina ni.");
    }else if(day === 'wednesday' || day === 'thursday') {
        console.log("Khoi kei sochnai sake xaina ni.");
    }else if(day === 'friday') {
        console.log("Friday");
    }else if (day === 'saturday'){
        console.log("Saturday");
    }else if (day === 'sunday') {
        console.log("Sunday")
    }else {
        console.log('Nothing')
    }
    */

    // Statement and Expression

    // Conditional Ternary Operato
/*
    const age = 23;
    age >= 18 ? console.log("Pasa") : console.log('Solti');
*/