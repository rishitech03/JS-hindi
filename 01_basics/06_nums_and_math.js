const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(1)); // it will only show 1 number after decimal like 100.0
console.log(balance.toFixed(2)); // it will show 2 numbers after decimal     like 100.00

const otherNumber = 23.9553
console.log(otherNumber.toPrecision(2)); // returns the string value

const money = 10000000;
console.log(money.toLocaleString());


// ****************************** Math ****************************** //
console.log(Math);
console.log(Math.abs(-5));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


//get value between 10 to 20
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)