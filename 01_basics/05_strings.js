const name = "Rishi";
const repoCount = 50;

// console.log(name + repoCount);
/*                          String interpolation                          */
// console.log(`My name is ${name} and my repo count is ${repoCount}`)


// Another way to declare a String variable
// Declared in the form of object where you can use multiple methods on the string

const gameName = new String("Rishi's Game");

// console.log(gameName);
// console.log(gameName[0]);


// console.log(gameName.__proto__); // it showing empty object but it is not empty, best way to check on web console
// console.log(gameName.length);

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt("i"));  //charAt takes number as input but here "i" is given 
                                    // then it converts i into NaN and then give 0 to NaN
                                    //  so in the end result will be 
                                    // charAt("i") is charAt(NaN)
                                    // charAt(NaN) is charAt(0) which gives output R
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf("i"));
// console.log(gameName.lastIndexOf("i"));


const newString = gameName.substring(0,4);
const anotherString = gameName.slice(-12, 4);
console.log(newString);
console.log(anotherString);


// trim method
const userName = "    rishi   raj  ";
console.log(userName);
console.log(userName.trim());
console.log(userName.trim().replace(/\s+/g,' ')); 
// /s+ is for the extra space, tab, line; 
// /g is a global flag used for all not for only first occurance


// replace method
const url = "https://rishi.com/rishi64&&Game001"
console.log(url.replace('64&&',"'s"));