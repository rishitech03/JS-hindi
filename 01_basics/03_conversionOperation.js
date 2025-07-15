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