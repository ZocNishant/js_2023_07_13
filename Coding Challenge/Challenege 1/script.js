/*
const markMass = 78; //IN KG
const johnMass = 95; //IN KG

const markHeight = 1.69; //IN METER
const johnHeight = 1.88; // IN METER

const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);


console.log(markBMI, johnBMI);

const markHigherBMI = (markBMI > johnBMI);
console.log(markHigherBMI);

if(markBMI > johnBMI) {
    console.log(`John's BMI is higher i.e. ${johnBMI}`)
}else {
    console.log(`Mark's BMI is higher i.e. ${markBMI}`);
}
*/

const teamDolphinesDataOne = Number(prompt("Dolphine One Data One"));
const teamDolphinesDataTwo = Number(prompt("Dolphine One Data Two"));
const teamDolphinesDataThree = Number(prompt("Dolphine One Data Three"));

const teamKoalasDataOne = Number(prompt("Koalas One Data One"));
const teamKoalasDataTwo = Number(prompt("Koalas One Data Two"));
const teamKoalasDataThree = Number(prompt("Koalas One Data Three"));

const averageDolphine = (teamDolphinesDataOne + teamDolphinesDataTwo + teamDolphinesDataThree) / 3;

const averageKoalas = (teamKoalasDataOne + teamKoalasDataTwo + teamKoalasDataThree) / 3;

// const minScore = 100;

if((averageDolphine) > (averageKoalas)) {
    console.log("Dolphines are the winners!!🤩");
}else if(averageKoalas > averageDolphine) {
    console.log("Koalas are the winners!!🤩");
}else if(averageDolphine === averageKoalas) {
    console.log("Draw!!🤣🤣🤣")
}else {
    console.log('Khoi k vako ho!!😁😁😁😁')
}

