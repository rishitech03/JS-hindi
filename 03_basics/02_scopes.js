// let a = 10;
// const b = 20;
// var c = 30;

// var c = 300;

let a = 99;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log(`Inner a = ${a}`)
}
// console.log(a);
// console.log(b);
// console.log(c);



// Nested-Scope
function one(){
    const username = "Rishi";
    function two(){
        const website = "youtube";
        // console.log(username);
    }
    // console.log(website);    // gives an error
    two()
}
one()

// Example:
if(true){
    const username = "Rishi";
    if(username === "Rishi"){
        const website = username + " youtube";
        // console.log(website);
    }
}



// ++++++++++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++++++++ //
addOne(5); // will run successfully
function addOne(num){
    return num + 1;
}
addOne(5); // will run successfully

addTwo(5); // ---------Here it will give an error because of hoisting
const addTwo = function addTwo(num){
    return num + 2;
}
addTwo(5); // will run successfully

// addTwo is a function which is given to a variable and that variable is called as Regular Expression.
// Variables has a concept of hoisting.
// Execution Context