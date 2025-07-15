let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)  // Boolean() , String() 
console.log(typeof valueInNumber);

console.log(valueInNumber);

// score null       => number , 0
// score 33abs      => number , NaN
// score undefined  => number , NaN
// score true       => number , 1
// score false      => number , 0
// score "rishi"    => number , NaN

// ******************************* Operations ******************************* //

let value = 4;
let negValue = -value;
// console.log(negValue);

let str1 = "rishi";
let str2 = " raj";
let str3 = str1 + str2;
// console.log(str3);

// console.log( "1" + 2);
// console.log(  1  + "2");
// console.log( "1" + 2 + 2);
// console.log( 1 + 2 + "2");

// console.log(+true);
// console.log(+"");

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

// Read about Increment, Decrement, Prefix, Postfix and also try to understand the syntax on MDN resources:
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion