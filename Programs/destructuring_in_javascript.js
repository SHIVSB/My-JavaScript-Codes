/**
 * Destructuring objects in javascript
 */

let names = ["Shivanshu","Panwar","IIIT","KOTA"];

let firstName = names[0];
let lastName = names[3];
let thirdName = names[2];

console.log(firstName);
console.log(thirdName);
console.log(lastName);

//This one is the fancy way or the better way

let [fName,,tName,,lName] = names;

console.log(fName);
console.log(tName);
console.log(lName);