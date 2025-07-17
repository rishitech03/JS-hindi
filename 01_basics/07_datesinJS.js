const myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// let myCreatedDate = new Date(2023, 0, 23);           // here it is taking month as 00
// console.log(myCreatedDate.toDateString())

// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate.toLocaleString());


// YY-MM-DD
let myCreatedDate1 = new Date("2023-01-14");             // here it is taking month as 01
// console.log(myCreatedDate1.toLocaleString());

// MM-DD-YY (Indian Format)
let myCreatedDate2 = new Date("01-14-2023");
// console.log(myCreatedDate2.toLocaleString());



let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate1.getTime());

// console.log(Math.floor(Date.now()/1000)); // to remove the decimal value use floor

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1); // 1 is added because months start from 0 not from 1
// console.log(newDate.getTime());

// String Interpolation
// '${newDate.getDay()} and the time is ${newDate.getTime()}'

newDate.toLocaleString('default', {
    //use control space to get options to give values like day, hour, minute etc.
    weekday: "long",
})