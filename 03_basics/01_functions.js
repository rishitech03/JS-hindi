// console.log("R");
// console.log("I");
// console.log("S");
// console.log("H");
// console.log("I");

// function callMyName(){
//     console.log("R");
//     console.log("I");
//     console.log("S");
//     console.log("H");
//     console.log("I");
// }
// callMyName;
// callMyName();



// make a function to add two numbers
// function addNumbers(x, y){      // Parameters: when you make function defination than you pass some parameters like x, y
//     console.log(x+ y);
//     // return x + y;
// }
// const result = addNumbers(3, 5);
// console.log("Result: " , result); // undefined
// console.log(addNumbers(3, 5));  // Arguments: you pass values at the time of function calling is called arguments
// console.log(addNumbers(3, "4"));
// console.log(addNumbers(3, "b"));
// console.log(addNumbers(3, null));

function loginUserMessage(username = "Raj"){
    // if(username === undefined || username === "")
    if(!username){
        return `Enter your username`;
    }
    return `${username} logged in successfully`;
}
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());
// console.log(loginUserMessage("Rishi"));



function calculateCartPrice(val1, val2, ...items){
    return items;
}
// console.log(calculateCartPrice(100,200,800,1200,2000));


// Functions in objects:
const user = {
    username : "Rishi",
    price : 197
}
function handleObject(anyObject){
    // return
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// console.log(handleObject(user));

// Directly giving the object at the function calling
handleObject(user);
handleObject({
    username : "Raj",
    price : 399
});



// Functions in array
let newArray = [100, 300, 800, 1200];
function secondValueInArray(value){
    return value[1];
}
console.log(secondValueInArray(newArray));
// Directly giving the array at the function calling
console.log(secondValueInArray([11, 12, 13, 14]));