// singleton
// declared as literals, not singleton
// declared as constructor then yes, it is singleton

//literals and constructors are just different two different type to make objects, only difference is singleton or not


// object literals
const mySym = Symbol("key1")


const JsUser = {
    name: "Rishi",
    "full name": "Rishi Raj",
    [mySym]: "mykey1",
    age: 21,
    location: "Chandigarh",
    email: "rishi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "rishi@chatgpt.com"
// Object.freeze(JsUser)                        // Freeze object
JsUser.email = "rishi@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());